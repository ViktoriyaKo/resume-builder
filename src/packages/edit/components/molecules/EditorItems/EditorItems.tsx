import { Fragment } from 'react';
import EditableHeader from '../EditableHeader/EditableHeader';
import EditableAccordion from '../EditableAccordion/EditableAccordion';
import InputsList from '../InputsList/InputsList';
import { ControlButton } from '../../atoms';
import { useHandleData } from '@/packages/edit/hooks';
import {
  Categories,
  FormData,
  ShortCategories,
} from '@/packages/edit/constants';
import { Controller } from 'react-hook-form';
import { Input, TextArea, TextEditor } from '@/ui/atoms';
import {
  TypeExpendedData,
  TypeOptionsData,
  TypeFieldData,
  TypeControllerProps,
} from '@/packages/edit/types';
import {
  employmentData,
  educationData,
  courseData,
  linksData,
  languagesData,
} from '@/packages/edit/entities';
import { updateShortField } from '@/packages/edit/store/shortFieldSlice';
import { useControl } from '@/packages/edit/contexts/ControlContext';

interface IDataProps {
  data: TypeExpendedData[];
  options?: TypeOptionsData[];
}

interface IContentProps {
  value: string;
  category: Categories;
  header: string;
  description?: string;
  data: TypeExpendedData[];
  titleAccordion: string;
  labelButton: string;
  options?: TypeOptionsData[];
  initialFormData: TypeFieldData[];
}

const ItemContent = (props: IContentProps) => {
  const {
    value,
    category,
    header,
    description,
    data,
    titleAccordion,
    labelButton,
    options,
    initialFormData,
  } = props;
  const { addListItem, removeListItem, updateValueField } = useHandleData({
    category,
    data: initialFormData,
  });

  return (
    <>
      <EditableHeader
        category={ShortCategories.TITLES}
        name={value}
        title={header}
        description={description}
      />
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          const { uuid, data } = item;

          const clickUpdateValueToData = ({
            name,
            value,
          }: {
            name: string;
            value: string;
          }) => {
            updateValueField({ uuid, name, value });
          };

          return (
            <Fragment key={uuid}>
              <EditableAccordion
                id={uuid}
                title={`${titleAccordion} #${index + 1}`}
                handleDelete={removeListItem}
              >
                <InputsList
                  uuid={uuid}
                  handleClick={clickUpdateValueToData}
                  data={data}
                  options={options}
                />
              </EditableAccordion>
            </Fragment>
          );
        })}
      <ControlButton onClick={addListItem} text={labelButton} />
    </>
  );
};

const Employment = (props: IDataProps) => {
  const { data } = props;

  return (
    <ItemContent
      initialFormData={employmentData}
      value={FormData.EMPLOYMENT_TITLE}
      category={Categories.EMPLOYMENT}
      header={'Employment History'}
      description={'Show your experience last 10 years'}
      data={data}
      titleAccordion={'Your job'}
      labelButton={'+ Add one more link'}
    />
  );
};

const Education = (props: IDataProps) => {
  const { data } = props;

  return (
    <ItemContent
      initialFormData={educationData}
      value={FormData.EDUCATION_TITLE}
      category={Categories.EDUCATION}
      header={'Education'}
      description={'Show your Education'}
      data={data}
      titleAccordion={'Your Education'}
      labelButton={'+ Add one more education'}
    />
  );
};

const Courses = (props: IDataProps) => {
  const { data } = props;

  return (
    <ItemContent
      initialFormData={courseData}
      value={FormData.COURSES_TITLE}
      header={'Courses'}
      description={'Show your Courses'}
      data={data}
      titleAccordion={'Your Course'}
      category={Categories.COURSE}
      labelButton={'+ Add one more course'}
    />
  );
};

const Links = (props: IDataProps) => {
  const { data } = props;

  return (
    <ItemContent
      initialFormData={linksData}
      value={FormData.LINK_TITLE}
      header={'Social links & Websites'}
      description={
        'You can add links to websites you want hiring managers to see! Perhaps It will be  a link to your portfolio, LinkedIn profile, or personal website'
      }
      data={data}
      titleAccordion={'Your link'}
      category={Categories.LINKS}
      labelButton={'+ Add one more link'}
    />
  );
};

const Languages = (props: IDataProps) => {
  const { data, options } = props;

  return (
    <ItemContent
      initialFormData={languagesData}
      value={FormData.LANGUAGES_TITLE}
      header={'Languages'}
      data={data}
      titleAccordion={'Your language'}
      category={Categories.LANGUAGES}
      labelButton={'+ Add one more language'}
      options={options}
    />
  );
};

// todo вынести повторение Controller:

const Summary = ({ dispatch }: TypeControllerProps) => {
  const control = useControl();

  return (
    <>
      <EditableHeader
        category={ShortCategories.TITLES}
        name={FormData.SUMMARY_TITLE}
        title="Professional Summary"
        description={`Craft several energetic sentences highlighting your strengths. Specify your role, what you accomplished, and major achievements. Explain your motivation and list your key skills.`}
      />
      <Controller
        name={ShortCategories.SUMMARY}
        control={control}
        render={({ field }) => {
          const handleChange = (value: string) => {
            field.onChange(value);
            dispatch(
              updateShortField({ category: ShortCategories.BACKGROUND, value })
            );
          };
          return (
            <TextEditor
              caption={`Recruiter tip: write 400-600 characters to increase interview chances`}
              {...field}
              onChange={(value) => handleChange(value)}
            />
          );
        }}
      />
    </>
  );
};

const BackgroundColor = ({ dispatch }: TypeControllerProps) => {
  const control = useControl();

  return (
    <Controller
      name={'color'}
      control={control}
      render={({ field }) => {
        const handleChange = (value: string) => {
          field.onChange(value);
          dispatch(
            updateShortField({ category: ShortCategories.BACKGROUND, value })
          );
        };
        return (
          <Input
            inputStyle={'form-control-color'}
            caption={'Choose color for template:'}
            {...field}
            type={'color'}
            onChange={(e) => handleChange(e.target.value)}
          />
        );
      }}
    />
  );
};

const EditorBlock = {
  Employment,
  Education,
  Courses,
  Links,
  Languages,
  Summary,
  BackgroundColor,
};

export default EditorBlock;
