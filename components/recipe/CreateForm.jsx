import React from 'react';
import { useForm } from 'react-hook-form';
import FormInput from '../form/FormInput';
import FormTextarea from '../form/FormTextarea';

function CreateForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch('name'));

  return (
    <div className='container'>
      <div className='flex flex-col items-center'>
        <form className='w-8/12 space-y-20' onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label='Recipe Name'
            name='name'
            placeholder='Recipe Name Here...'
            register={register}
            required
          />

          <FormTextarea
            label='Description'
            name='description'
            placeholder='Describe Your Recipe...'
            register={register}
            required
          />

          <input type='submit' />
        </form>
      </div>
    </div>
  );
}

export default CreateForm;
