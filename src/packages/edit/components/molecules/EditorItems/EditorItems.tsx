import { Fragment } from 'react';
import EditableHeader from '../EditableHeader/EditableHeader';
import EditableAccordion from '../EditableAccordion/EditableAccordion';
import InputsList from '../InputsList/InputsList';
import { ControlButton } from '../../atoms';
import { useHandleData } from '@/packages/edit/hooks';
import { Categories, FormData } from '@/packages/edit/constants';
import { Controller } from 'react-hook-form';
import { TextArea } from '@/ui/atoms';

// todo типизировать!!!

const ItemContent = (props) => {
  const {
    value,
    category,
    header,
    description,
    data,
    titleList,
    titleAccordion,
    labelButton,
    options,
  } = props;

  const { addListItem, removeListItem } = useHandleData({
    category,
    data,
  });

  return (
    <>
      <EditableHeader value={value} title={header} description={description} />
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          const { uuid, data } = item;

          return (
            <Fragment key={uuid}>
              <EditableAccordion
                id={uuid}
                title={`${titleAccordion} #${index + 1}`}
                handleDelete={removeListItem}
              >
                <InputsList
                  data={data}
                  title={`${titleList}-${uuid}`}
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

const Employment = (props) => {
  const { data } = props;

  return (
    <ItemContent
      value={FormData.EMPLOYMENT_TITLE}
      header={'Employment History'}
      description={'Show your experience last 10 years'}
      data={data}
      titleList={FormData.EMPLOYMENT_TITLE}
      titleAccordion={'Your job'}
      labelButton={'+ Add one more link'}
    />
  );
};

const Education = (props) => {
  const { data } = props;

  return (
    <ItemContent
      value={FormData.EDUCATION_TITLE}
      category={Categories.EDUCATION}
      header={'Education'}
      description={'Show your Education'}
      data={data}
      titleList={FormData.EDUCATION_TITLE}
      titleAccordion={'Your Education'}
      labelButton={'+ Add one more education'}
    />
  );
};

const Courses = (props) => {
  const { data } = props;

  return (
    <ItemContent
      value={FormData.COURSES_TITLE}
      header={'Courses'}
      description={'Show your Courses'}
      data={data}
      titleList={FormData.LINK_TITLE}
      titleAccordion={'Your Course'}
      category={Categories.COURSE}
      labelButton={'+ Add one more course'}
    />
  );
};

const Links = (props) => {
  const { data } = props;

  return (
    <ItemContent
      value={FormData.LINK_TITLE}
      header={'Social links & Websites'}
      description={
        'You can add links to websites you want hiring managers to see! Perhaps It will be  a link to your portfolio, LinkedIn profile, or personal website'
      }
      data={data}
      titleList={FormData.LINK_TITLE}
      titleAccordion={'Your link'}
      category={Categories.LINKS}
      labelButton={'+ Add one more link'}
    />
  );
};

const Languages = (props) => {
  const { data, options } = props;

  return (
    <ItemContent
      value={FormData.LANGUAGES_TITLE}
      header={'Languages'}
      data={data}
      titleList={FormData.LANGUAGES_TITLE}
      titleAccordion={'Your language'}
      category={Categories.LANGUAGES}
      labelButton={'+ Add one more language'}
      options={options}
    />
  );
};

const Summary = (props) => {
  const { control } = props;

  return (
    <>
      <EditableHeader
        value={FormData.SUMMARY_TITLE}
        title="Professional Summary"
        description={`Craft several energetic sentences highlighting your strengths. Specify your role, what you accomplished, and major achievements. Explain your motivation and list your key skills.`}
      />
      <Controller
        name={FormData.SUMMARY}
        control={control}
        render={({ field }) => (
          <TextArea
            caption={`Recruiter tip: write 400-600 characters to increase interview chances`}
            {...field}
          />
        )}
      />
    </>
  );
};

const EditorBlock = {
  Employment,
  Education,
  Courses,
  Links,
  Languages,
  Summary,
};

export default EditorBlock;
