import styles from './SignInForm.module.css';
import Link from 'next/link';
import { useForm, FormProvider } from 'react-hook-form';
import { Button, Input } from '@/ui/atoms';
import { useParams } from 'next/navigation';
import PasswordInput from '../PasswordInput/PasswordInput';
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
        console.log(result);
        router.push(`/${lang}/account`);
      } else {
        methods.setError('password', {
          type: 'manual',
          message: t('signin_error'),
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
        </div>
        <Button type={'submit'} className={styles.button}>
          {t('login')}
        </Button>
        <Link href={`/${lang}/sign-up`} className={styles.link}>
          {t('dont_have_account')}
        </Link>
      </form>
    </FormProvider>
  );
};

export default Form;
