import styles from './SignInForm.module.css';
import Link from 'next/link';
import { useForm, FormProvider } from 'react-hook-form';
import { Button, Input } from '@/ui/atoms';
import { useParams } from 'next/navigation';
import PasswordInput from '../PasswordInput/PasswordInput';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Form = () => {
  const { lang } = useParams();
  const router = useRouter();

  const initialData = {
    email: '',
    password: '',
  };

  const methods = useForm({
    defaultValues: initialData,
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      if (result?.ok) {
        router.push(`/${lang}`);
      } else {
        methods.setError('password', {
          type: 'manual',
          message: 'Password or Email are not correct',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        </div>
        <Button type={'submit'} className={styles.button}>
          Войти
        </Button>
        <Link href={`/${lang}/sign-up`} className={styles.link}>
          Если у вас нет аккаунта, то нажмите сюда для регистрации
        </Link>
      </form>
    </FormProvider>
  );
};

export default Form;
