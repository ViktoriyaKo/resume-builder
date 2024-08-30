import styles from './PasswordInput.module.css';
import { Icon, Input, ShowPassword, HidePassword, Button } from '@/ui/atoms';
import { ChangeEventHandler, useState } from 'react';
import { RegisterOptions } from 'react-hook-form';
import { forwardRef, LegacyRef } from 'react';

interface IProps {
  placeholder: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  rules?: RegisterOptions;
  error?: string;
}

// eslint-disable-next-line react/display-name
const PasswordInput = forwardRef(
  (props: IProps, ref: LegacyRef<HTMLInputElement>) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className={styles.wrapper}>
        <Input {...props} ref={ref} type={showPassword ? 'text' : 'password'} />
        <Button
          onClick={() => setShowPassword((prev) => !prev)}
          className={styles.icon}
        >
          <Icon html={showPassword ? HidePassword : ShowPassword} />
        </Button>
      </div>
    );
  }
);

export default PasswordInput;
