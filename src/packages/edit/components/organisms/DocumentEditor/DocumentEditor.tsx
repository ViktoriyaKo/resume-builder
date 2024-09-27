'use client';
import styles from './DocumentEditor.module.css';
import { SELECT_LANGUAGES_ENTITY } from '@/packages/edit/entities';
import { useSelector, useDispatch } from 'react-redux';
import { getStateData } from '@/packages/edit/store/dataSlice';
import { useForm, FormProvider } from 'react-hook-form';
import { ContactDetails, DocumentEditorSection, Skills } from '../../molecules';
import { useTranslation } from 'react-i18next';
import { BackIcon, Icon, Spinner, CustomLink, Button } from '@/ui/atoms';
import { getCurrentResume } from '@/packages/edit/services/getCurrentResume';
import { useEffect, useState, useCallback } from 'react';
import { AppDispatch } from '@/store/store';
import { updateResume } from '@/packages/edit/services';
import { getStateInitialFormData } from '@/packages/edit/store/initialFormSlice';
import { useDebounce } from '@/hooks';
import { useParams } from 'next/navigation';
import { ShortCategories } from '@/packages/edit/constants';

interface IProps {
  currentTemplate: string;
  resume: string;
}

const DocumentEditor = (props: IProps) => {
  const { currentTemplate, resume } = props;
  const { lang } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [isInitialDataLoaded, setIsInitialDataLoaded] = useState(false);

  const initialData = useSelector(getStateData);
  const { initialFormData, loading } = useSelector(getStateInitialFormData);
  const {
    contact,
    education,
    employment,
    languages,
    course,
    titles,
    links,
    skills,
    summary,
    secondaryColor,
    primaryColor,
  } = initialFormData ?? {};
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getCurrentResume(resume)).then(() => {
      setIsInitialDataLoaded(true);
    });
  }, []);

  const {
    contact: contactData,
    course: courseData,
    education: educationData,
    employment: employmentData,
    languages: languagesData,
    links: linksData,
  } = initialData;

  const methods = useForm();

  useEffect(() => {
    methods.reset({
      contact,
      education,
      course,
      employment,
      languages,
      titles,
      links,
      skills,
      summary,
      secondaryColor,
      primaryColor,
    });
  }, [initialFormData?.id, methods]);

  const debouncedUpdateResume = useDebounce((data) => {
    dispatch(updateResume({ data, id: resume }));
  }, 1000);

  useEffect(() => {
    const subscription = methods.watch((value) => {
      if (isInitialDataLoaded) {
        debouncedUpdateResume(value);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [dispatch, methods, isInitialDataLoaded]);

  const onSubmit = async () => {
    return;
  };

  const handleResetColors = useCallback(() => {
    methods.setValue(ShortCategories.BACKGROUND, '');
    methods.setValue(ShortCategories.COLOR, '');
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <FormProvider {...methods}>
      <form
        className={styles.article}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className={styles.topLine}>
          <CustomLink
            href={`/${lang}/account?refreshId=${Date.now()}`}
            className={styles.back}
            prefix={<Icon html={BackIcon} />}
            text={'Account'}
          />
        </div>
        {/* <ResumeScore score={10} /> */}
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
            color={secondaryColor}
          />
          <DocumentEditorSection.ColorInput
            caption={t('choose_color')}
            template={currentTemplate}
            category={ShortCategories.COLOR}
            color={primaryColor}
          />
          <Button onClick={handleResetColors} className={styles.reset}>
            Accept default colors
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default DocumentEditor;
