function Modal({ open, children, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-40 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
