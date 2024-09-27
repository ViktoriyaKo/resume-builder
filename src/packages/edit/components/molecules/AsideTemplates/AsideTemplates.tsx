import { useEditTemplateContext } from '@/packages/edit';
import styles from './AsideTemplates.module.css';
import Image from 'next/image';
import { Button, LikeIcon, Icon, BackIcon } from '@/ui/atoms';
import { useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { paramsVariables } from '@/constants';
import clsx from 'clsx';

const AsideTemplates = () => {
  const { templates, setEditorTemplate } = useEditTemplateContext();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const currentTemplate = searchParams.get(paramsVariables.DESIGN) ?? 'simple1';

  const handleChange = useCallback((param: string) => {
    params.set('design', param);
    router.push(`?${params.toString()}`);
  }, []);

  return (
    <section>
      <Button
        className={styles.button}
        onClick={() => setEditorTemplate(false)}
      >
        <Icon html={BackIcon} />
        Back to editor
      </Button>
      <ul className={styles.wrapper}>
        {templates.map((item) => {
          const { slug, title, image } = item?.attributes ?? {};
          const imageUrl = image?.data?.attributes?.url;
          const isSelected = currentTemplate === slug;

          return (
            <li key={slug}>
              <Button
                className={clsx(styles.card, {
                  [styles.active]: isSelected,
                })}
                onClick={() => slug && handleChange(slug)}
              >
                {isSelected && (
                  <div className={styles.selected}>
                    <Icon html={LikeIcon} />
                  </div>
                )}
                {imageUrl && (
                  <Image
                    className={styles.image}
                    src={imageUrl}
                    alt={title ?? ''}
                    sizes="(max-width: 768px) 70vw, 30vw"
                    quality={70}
                    width={160}
                    height={200}
                  />
                )}
                <p>{title}</p>
              </Button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default AsideTemplates;
