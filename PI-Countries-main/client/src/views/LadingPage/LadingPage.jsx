import React from "react";
import { Link } from "react-router-dom";
import style from "./LadingPage.module.css";


const LandingPage = () => {
    return (
        
            <div className={style.text}/* className={style.header} */>
                <h1 className={style.titulo}>Earth Tech</h1>
                <p>En esta app se van a encontrar con todos los paises de nuestro planeta tierra</p>
                <Link to="/home">
                    <button className={style.button}>Ingresar</button>
                </Link>
            </div>
        

    )
}

export default LandingPage;