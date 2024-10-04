import React from 'react';

const InputField = ({ id, label, value, onChange, placeholder, error }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={error ? 'error-input' : ''}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default InputField;
