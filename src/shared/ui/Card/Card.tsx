import {FC, HTMLAttributes, memo} from 'react';
import cls from './Card.module.css';
import {classNames} from "../../lib/classNames/classNames";

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    theme?: CardTheme;
    max?: boolean;
}

export const Card: FC<CardProps> = memo((props) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        max,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.Card, { [cls.max]: max }, [
                className as string,
                cls[theme],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
