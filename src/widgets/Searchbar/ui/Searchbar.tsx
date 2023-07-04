import cls from './Searchbar.module.css';
import {classNames} from "../../../shared/lib/classNames/classNames";
import {FC, useState} from "react";
import {Input} from "../../../shared/ui/Input";
import {Button} from "../../../shared/ui/Button";
import {useAppDispatch} from "../../../shared/hooks/useAppDispatch/useAppDispatch";
import {fetchItems} from "../../../app/store/reducers/actionCreators";
import {ReactComponent as MagnifyingGlass} from '../../../shared/assets/icons/magnifyingGlass.svg';


interface SearchbarProps {
    className?: string
}

export const Searchbar: FC<SearchbarProps> = ({className}: SearchbarProps) => {

    const [value, setValue] = useState('')
    const dispatch = useAppDispatch()

    const searchItems = () => {
        dispatch(fetchItems(value))
        setValue('')
    }

    return (
        <div className={classNames(cls.Searchbar, {}, [className as string])}>
                <Input
                    className={cls.searchField}
                    value={value}
                    onChangeValue={setValue}
                    placeholder={"Начните вводить текст для поиска(не менее трех символов)"}
                />
                <Button className={cls.searchButton} onClick={searchItems}>
                    <MagnifyingGlass />
                </Button>
        </div>
    );
};
