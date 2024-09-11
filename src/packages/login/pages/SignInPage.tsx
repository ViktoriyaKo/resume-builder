'use client';
import { SignInForm, ContainerForm } from '../components';

const SignInPage = () => {
  return (
    <ContainerForm
      title={'Welcome to Resume Builder'}
      description={'Please sign in to create a resume'}
    >
      <SignInForm />
    </ContainerForm>
  );
};

export default SignInPage;
