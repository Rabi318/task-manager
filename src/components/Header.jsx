function Header({ user, openAdd }) {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200">
      {/* Left side: Navigation and Title */}
      <div className="flex items-center gap-6">
        <button
          className="p-2 text-gray-500 hover:text-indigo-600 transition-colors"
          aria-label="Open menu"
        >
          {/* A more professional icon for the menu, e.g., an SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">
          Dashboard
        </h2>
      </div>

      {/* Right side: Actions and User Info */}
      <div className="flex items-center gap-6">
        <button
          onClick={openAdd}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium text-sm shadow-md hover:bg-indigo-700 transition-colors"
        >
          Add Task
        </button>
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={
              user.photoURL ||
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            }
            alt={`${user.name}'s avatar`}
            className="w-10 h-10 rounded-full object-cover border-2 border-gray-100"
          />
          <div className="text-sm">
            <div className="font-semibold text-gray-800">
              {user.name || "User"}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
