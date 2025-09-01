import { useEffect, useState } from "react";

function TaskForm({ initial = {}, onSave }) {
  const [title, setTitle] = useState(initial.title || "");
  const [description, setDescription] = useState(initial.description || "");
  const [dueDate, setDueDate] = useState(initial.dueDate || "");

  useEffect(() => {
    setTitle(initial.title || "");
    setDescription(initial.description || "");
    setDueDate(initial.dueDate || "");
  }, [initial]);

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title required");
    onSave({
      title,
      description,
      dueDate,
      status: initial.status || "Pending",
    });
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-3">
      <label>
        Title
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded mt-1"
        />
      </label>
      <label>
        Description
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded mt-1"
        />
      </label>
      <label>
        Due Date
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full border p-2 rounded mt-1"
        />
      </label>
      <div className="flex justify-end gap-2">
        <button
          type="submit"
          className="px-4 py-2 rounded bg-indigo-600 text-white"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
