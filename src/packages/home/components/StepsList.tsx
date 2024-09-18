'use client';
import styles from '../styles/StepsList.module.css';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import image1 from '@images/1.png';
import image2 from '@images/2.png';
import image3 from '@images/3.png';
import image4 from '@images/4.png';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import clsx from 'clsx';
import { useState, useEffect } from 'react';

const StepsList = () => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [opacities, setOpacities] = useState<number[]>([]);
  const animation = { duration: 1000, easing: (t: number) => t };

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    defaultAnimation: animation,
    created() {
      setIsLoaded(true);
    },
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map(
        (slide) => slide.portion
      );
      setOpacities(new_opacities);
    },
  });

  useEffect(() => {
    console.log(slider);
    const interval = setInterval(() => {
      if (slider?.current) {
        slider?.current.next();
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [slider]);

  const steps = [
    {
      title: 'Sign up for an account',
      description: 'Sign up or log in to the app',
    },
    {
      title: 'Choose a template',
      description: 'Choose a template or request a custom one',
    },
    {
      title: 'Fill out your resume',
      description: 'Add your personal details, experience, and skills in form',
    },
    {
      title: 'Download your resume',
      description: 'Download your resume and start applying for jobs!',
    },
  ];

  const images = [
    { alt: 'step 1', image: image1 },
    { alt: 'step 2', image: image2 },
    { alt: 'step 3', image: image3 },
    { alt: 'step 4', image: image4 },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Start creating resume in seconds</h2>
        <p className={styles.description}>
          Create your resume in a few simple steps for free
        </p>
        <ul className={styles.list}>
          {steps.map((item, index) => {
            const { title, description } = item;
            return (
              <li key={title} className={styles.listItem}>
                <p className={styles.step}>Step {index + 1}</p>
                <p className={styles.titleList}>{title}</p>
                <p>{description}</p>
              </li>
            );
          })}
        </ul>
        <div className={clsx(styles.imageWrapper, {
        [styles.hidden]: !isLoaded,
      })} ref={sliderRef}>
          <div className={clsx('keen-slider')}>
            {images.map((item, index) => {
              const { alt, image } = item;
              return (
                <Image
                  key={alt}
                  className={clsx(styles.image, 'keen-slider__slide')}
                  style={{ opacity: opacities[index] }}
                  alt={alt}
                  src={image}
                  width={800}
                  height={500}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsList;
