'use client';

import { templates } from '@/entitis';
import { Hero, Description, Templates, Advantages } from '../components';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Description />
      <Advantages />
      <Templates templates={templates} />
    </>
  );
};

export default HomePage;
