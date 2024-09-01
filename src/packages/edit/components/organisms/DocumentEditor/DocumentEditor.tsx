'use client';
import styles from './DocumentEditor.module.css';
import { SELECT_LANGUAGES_ENTITY } from '@/packages/edit/entities';
import { useSelector } from 'react-redux';
import { getStateData } from '@/packages/edit/store/dataSlice';
import { useForm } from 'react-hook-form';
import { ContactDetails, DocumentEditorSection, Skills } from '../../molecules';
import { ShortCategories } from '@/packages/edit/constants';
import { useTranslation } from 'react-i18next';
import { CustomLink } from '@/ui/atoms';
import { useParams } from 'next/navigation';

interface IProps {
  currentTemplate: string;
}

const DocumentEditor = (props: IProps) => {
  const { currentTemplate } = props;

  const initialData = useSelector(getStateData);
  const { t } = useTranslation();
  const { lang } = useParams();

  const {
    contactData,
    courseData,
    educationData,
    employmentData,
    languagesData,
    linksData,
  } = initialData;

  const { handleSubmit } = useForm({});

  const onSubmit = () => {
    // add action
    return;
  };

  return (
    <form className={styles.article} onSubmit={handleSubmit(onSubmit)}>
      <CustomLink text={t('home')} href={`/${lang}/`} className={styles.link} />
      <ContactDetails data={contactData} />
      <DocumentEditorSection.Summary />
      <DocumentEditorSection.Employment data={employmentData} />
      <DocumentEditorSection.Education data={educationData} />
      <Skills />
      <DocumentEditorSection.Links data={linksData} />
      <DocumentEditorSection.Courses data={courseData} />
      <DocumentEditorSection.Languages
        data={languagesData}
        options={SELECT_LANGUAGES_ENTITY}
      />
      <div className={styles.wrapper}>
        <DocumentEditorSection.ColorInput
          caption={t('choose_background')}
          template={currentTemplate}
          category={ShortCategories.BACKGROUND}
        />
        <DocumentEditorSection.ColorInput
          caption={t('choose_color')}
          template={currentTemplate}
          category={ShortCategories.COLOR}
        />
      </div>
    </form>
  );
};

export default DocumentEditor;
