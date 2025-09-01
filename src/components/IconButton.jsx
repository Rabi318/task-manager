const IconButton = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`p-2 rounded hover:bg-gray-100 ${className}`}
  >
    {children}
  </button>
);

export default IconButton;
