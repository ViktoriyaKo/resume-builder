'use client';
import styles from './DocumentEditor.module.css';
import { SELECT_LANGUAGES_ENTITY } from '@/packages/edit/entities';
import { useSelector, useDispatch } from 'react-redux';
import { getStateData } from '@/packages/edit/store/dataSlice';
import { useForm, FormProvider } from 'react-hook-form';
import {
  ContactDetails,
  DocumentEditorSection,
  SelectTemplates,
  Skills,
} from '../../molecules';
import { ResumeScore } from '../../atoms';
import { ShortCategories } from '@/packages/edit/constants';
import { useTranslation } from 'react-i18next';
import { Button, BackIcon, Icon } from '@/ui/atoms';
import { useParams } from 'next/navigation';
import { getCurrentResume } from '@/packages/edit/services/getCurrentResume';
import { useEffect, useState } from 'react';
import { AppDispatch } from '@/store/store';
import { updateResume } from '@/packages/edit/services';
import { getStateInitialFormData } from '@/packages/edit/store/initialFormSlice';
import { useDebounce } from '@/hooks';
import { useRouter } from 'next/navigation';

interface IProps {
  currentTemplate: string;
  resume: string;
}

const DocumentEditor = (props: IProps) => {
  const { currentTemplate, resume } = props;
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const [isInitialDataLoaded, setIsInitialDataLoaded] = useState(false);

  const initialData = useSelector(getStateData);
  const { initialFormData } = useSelector(getStateInitialFormData);
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

  return (
    <FormProvider {...methods}>
      <form
        className={styles.article}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className={styles.topLine}>
          <Button className={styles.back} onClick={() => router.back()}>
            <Icon html={BackIcon} />
            Back
          </Button>
          <SelectTemplates currentTemplate={currentTemplate} />
        </div>
        <ResumeScore score={10} />
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
