import { Select } from '@/ui/atoms';
import { useSearchParams, useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useEditTemplateContext } from '@/packages/edit';
import { TypeOptionsData } from '@/packages/edit/types';

interface IProps {
  currentTemplate: string;
}

const SelectTemplates = (props: IProps) => {
  const { currentTemplate } = props;
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { t } = useTranslation();
  const { templates } = useEditTemplateContext();

  const options: TypeOptionsData[] = useMemo(() => {
    return templates?.map((item) => {
      const { slug, title } = item?.attributes ?? {};
      return { caption: title ?? '', value: slug ?? '' };
    });
  }, [templates]);

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
