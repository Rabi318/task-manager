import React from "react";
import { useState } from "react";

// Using inline SVG icons for a professional and scalable look.
const CheckCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
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

const EditIcon = () => (
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
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
  </svg>
);

const TrashIcon = () => (
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
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M10 11v6M14 11v6" />
  </svg>
);

function TaskCard({ task, onToggle, onEdit, onDelete }) {
  // Determine badge color based on status
  const statusColors = {
    Completed: "bg-green-100 text-green-700",
    Pending: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 transform hover:scale-[1.02] transition-transform duration-200 ease-in-out">
      <div className="flex justify-between items-start gap-4 mb-4">
        {/* Checkbox and Task Info */}
        <div className="flex items-start gap-4 flex-1">
          {/* Toggle Button */}
          <button
            onClick={() => onToggle(task)}
            className={`flex-shrink-0 mt-1 h-6 w-6 rounded-full border-2 transition-colors duration-200
              ${
                task.status === "Completed"
                  ? "bg-indigo-600 border-indigo-600 text-white"
                  : "border-gray-300 text-transparent"
              }`}
          >
            {task.status === "Completed" && <CheckCircleIcon />}
          </button>
          {/* Title and Description */}
          <div className="flex-1">
            <h3
              className={`font-semibold text-gray-800 text-lg leading-tight mb-1
                ${
                  task.status === "Completed"
                    ? "line-through text-gray-400"
                    : ""
                }`}
            >
              {task.title}
            </h3>
            <p className="text-sm text-gray-500 leading-snug">
              {task.description}
            </p>
          </div>
        </div>

        {/* Due Date & Status */}
        <div className="flex flex-col items-end gap-2">
          <div className="text-xs text-gray-400 font-medium">
            Due: {task.dueDate || "—"}
          </div>
          <div
            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
              statusColors[task.status]
            }`}
          >
            {task.status}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-2 mt-4 pt-4 border-t border-gray-100">
        <button
          onClick={() => onEdit(task)}
          className="flex items-center justify-center h-9 w-9 text-gray-500 hover:text-indigo-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
          aria-label="Edit Task"
        >
          <EditIcon />
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="flex items-center justify-center h-9 w-9 text-gray-500 hover:text-red-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
          aria-label="Delete Task"
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
