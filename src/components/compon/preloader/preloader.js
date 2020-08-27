import React from "react";
import load from "../../../no foto/99aa7a_19e4c74d26a94c8ba729003cab00f4d2_mv2.gif";
import c from "./preloaders.module.css"

let Preloader = ()=>{
    return (
        <img src={load} alt={'загрузка'} className={c.preload}/>
    )
}

export default Preloader;