'use client';
import image from '@images/test-template.png';
import Description from '../components/Description';
import Hero from '../components/Hero';
import Templates from '../components/Templates';

const HomePage = () => {
  //test templates:
  const templates = [
    {
      link: '/edit',
      image: image,
      title: 'Simple template #1',
      description: 'A clean and simple resume template',
    },
  ];

  return (
    <>
      <Hero />
      <Description />
      <Templates templates={templates} />
    </>
  );
};

export default HomePage;
