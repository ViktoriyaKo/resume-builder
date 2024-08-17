'use client';
import Description from '../components/Description';
import Hero from '../components/Hero';
import Templates from '../components/Templates';
import { templates } from '@/entitis';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Description />
      <Templates templates={templates} />
    </>
  );
};

export default HomePage;
