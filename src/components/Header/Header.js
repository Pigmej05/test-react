import React from 'react';
import c from './Header.module.css';




let Header = (props) => {
    return <div className={c.header}>
        <div>
            <div className={c.name}>Имя:<b>{props.reposit.name}</b></div>
            <div className={c.url}><a href={props.reposit.html_url}>Ссылка на страницу: <b>{props.reposit.url}</b></a></div>
        </div>
        <div className={c.watchers}>
            <div>Количество звезд:<b>{props.reposit.stargazers_count}</b></div>
            <div>Количество форков:<b>{props.reposit.forks}</b></div>
            <div>Количество просмотров:<b>{props.reposit.watchers}</b></div>
        </div>
    </div>
}

export default Header;