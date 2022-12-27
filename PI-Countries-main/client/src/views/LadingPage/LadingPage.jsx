import React from "react";
import { Link } from "react-router-dom";
import style from "./LadingPage.module.css"


const LandingPage = () => {
    return (
        
            <div className={style.text}/* className={style.header} */>
                <h1 className={style.titulo}>Bienvenidos a mi App de Paises</h1>
                <p>En esta app se van a encontrar con todos los paises de nuestra querida tierra</p>
                <Link to="/home">
                    <button className={style.button}>Ingresar</button>
                </Link>
            </div>
        

    )
}

export default LandingPage;