import React from 'react';

const FormInput = ({ name, label, placeholder, register, required }) => {
  return (
    <div className='flex flex-col'>
      <label className='form-label'>{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        className='form-input'
        {...register(name, { required })}
      />
    </div>
  );
};

export default FormInput;
