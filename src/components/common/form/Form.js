export const TextArea = (props) => {
  const { name, required, placeholder, className } = props;
  return (
    <textarea
      name={name || ""}
      required={required || false}
      placeholder={placeholder}
      className={`${
        className || ""
      } border border-indigo-300 min-h-40 pl-3 pt-3 outline-none rounded-lg`}
    />
  );
};

export const Input = (props) => {
  const { type, placeholder, required, className, defaultValue, name } = props;
  return (
    <input
      type={type || "text"}
      placeholder={placeholder}
      defaultValue={defaultValue}
      required={required || false}
      name={name}
      className={`${className} border border-indigo-300 h-10 pl-3 outline-none rounded-lg`}
    />
  );
};

export const InputWrapper = ({ children }, props) => {
  const { className } = props;
  return (
    <div className={`${className || ""} flex flex-col gap-y-2`}>{children}</div>
  );
};

export const Form = ({ children }, props) => {
  const { className, onSubmit } = props;
  return (
    <form
      onSubmit={onSubmit}
      className={`${className} bg-white p-5 rounded-md`}
    >
      {children}
    </form>
  );
};
