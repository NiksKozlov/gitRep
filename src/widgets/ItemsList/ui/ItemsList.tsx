import React, {memo, useMemo} from 'react';
import cls from './ItemsList.module.css';
import {classNames} from "../../../shared/lib/classNames/classNames";
import {useAppSelector} from "../../../shared/hooks/useAppSelector/useAppSelector";
import {Card, CardTheme} from "../../../shared/ui/Card";
import {ReactComponent as Star} from "../../../shared/assets/icons/star.svg"
import {ReactComponent as Eye} from "../../../shared/assets/icons/eye.svg"
import {ReactComponent as Pen} from "../../../shared/assets/icons/pen.svg"
import {Button} from "../../../shared/ui/Button";

interface ItemsListProps {
    className?: string;
}

export const ItemsList = memo(({className}: ItemsListProps) => {

    const {items, isLoading, error} = useAppSelector(state => state.itemReducer)

    const mappedItems =  useMemo(() => (items.map(item => (
            <Card key={item.id} theme={CardTheme.OUTLINED} className={cls.card}>
                <a className={cls.repLink} href={item.svn_url} target="_blanc">{item.name}</a>
                <div className={cls.ownerContainer}>
                    <img className={cls.avatar} src={item.owner.avatar_url} alt={"avatar url"}/>
                    <a className={cls.ownerLink} href={item.owner.html_url}>{item.owner.login}</a>
                </div>
                <div className={cls.infoContainer}>
                    <Star/>{item.score}
                    <Eye/>{item.watchers}
                </div>
                <div className={cls.commentField}>
                    <input
                        className={cls.input}
                        placeholder={'Комментарий к посту'}
                    />
                    <Button className={cls.button}>
                        <Pen/>
                    </Button>
                </div>
            </Card>
        ))), [items])


    return (
        <div className={classNames(cls.ItemsList, {}, [className as string])}>
            {isLoading && <h1>Идёт загрузка...</h1>}
            {error && <h1>{error}</h1>}
            {mappedItems}
        </div>
    );
});
