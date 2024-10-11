'use client';

import styles from '../styles/ReviewForm.module.css';
import { Button, Input } from '@/ui/atoms';
import { useForm, FormProvider } from 'react-hook-form';
import { useState } from 'react';
import { Modal } from '@/ui/organisms';
import { FormContactValues } from '@/types';
import { createRequest } from '@/services';
import { Rating } from 'react-simple-star-rating';

interface IProps {
  title: string;
  label: string;
}

const ReviewForm = (props: IProps) => {
  const { title, label } = props;
  const initialForm = { email: '', text: '' };
  const [open, setOpen] = useState(false);
  const methods = useForm({
    defaultValues: initialForm,
    mode: 'onSubmit',
  });

  const onSubmit = async (body: FormContactValues) => {
    await createRequest(body);
    setOpen(true);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
        <p className={styles.title}>{title}</p>
        <Rating allowFraction={true} size={30} />
        <Input
          name={'email'}
          placeholder="Name"
          type={'text'}
          rules={{ required: 'Enter your name' }}
        />
        <textarea
          {...methods.register('text')}
          className={styles.textArea}
          placeholder="Leave your review"
          rows={5}
        />
        <Button className={styles.button} type={'submit'}>
          {label}
        </Button>
      </form>
      <Modal
        closeLabel={'Close'}
        isOpen={open}
        onClose={() => setOpen(false)}
        title={'Thank you for your review!'}
      />
    </FormProvider>
  );
};

export default ReviewForm;
