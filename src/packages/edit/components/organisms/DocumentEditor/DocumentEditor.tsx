'use client';
import styles from './DocumentEditor.module.css';
import { SELECT_LANGUAGES_ENTITY } from '@/packages/edit/entities';
import { useSelector, useDispatch } from 'react-redux';
import { getStateData } from '@/packages/edit/store/dataSlice';
import { useForm, FormProvider } from 'react-hook-form';
import {
  ContactDetails,
  DocumentEditorSection,
  Skills,
  AsideTemplates,
} from '../../molecules';
import {
  BackIcon,
  Icon,
  Spinner,
  CustomLink,
  LinkedinIcon,
  Button,
} from '@/ui/atoms';
import { getCurrentResume } from '@/packages/edit/services/getCurrentResume';
import { useEffect, useState } from 'react';
import { AppDispatch } from '@/store/store';
import { updateResume } from '@/packages/edit/services';
import { getStateInitialFormData } from '@/packages/edit/store/initialFormSlice';
import { useDebounce } from '@/hooks';
import { useParams } from 'next/navigation';
import { useEditTemplateContext } from '@/packages/edit';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';

interface IProps {
  currentTemplate: string;
  resume: string;
}

const DocumentEditor = (props: IProps) => {
  const { currentTemplate, resume } = props;
  const { isEditorTemplate } = useEditTemplateContext();

  const { lang } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [isInitialDataLoaded, setIsInitialDataLoaded] = useState(false);
  const session = useSession();

  const initialData = useSelector(getStateData);
  const { initialFormData, loading } = useSelector(getStateInitialFormData);
  const {
    contact,
    education,
    employment,
    languages,
    course,
    links,
    skills,
    summary,
    secondaryColor,
    primaryColor,
    additionalInfo,
  } = initialFormData ?? {};

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
      links,
      skills,
      summary,
      secondaryColor,
      primaryColor,
      additionalInfo,
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

  // const handleAutofill = async () => {
  //   await signIn('linkedin');
  //   const response = await fetch(`/api/linkedin`);
  //   const {data} = await response.json();
  //   const { email, family_name, given_name, picture } = data;
  //   methods.reset({
  //     contact: {
  //       email: email || '',
  //       firstName: given_name || '',
  //       lastName: family_name || '',
  //       // profilePicture: picture || '',
  //     }})
  // };

  return loading ? (
    <Spinner />
  ) : (
    <FormProvider {...methods}>
      {isEditorTemplate ? (
        <AsideTemplates />
      ) : (
        <form
          className={styles.article}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <CustomLink
            href={`/${lang}/account?refreshId=${Date.now()}`}
            className={styles.button}
            prefix={<Icon html={BackIcon} />}
            text={'Account'}
          />
          {/* <Button onClick={handleAutofill} className={styles.link}>
            <>
              <span>Autofill with</span>
              <Icon html={LinkedinIcon} />
            </>
          </Button> */}
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
          <DocumentEditorSection.AdditionalInfo />
          <DocumentEditorSection.Colors
            currentTemplate={currentTemplate}
            secondaryColor={secondaryColor}
            primaryColor={primaryColor}
          />
        </form>
      )}
    </FormProvider>
  );
};

export default DocumentEditor;
