'use client';
import { useTranslation } from 'react-i18next';
import { SignUpForm, ContainerForm } from '../components';

const ClientSignUpPage = () => {
  const { t } = useTranslation();

  return (
    <ContainerForm title={t('welcome')} description={t('description')}>
      <SignUpForm />
    </ContainerForm>
  );
};

export default ClientSignUpPage;
