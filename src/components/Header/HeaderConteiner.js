import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getRepository} from "../API/api";
import Header from "./Header";
import {getCurrentPage, getItems, getPageSize} from "../../redux/select_repository";
import c from "./Header.module.css"
import Paginat from "../compon/Pagination/pagination";
import {setPage} from "../../redux/app_reducer";




const HeaderConteiner = (props) => {
    const dispatch = useDispatch();
    const repository = useSelector(getItems);
    const page = useSelector(getCurrentPage);
    const perPage = useSelector(getPageSize);

    const [elementaryValue, finiteValue] = useState('')
    const ChangValue = (e) => {
        finiteValue(e.target.value)
    }
    const findRepository = () => {
        dispatch(setPage(1))
        dispatch(getRepository(elementaryValue,page,perPage))
    }
    useEffect(() => {
        dispatch(getRepository(elementaryValue,page,perPage))
    }, [perPage])


    return (
        <div>
            <div className={c.search}>
                <div><input type='text' value={elementaryValue} onChange={ChangValue}/></div>
                <div><button onClick={() => findRepository()}> НАЙТИ</button></div>
            </div>
            <div>
                {repository.map(reposit =>
                    <Header key={reposit} reposit={reposit}/>)}
            </div>
            <div className={c.paginator}><Paginat elementaryValue={elementaryValue}/></div>
        </div>
    )

}
export default HeaderConteiner;