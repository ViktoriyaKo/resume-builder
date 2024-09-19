'use client';
import styles from '../styles/StepsList.module.css';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { StepEntity, UploadFileEntity } from '@/graphql/gql/graphql';

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
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{t('title_steps')}</h2>
        <p className={styles.description}>{t('description_steps')}</p>
        <ul className={styles.list}>
          {steps.map((item, index) => {
            const { title, description } = item?.attributes ?? {};

            return (
              <li key={title} className={styles.listItem}>
                <p className={styles.step}>Step {index + 1}</p>
                <p className={styles.titleList}>{title}</p>
                <p>{description}</p>
              </li>
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
            {images.map((item, index) => {
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
    </section>
  );
};

export default StepsList;
