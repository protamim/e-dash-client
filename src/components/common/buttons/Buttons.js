const PrimaryBtn = ({ children, type, className, onClick }) => {
  return (
    <button
    onClick={onClick}
      type={type || 'button'}
      className={`${className || ""} bg-indigo-200 max-w-max py-2 px-5 rounded-lg transition-all ease-in-out duration-300 border border-transparent hover:bg-transparent hover:border hover:border-indigo-200`}
    >
      {children}
    </button>
  );
};

export { PrimaryBtn }
