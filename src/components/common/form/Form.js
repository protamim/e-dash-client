export const TextArea = ({ name, className, placeholder, required }) => {
  return (
    <textarea
      name={name || ""}
      required={required || false}
      placeholder={placeholder}
      className={`${className || ''} border border-indigo-300 min-h-40 pl-3 pt-3 outline-none rounded-lg`}
    />
  );
};

export const Label = ({ children, className }) => {
  return <label className={`${className || ''}`}>{children}</label>;
};

export const Input = ({ type, placeholder, name, required }) => {
  return (
    <input
      type={type || "text"}
      name={name || ""}
      placeholder={placeholder}
      required={required || false}
      className={`border border-indigo-300 h-10 pl-3 outline-none rounded-lg`}
    />
  );
};

export const InputWrapper = ({ children, className }) => {
  return <div className={`${className || ""} flex flex-col gap-y-2`}>{children}</div>;
};

export const Form = ({ children, className, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={`${className} bg-white p-5 rounded-md`}>{children}</form>
  );
};
