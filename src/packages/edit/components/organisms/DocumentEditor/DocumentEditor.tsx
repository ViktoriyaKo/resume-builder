'use client';
import styles from './DocumentEditor.module.css';
import {
  EDUCATION_ENTITY,
  SELECT_LANGUAGES_ENTITY,
} from '@/packages/edit/entities';
import { useSelector, useDispatch } from 'react-redux';
import { getStateData } from '@/packages/edit/store/dataSlice';
import { useForm, FormProvider } from 'react-hook-form';
import {
  ContactDetails,
  DocumentEditorSection,
  SelectTemplates,
  Skills,
} from '../../molecules';
import { ShortCategories } from '@/packages/edit/constants';
import { useTranslation } from 'react-i18next';
import { CustomLink } from '@/ui/atoms';
import { useParams } from 'next/navigation';
import { getCurrentResume } from '@/packages/edit/services/getCurrentResume';
import { useEffect } from 'react';
interface IProps {
  currentTemplate: string;
}

const DocumentEditor = (props: IProps) => {
  const { currentTemplate } = props;
  const dispatch = useDispatch();

  const initialData = useSelector(getStateData);
  const { t } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    dispatch(getCurrentResume('37'));
  }, []);

  const {
    contactData,
    courseData,
    educationData,
    employmentData,
    languagesData,
    linksData,
  } = initialData;

  const methods = useForm();

  const onSubmit = async (data) => {
    console.log(EDUCATION_ENTITY);
    return;
  };

  return (
    <FormProvider {...methods}>
      <form
        className={styles.article}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className={styles.topLine}>
          <CustomLink
            text={t('home')}
            href={`/${lang}/`}
            className={styles.link}
          />
          {/* todo test!!!! */}
          <button className={styles.button} type={'submit'}>
            TEST_Submit
          </button>
          {/* todo test!!!! */}

          <SelectTemplates currentTemplate={currentTemplate} />
        </div>
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
    </FormProvider>
  );
};

export default DocumentEditor;
