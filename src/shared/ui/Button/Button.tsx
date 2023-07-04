import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.css';
import {classNames} from "../../lib/classNames/classNames";

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    console.log('button')
   const {
      className,
      children,
      theme,
      ...restProps
   } = props;

   return (
      <button
         type="button"
         className={classNames(cls.Button, {}, [className as string, cls[theme as string]])}
         {...restProps}
      >
         {children}
      </button>
   );
};
