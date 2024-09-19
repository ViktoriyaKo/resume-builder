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
import { useTranslation } from 'react-i18next';

const Form = () => {
  const { lang } = useParams();
  const { t } = useTranslation();
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
        router.push(`/${lang}/`);
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
            rules={{ required: t('email_error') }}
            placeholder={t('enter_email')}
            type={'email'}
          />
          <PasswordInput
            name={'password'}
            placeholder={t('enter_password')}
            rules={{
              required: t('password_error'),
              minLength: {
                value: 8,
                message: t('password_error_characters'),
              },
            }}
          />
          <PasswordInput
            name={'repeatPassword'}
            placeholder={t('repeat_password')}
            rules={{
              required: t('please_repeat_password'),
              validate: (value) =>
                value === password || t('passwords_dont_match'),
            }}
          />
        </div>
        <Button type={'submit'} className={styles.button}>
          {t('register')}
        </Button>
        <Link href={`/${lang}/sign-in`} className={styles.link}>
          {t('already_had_account')}
        </Link>
      </form>
    </FormProvider>
  );
};

export default Form;
