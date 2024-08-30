'use client';
import { SignInForm, ContainerForm } from '../components';

const SignInPage = () => {
  return (
    <ContainerForm
      title={'Welcome to Resume Builder'}
      description={'Avsievich Resume Builder - free way to create resume'}
    >
      <SignInForm />
    </ContainerForm>
  );
};

export default SignInPage;
