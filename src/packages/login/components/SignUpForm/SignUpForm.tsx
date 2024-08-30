import styles from './SignUpForm.module.css';
import { useForm } from 'react-hook-form';
import { Icon, Input, GoogleIcon } from '@/ui/atoms';
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

  const {
    handleSubmit,
    register,
    watch,
    setError,
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
        setError('repeatPassword', {
          type: 'manual',
          message: errorText.message,
        });
      }
    } catch (error) {
      console.log('Error');
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
