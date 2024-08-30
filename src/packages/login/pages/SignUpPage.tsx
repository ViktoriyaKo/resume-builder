'use client';
import { SignUpForm, ContainerForm } from '../components';

const SignUpPage = () => {
  return (
    <ContainerForm
      title={'Welcome to Resume Builder'}
      description={'Avsievich Resume Builder - free way to create resume'}
    >
      <SignUpForm />
    </ContainerForm>
  );
};

export default SignUpPage;
