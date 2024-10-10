'use client';
import styles from '../styles/StepsList.module.css';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { StepEntity, UploadFileEntity } from '@/graphql/gql/graphql';
import { motion } from 'framer-motion';
import { fadeAnimation } from '@/utils';

interface IProps {
  steps: StepEntity[];
  images: UploadFileEntity[];
}

const StepsList = (props: IProps) => {
  const { steps, images } = props;
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
    const interval = setInterval(() => {
      if (slider?.current) {
        slider?.current.next();
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [slider]);

  return (
    <motion.section
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <div className={styles.wrapper}>
        <motion.h2 className={styles.title} variants={fadeAnimation}>
          {t('title_steps')}
        </motion.h2>
        <motion.p className={styles.description} variants={fadeAnimation}>
          {t('description_steps')}
        </motion.p>
        <ul className={styles.list}>
          {steps?.map((item, index) => {
            const { title, description } = item?.attributes ?? {};

            return (
              <motion.li
                key={title}
                custom={index + 1}
                variants={fadeAnimation}
                className={styles.listItem}
              >
                <p className={styles.step}>Step {index + 1}</p>
                <p className={styles.titleList}>{title}</p>
                <p>{description}</p>
              </motion.li>
            );
          })}
        </ul>
        <div
          className={clsx(styles.imageWrapper, {
            [styles.hidden]: !isLoaded,
          })}
          ref={sliderRef}
        >
          <div className={clsx('keen-slider')}>
            {images?.map((item, index) => {
              const { alternativeText, url, hash } = item.attributes ?? {};
              return url ? (
                <Image
                  key={hash}
                  className={clsx(styles.image, 'keen-slider__slide')}
                  style={{ opacity: opacities[index] }}
                  alt={alternativeText ?? ''}
                  src={url}
                  width={800}
                  height={500}
                />
              ) : null;
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default StepsList;
