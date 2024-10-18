import { Button, Icon, Input, SendIcon } from '@/ui/atoms';
import styles from './ChatItems.module.css';
import { FormProvider, useForm } from 'react-hook-form';
import clsx from 'clsx';
import { useModalContext } from '@/context/ModalContext';

interface FormValue {
  message: string;
}

interface IProps {
  onSubmit: (data: FormValue) => Promise<void>;
}

const InputBox = (props: IProps) => {
  const { onSubmit } = props;
  const { isOpenModal } = useModalContext();

  const methods = useForm({
    defaultValues: { message: '' },
  });

  const handleFormSubmit = async (data: FormValue) => {
    try {
      await onSubmit(data);
      methods.reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    !isOpenModal && (
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleFormSubmit)}
          className={styles.form}
        >
          <Input
            inputStyle={clsx('form-control', styles.smallText)}
            name={'message'}
            placeholder="Send message..."
            type={'text'}
            rules={{ required: '' }}
          />
          <Button
            type={'submit'}
            disabled={!methods.formState.isValid}
            className={styles.submit}
          >
            <Icon html={SendIcon} />
          </Button>
        </form>
      </FormProvider>
    )
  );
};

export default InputBox;
