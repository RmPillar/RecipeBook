import React from 'react';

import { Controller } from 'react-hook-form';
import Select from 'react-select';

import classNames from 'classnames';
import { isEmpty } from 'lodash';

const FormSelect = ({
  name,
  label,
  placeholder,
  options = [],
  required,
  errors = {},
  classes,
  control,
}) => {
  console.log(errors);
  return (
    <div className={classNames('flex flex-col', classes)}>
      <label className='form-label'>{label}</label>
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            aria-label={name}
            className='form-select'
            name={name}
            placeholder={placeholder}
          />
        )}
      />
      {!isEmpty(errors[name]) && errors[name].type === 'required' && (
        <span className='form-error'>This field is required</span>
      )}
    </div>
  );
};

export default FormSelect;
