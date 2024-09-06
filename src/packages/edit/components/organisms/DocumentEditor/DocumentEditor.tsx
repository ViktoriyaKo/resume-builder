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
import { AppDispatch } from '@/store/store';
import { updateResume } from '@/packages/edit/services';

interface IProps {
  currentTemplate: string;
  resume: string;
}

const DocumentEditor = (props: IProps) => {
  const { currentTemplate, resume } = props;
  const dispatch = useDispatch<AppDispatch>();

  const initialData = useSelector(getStateData);
  const { t } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    dispatch(getCurrentResume(resume));
  }, []);

  const { contact, course, education, employment, languages, links } =
    initialData;

  const methods = useForm();

  const onSubmit = async (data) => {
    // await updateResume(data, resume)
    console.log(data);
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
        <ContactDetails data={contact} />
        <DocumentEditorSection.Summary />
        <DocumentEditorSection.Employment data={employment} />
        <DocumentEditorSection.Education data={education} />
        <Skills />
        <DocumentEditorSection.Links data={links} />
        <DocumentEditorSection.Courses data={course} />
        <DocumentEditorSection.Languages
          data={languages}
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
