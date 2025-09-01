import { useEffect, useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ProfileForm from "./components/ProfileForm";
import Sidebar from "./components/Sidebar";
import TaskCard from "./components/TaskCard";
import TaskForm from "./components/TaskForm";
import { db } from "./services/firebase.js";
import {
  collection,
  doc,
  addDoc,
  setDoc,
  onSnapshot,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";

export default function App() {
  const [active, setActive] = useState("all");
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState({ name: "", photoURL: "" });
  const [modalOpen, setModalOpen] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [viewMode, setViewMode] = useState("grid");

  // Firestore refs
  const tasksCol = collection(db, "tasks");
  const userDocRef = doc(db, "users", "me");
  useEffect(() => {
    const q = query(tasksCol, orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      const arr = [];
      snap.forEach((d) => arr.push({ id: d.id, ...d.data() }));
      setTasks(arr);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    const unsub = onSnapshot(userDocRef, (docSnap) => {
      if (docSnap.exists()) setUser(docSnap.data());
      else setUser({ name: "", photoURL: "" });
    });
    return () => unsub();
  }, []);

  const addTask = async (payload) => {
    await addDoc(tasksCol, { ...payload, createdAt: new Date() });
    setModalOpen(false);
  };

  const saveTask = async (payload) => {
    if (!editTask) return addTask(payload);
    const d = doc(tasksCol, editTask.id);
    await updateDoc(d, { ...payload });
    setEditTask(null);
    setModalOpen(false);
  };

  const deleteTask = async (id) => {
    if (!confirm("Delete task?")) return;
    await deleteDoc(doc(tasksCol, id));
  };

  const toggleStatus = async (task) => {
    const d = doc(tasksCol, task.id);
    const newStatus = task.status === "Completed" ? "Pending" : "Completed";
    await updateDoc(d, { status: newStatus });
  };

  const saveProfile = async (payload) => {
    await setDoc(userDocRef, payload, { merge: true });
  };

  const filtered = tasks.filter((t) => {
    if (active === "all") return true;
    if (active === "completed") return t.status === "Completed";
    if (active === "pending") return t.status === "Pending";
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar active={active} setActive={setActive} />
        <div className="flex-1 flex flex-col">
          <Header
            user={user}
            openAdd={() => {
              setEditTask(null);
              setModalOpen(true);
            }}
          />

          <main className="p-6">
            {active !== "profile" ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-sm text-gray-600">View:</div>
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`px-2 py-1 border rounded ${
                        viewMode === "grid" ? "bg-indigo-50" : ""
                      }`}
                    >
                      Grid
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`px-2 py-1 border rounded ${
                        viewMode === "list" ? "bg-indigo-50" : ""
                      }`}
                    >
                      List
                    </button>
                  </div>
                  <div className="text-sm text-gray-600">
                    {filtered.length} tasks
                  </div>
                </div>

                <div
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                      : "flex flex-col gap-3"
                  }
                >
                  {filtered.map((t) => (
                    <div
                      key={t.id}
                      className={viewMode === "list" ? "w-full" : ""}
                    >
                      <TaskCard
                        task={t}
                        onToggle={toggleStatus}
                        onEdit={(task) => {
                          setEditTask(task);
                          setModalOpen(true);
                        }}
                        onDelete={deleteTask}
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div>
                <h3 className="text-lg font-semibold mb-4">Profile</h3>
                <ProfileForm userDoc={user} onSave={saveProfile} />
              </div>
            )}
          </main>
        </div>
      </div>

      <Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditTask(null);
        }}
      >
        <h3 className="text-lg font-semibold mb-2">
          {editTask ? "Edit Task" : "Add Task"}
        </h3>
        <TaskForm initial={editTask || {}} onSave={saveTask} />
      </Modal>
    </div>
  );
}
