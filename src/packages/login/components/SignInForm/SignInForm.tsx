import styles from './SignInForm.module.css';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Button, Input } from '@/ui/atoms';
import { useParams } from 'next/navigation';
import PasswordInput from '../PasswordInput/PasswordInput';
import { ChangeEvent } from 'react';

const Form = () => {
  const { lang } = useParams();
  const initialData = {
    email: '',
    password: '',
  };

  const { handleSubmit, setValue } = useForm({
    defaultValues: initialData,
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.wrapper}>
        <Input
          name={'email'}
          onChange={(e) => setValue('email', e.target.value)}
          placeholder="Enter email"
          type={'email'}
        />
        <PasswordInput
          placeholder={'Enter password'}
          name={'password'}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue('password', e.target.value)
          }
        />
      </div>
      <Button type={'submit'} className={styles.button}>
        Войти
      </Button>
      <Link href={`/${lang}/sign-up`} className={styles.link}>
        Если у вас нет аккаунта, то нажмите сюда для регистрации
      </Link>
    </form>
  );
};

export default Form;
