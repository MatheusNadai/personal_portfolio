import { ButtonHTMLAttributes } from 'react';
import { ButtonWrapper } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isAlternative?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

export default Button;
