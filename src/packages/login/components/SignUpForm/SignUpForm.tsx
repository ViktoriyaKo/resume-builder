import styles from './SignUpForm.module.css';
import { useForm } from 'react-hook-form';
import { Icon, Input, GoogleIcon } from '@/ui/atoms';
import { Button } from '@/ui/atoms';
import PasswordInput from '../PasswordInput/PasswordInput';
import Link from 'next/link';
import { useParams } from 'next/navigation';


const Form = () => {
  const { lang } = useParams();
  const initialData = {
    email: '',
    password: '',
    repeatPassword: '',
  };

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });

  const onSubmit = async (data: {
    email: string;
    password: string;
    repeatPassword: string;
  }) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const password = watch('password');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.wrapper}>
        <Input
          error={errors.email?.message}
          {...register('email', { required: 'Email is required' })}
          placeholder="Enter email"
          type={'email'}
        />
        <PasswordInput
          error={errors.password?.message}
          placeholder={'Enter password'}
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
          })}
        />
        <PasswordInput
          error={errors.repeatPassword?.message}
          placeholder={'Repeat password'}
          {...register('repeatPassword', {
            required: 'Please repeat your password',
            validate: (value) => value === password || 'Passwords do not match',
          })}
        />
      </div>
      <div className={styles.separator}>or</div>
      <Button className={styles.icon}>
        <Icon html={GoogleIcon} />
      </Button>
      <Button type={'submit'} className={styles.button}>
        Register
      </Button>
      <Link href={`/${lang}/sign-in`} className={styles.link}>
        Have you already had account? Sign in
      </Link>
    </form>
  );
};

export default Form;
