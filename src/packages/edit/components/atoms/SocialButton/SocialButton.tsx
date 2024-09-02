import { Button, Icon, AddIcon } from '@/ui/atoms';
import styles from './SocialButton.module.css';

interface IProps {
  caption: string;
  handleClick: () => void;
}
const SocialButton = (props: IProps) => {
  const { handleClick, caption } = props;

  return (
    <Button className={styles.wrapper} onClick={handleClick}>
      <Icon html={AddIcon} />
      <span>{caption}</span>
    </Button>
  );
};

export default SocialButton;
