import { Select } from '@/ui/atoms';
import { useSearchParams, useRouter } from 'next/navigation';
import { useCallback } from 'react';

interface IProps {
  currentTemplate: string;
}

const SelectTemplates = (props: IProps) => {
  const { currentTemplate } = props;
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  // добавить из базы, временно:
  const options = [
    { caption: 'Designer', value: 'designer' },
    { caption: 'Modern', value: 'modern' },
    { caption: 'Simple', value: 'simple' },
  ];

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newValue = e.target.value;
      params.set('design', newValue);
      router.push(`?${params.toString()}`);
    },
    []
  );

  return (
    <Select
      selectedValue={currentTemplate}
      label={'Change template:'}
      options={options}
      name={'current-template'}
      onChange={handleChange}
    />
  );
};

export default SelectTemplates;
