'use client';
import { SignInForm, ContainerForm } from '../components';
import { useTranslation } from 'react-i18next';

const ClientSignInPage = () => {
  const { t } = useTranslation();

  return (
    <ContainerForm title={t('welcome')} description={t('description')}>
      <SignInForm />
    </ContainerForm>
  );
};

export default ClientSignInPage;
