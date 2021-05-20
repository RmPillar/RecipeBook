import React from 'react';

const FormTextarea = ({ name, label, placeholder, register, required }) => {
  return (
    <div className='flex flex-col'>
      <label className='form-label'>{label}</label>
      <textarea
        name={name}
        placeholder={placeholder}
        className='form-textarea'
        {...register(name, { required })}
      />
    </div>
  );
};

export default FormTextarea;
