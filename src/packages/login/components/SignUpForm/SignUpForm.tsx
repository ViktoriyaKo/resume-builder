import styles from './SignUpForm.module.css';
import { FormProvider, useForm } from 'react-hook-form';
import { Input } from '@/ui/atoms';
import { Button } from '@/ui/atoms';
import PasswordInput from '../PasswordInput/PasswordInput';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getRequestOptions } from '@/utils';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Form = () => {
  const { lang } = useParams();
  const router = useRouter();

  const initialData = {
    email: '',
    password: '',
    repeatPassword: '',
  };

  const methods = useForm({ defaultValues: initialData });

  const onSubmit = async (data: {
    email: string;
    password: string;
    repeatPassword: string;
  }) => {
    try {
      const options: RequestInit = getRequestOptions({ method: 'POST', data });
      const res = await fetch(`/api/create-user`, options);
      if (res.ok) {
        await signIn('credentials', {
          redirect: false,
          email: data.email,
          password: data.password,
        });
        router.push(`/${lang}`);
      } else {
        const errorText = await res.json();
        methods.setError('repeatPassword', {
          type: 'manual',
          message: errorText.message,
        });
      }
    } catch (error) {
      console.log('Error');
    }
  };

  const password = methods.watch('password');

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.wrapper}>
          <Input
            name={'email'}
            rules={{ required: 'Email is required' }}
            placeholder="Enter email"
            type={'email'}
          />
          <PasswordInput
            name={'password'}
            placeholder={'Enter password'}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
            }}
          />
          <PasswordInput
            name={'repeatPassword'}
            placeholder={'Repeat password'}
            rules={{
              required: 'Please repeat your password',
              validate: (value) =>
                value === password || 'Passwords do not match',
            }}
          />
        </div>
        <Button type={'submit'} className={styles.button}>
          Register
        </Button>
        <Link href={`/${lang}/sign-in`} className={styles.link}>
          Have you already had account? Sign in
        </Link>
      </form>
    </FormProvider>
  );
};

export default Form;
