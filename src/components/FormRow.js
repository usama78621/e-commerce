const FormRow = ({ name, type, handleChange, value, labelText }) => {
  return (
    <div className="from-row">
      <label htmlFor={name} className="from-label py-1 text-capitalize">
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
