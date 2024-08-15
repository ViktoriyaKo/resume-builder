import styles from './Form.module.css';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Input } from '@/ui/atoms';
import { Button } from '@/ui/atoms';

const Form = () => {
  const initialData = {
    email: '',
    password: '',
  };

  const { handleSubmit, register } = useForm({
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
          {...register('email')}
          placeholder="Enter email"
          type={'email'}
        />
        <Input
          {...register('password')}
          placeholder="Enter password"
          type={'password'}
        />
      </div>
      <Button type={'submit'} className={styles.button}>
        Войти
      </Button>
      <Link href={'/sign-up'} className={styles.link}>
        Если у вас нет аккаунта, то нажмите сюда для регистрации
      </Link>
    </form>
  );
};

export default Form;
