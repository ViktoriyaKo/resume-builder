import { ShortCategories } from '@/packages/edit/constants';
import ColorInput from '../../ColorInput/ColorInput';
import styles from '../styles/EditorItems.module.css';
import { useTranslation } from 'react-i18next';
import { Button } from '@/ui/atoms';
import { useFormContext } from 'react-hook-form';
import { useCallback } from 'react';
import { Maybe } from '@/graphql/gql/graphql';

interface IProps {
  currentTemplate: string;
  secondaryColor?: Maybe<string>;
  primaryColor?: Maybe<string>;
}

const Colors = (props: IProps) => {
  const { currentTemplate, secondaryColor, primaryColor } = props;
  const { t } = useTranslation();
  const methods = useFormContext();

  // todo перенести в БД:
  const shouldShowColorInput = useCallback((template: string) => {
    const templatesWithSecondary = ['simple2', 'simple3', 'modern2'];
    const templatesWithoutColor = ['simple1'];
    if (templatesWithSecondary.includes(template)) {
      return ShortCategories.BACKGROUND;
    } else if (templatesWithoutColor.includes(template)) {
      return false;
    } else {
      return true;
    }
  }, []);

  const isColorInputVisible = shouldShowColorInput(currentTemplate);

  const handleResetColors = useCallback(() => {
    methods.setValue(ShortCategories.BACKGROUND, '');
    methods.setValue(ShortCategories.COLOR, '');
  }, []);

  return (
    isColorInputVisible && (
      <div className={styles.wrapper}>
        <ColorInput
          caption={t('choose_background')}
          template={currentTemplate}
          category={ShortCategories.BACKGROUND}
          color={secondaryColor}
        />
        {isColorInputVisible !== ShortCategories.BACKGROUND && (
          <ColorInput
            caption={t('choose_color')}
            template={currentTemplate}
            category={ShortCategories.COLOR}
            color={primaryColor}
          />
        )}
        <Button onClick={handleResetColors} className={styles.reset}>
          {t('accept_colors')}
        </Button>
      </div>
    )
  );
};

export default Colors;
