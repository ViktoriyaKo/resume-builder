'use client';

import styles from './ContactForm.module.css';
import { Input } from '@/ui/atoms';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Modal } from '@/ui/organisms';

interface IProps {
  title: string;
  label: string;
}

type FormValues = { email: string; text: string };

const ContactForm = (props: IProps) => {
  const initialForm = { email: '', text: '' };
  const [open, setOpen] = useState(false);
  const { handleSubmit, register, reset } = useForm({
    defaultValues: initialForm,
    mode: 'onSubmit',
  });

  const onSubmit = async (data: FormValues) => {
    try {
      // await createRequest({ name: data.text, contact: data.email });
      // const message = generateMessageForTelegram({
      //   contact: data.email,
      //   text: data.text,
      // });
      // setOpen(true);
      // await sendDataToTelegram(message);
      // reset();
    } catch (error) {
      console.log(error);
    }
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
        <button className={styles.button} type={'submit'}>
          {props.label}
        </button>
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
