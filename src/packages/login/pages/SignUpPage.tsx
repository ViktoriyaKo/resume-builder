'use client';
import { SignUpForm, ContainerForm } from '../components';

const SignUpPage = () => {
  return (
    <ContainerForm
      title={'Welcome to Resume Builder'}
      description={'Please sign up or sign in to create a resume'}
    >
      <SignUpForm />
    </ContainerForm>
  );
};

export default SignUpPage;
