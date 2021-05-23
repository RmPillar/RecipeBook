import React from 'react';

import classNames from 'classnames';
import { isEmpty } from 'lodash';

const FormTextarea = ({
  name,
  label,
  placeholder,
  type,
  required,
  errors = {},
  classes,
  register,
}) => {
  return (
    <div className={classNames('flex flex-col', classes)}>
      <label className='form-label'>{label}</label>
      <textarea
        name={name}
        type={type}
        placeholder={placeholder}
        aria-label={name}
        className='form-textarea'
        {...register(name, { required })}
      />
      {!isEmpty(errors[name]) && errors[name].type === 'required' && (
        <span className='form-error'>This field is required</span>
      )}
    </div>
  );
};

export default FormTextarea;
