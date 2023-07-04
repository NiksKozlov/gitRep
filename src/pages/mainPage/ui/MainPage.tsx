import cls from './MainPage.module.css';
import {classNames} from "../../../shared/lib/classNames/classNames";
import React, {FC} from "react";
import {Searchbar} from "../../../widgets/Searchbar";
import {ItemsList} from "../../../widgets/ItemsList";


interface MainPageProps {
    className?: string
}

export const MainPage: FC<MainPageProps> = ({className}: MainPageProps) => {
    return (
        <div className={classNames(cls.MainPage, {}, [className as string])}>
                <Searchbar/>
                <ItemsList/>
        </div>
    );
};
