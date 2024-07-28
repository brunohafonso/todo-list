import { ComponentProps } from 'react';
import styles from './Input.module.css';

interface IInputProps extends ComponentProps<'input'> {
  isInvalid?: boolean;
}

export const Input = ({ isInvalid, ...props }: IInputProps) => {
  return (
    <input className={isInvalid ? styles.input : styles.inputInvalid} {...props} />
  )
}