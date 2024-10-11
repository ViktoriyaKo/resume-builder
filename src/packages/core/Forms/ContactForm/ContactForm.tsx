'use client';

import styles from './ContactForm.module.css';
import { Button, Input } from '@/ui/atoms';
import { useForm, FormProvider } from 'react-hook-form';
import { useState } from 'react';
import { Modal } from '@/ui/organisms';
import { FormContactValues } from '@/types';
import { createRequest } from '@/services';

interface IProps {
  title: string;
  label: string;
}

const ContactForm = (props: IProps) => {
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
        <p>{title}</p>
        <Input
          name={'email'}
          placeholder="Email"
          type={'email'}
          id={'email'}
          rules={{ required: 'Enter your email' }}
        />
        <textarea
          {...methods.register('text')}
          className={styles.textArea}
          placeholder="..."
          rows={5}
        />
        <Button className={styles.button} type={'submit'}>
          {label}
        </Button>
      </form>
      <Modal
        isOpen={open}
        closeLabel={'Close'}
        onClose={() => setOpen(false)}
        title={'Thank you for your message!'}
        description={'We will definitely contact you'}
      />
    </FormProvider>
  );
};

export default ContactForm;
