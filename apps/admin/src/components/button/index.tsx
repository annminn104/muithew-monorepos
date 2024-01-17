import { Button as MUIButton, ButtonTypeMap, ExtendButtonBase } from '@mui/material';

type ButtonProps = ExtendButtonBase<ButtonTypeMap<unknown, 'button'>>;

const Button: React.FC<ButtonProps> = (props) => {
  return <MUIButton {...props}>Button</MUIButton>;
};

export default Button;
