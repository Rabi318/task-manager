import { useEffect, useState } from "react";

function ProfileForm({ userDoc, onSave }) {
  const [name, setName] = useState(userDoc.name || "");
  const [photoURL, setPhotoURL] = useState(userDoc.photoURL || "");

  useEffect(() => {
    setName(userDoc.name || "");
    setPhotoURL(userDoc.photoURL || "");
  }, [userDoc]);

  const submit = (e) => {
    e.preventDefault();
    onSave({ name, photoURL });
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-3 max-w-md">
      <label>
        Name
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded mt-1"
        />
      </label>
      <label>
        Profile Picture URL
        <input
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          className="w-full border p-2 rounded mt-1"
        />
      </label>
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 rounded bg-indigo-600 text-white"
        >
          Update
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;
