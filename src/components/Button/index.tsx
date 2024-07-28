import { ComponentProps } from "react"
import styles from './Button.module.css';

interface IButtonProps extends ComponentProps<'button'> {}

export const Button = ({ children, ...props }: IButtonProps) => {
  return (
    <button className={styles.button} {...props}>{children}</button>
  )
}