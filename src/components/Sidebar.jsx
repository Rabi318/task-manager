import React from "react";
import { useState } from "react";

// Using inline SVG icons for a professional and scalable look.
// In a full app, you would typically use a library like 'react-icons'.

const AllTasksIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 10h18M3 6h18M3 14h18M3 18h18" />
  </svg>
);

const CompletedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-8.15" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const PendingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ProfileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

function Sidebar({ active, setActive }) {
  const items = [
    { id: "all", label: "All Tasks", icon: <AllTasksIcon /> },
    { id: "completed", label: "Completed", icon: <CompletedIcon /> },
    { id: "pending", label: "Pending", icon: <PendingIcon /> },
    { id: "profile", label: "Profile", icon: <ProfileIcon /> },
  ];

  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 p-6 flex flex-col">
      {/* Title with a more professional font and spacing */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-xl font-bold text-indigo-600">Task</span>
        <span className="text-xl font-medium text-gray-800">Board</span>
      </div>

      <nav className="flex-1 flex flex-col gap-1">
        {items.map((it) => (
          <button
            key={it.id}
            onClick={() => setActive(it.id)}
            className={`flex items-center gap-3 p-3 rounded-xl transition-colors duration-200 group
              ${
                active === it.id
                  ? "bg-indigo-600 text-white font-semibold shadow-md"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
          >
            {/* The icon, styled with dynamic colors */}
            <span
              className={`${
                active === it.id
                  ? "text-white"
                  : "text-gray-500 group-hover:text-gray-700"
              }`}
            >
              {it.icon}
            </span>
            <span>{it.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
