import React from 'react';
import { useForm } from 'react-hook-form';
import { FormInput, FormTextarea, FormSelect } from '../form';

function CreateForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className='container'>
      <div className='flex flex-col items-center'>
        <form className='w-8/12 space-y-20' onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label='Recipe Name'
            name='name'
            placeholder='Recipe Name Here...'
            register={register}
            errors={errors}
            required={true}
          />

          <FormTextarea
            label='Description'
            name='description'
            placeholder='Describe Your Recipe...'
            register={register}
            errors={errors}
            required={true}
          />

          <div className='flex space-x-20'>
            <FormInput
              label='Quantity'
              name='quantity'
              placeholder='10'
              register={register}
              required={true}
              errors={errors}
              classes='w-6/12'
            />
            <FormInput
              label='Unit'
              name='unit'
              placeholder='Buns'
              register={register}
              required={true}
              errors={errors}
              classes='w-3/12'
            />
          </div>

          <FormSelect
            label='Difficulty'
            name='difficulty'
            placeholder='Easy'
            options={[
              { label: 'Easy', value: 'Easy' },
              { label: 'Intermediate', value: 'Intermediate' },
              { label: 'Hard', value: 'Hard' },
            ]}
            control={control}
            required={true}
            errors={errors}
          />

          <input type='submit' />
        </form>
      </div>
    </div>
  );
}

export default CreateForm;
