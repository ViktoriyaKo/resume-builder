'use client';

import styles from './ContactForm.module.css';
import { Button, Input } from '@/ui/atoms';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Modal } from '@/ui/organisms';
import { FormContactValues } from '@/types';
import { createRequest } from '@/services';

interface IProps {
  title: string;
  label: string;
}

const ContactForm = (props: IProps) => {
  const initialForm = { email: '', text: '' };
  const [open, setOpen] = useState(false);
  const { handleSubmit, register } = useForm({
    defaultValues: initialForm,
    mode: 'onSubmit',
  });

  const onSubmit = async (body: FormContactValues) => {
    await createRequest({ path: 'request', body });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <p>{props.title}</p>
        <Input
          {...register('email')}
          placeholder="Email"
          type={'email'}
          id={'email'}
        />
        <textarea
          {...register('text')}
          className={styles.textArea}
          placeholder="..."
          rows={5}
        />
        <Button className={styles.button} type={'submit'}>
          {props.label}
        </Button>
      </form>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={'Thank you for your message!'}
        description={'We will definitely contact you'}
      />
    </>
  );
};

export default ContactForm;
