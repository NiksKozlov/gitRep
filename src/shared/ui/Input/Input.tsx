import {InputHTMLAttributes, FC} from 'react';
import cls from './Input.module.css';
import {classNames} from "../../lib/classNames/classNames";

export enum ThemeInput {
    CLEAR = 'clear'
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string
    onChangeValue: (value: string) => void
    className?: string
    theme?: ThemeInput
    placeholder: string
}

export const Input: FC<InputProps> = (props) => {
    const {
        value,
        onChangeValue,
        className,
        children,
        placeholder,
        theme,
        ...restProps
    } = props;

    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChangeValue(e.target.value)}
            placeholder={placeholder}
            className={classNames(cls.Input, {}, [className as string, cls[theme as string]])}
            {...restProps}
        >
            {children}
        </input>
    );
};
