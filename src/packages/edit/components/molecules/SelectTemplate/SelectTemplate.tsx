import { Select } from '@/ui/atoms';
import { useSearchParams, useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';


interface IProps {
  currentTemplate: string;
}

const SelectTemplates = (props: IProps) => {
  const { currentTemplate } = props;
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { t } = useTranslation();

  // добавить из базы, временно:
  const options = [
    { caption: 'Designer', value: 'designer1' },
    { caption: 'Modern', value: 'modern1' },
    { caption: 'Simple-01', value: 'simple1' },
    { caption: 'Simple-02', value: 'simple2' },
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
      defaultValue={currentTemplate}
      label={`${t('Change template')}:`}
      options={options}
      name={'design'}
      onChange={handleChange}
    />
  );
};

export default SelectTemplates;
