import Card from "../Card/Card";
import style from "./CardsContainer.module.css"

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCountries, setCountries } from "../../redux/actions";




const CardsContainer = () => {
    const countries = useSelector((state) => state.countries);
    const dispatch = useDispatch();

    const [busqueda, setBusqueda] = useState()
    const [newCountries, setNewCountries] = useState(countries || null)

    useEffect(() => {
        dispatch(getCountries());

        return () => {
            console.log("aca se desmonta")
        }
    }, []);


    const handleOnChange = (e) => {
        setBusqueda(e.target.value)
        filtrar(e.target.value)
    }

    const filtrar = (palabra) => {
        const resultado = countries.filter(e => {
            if (e.name.toString().toLowerCase().includes(palabra.toLowerCase()))
                return e
        })
        dispatch(setCountries(resultado))
    }

    useEffect(() => {
        setNewCountries(countries)
    }, countries)

    return (
        <>
            <input
                type="text"
                name="name"
                value={busqueda}
                onChange={handleOnChange}
            />
            <div className={style.cardsContainer}>
                {
                    countries.length ?
                        countries.map((country) => {
                            return (
                                <Card

                                    name={country.name}
                                    image={country.image}
                                    continent={country.continent}
                                />
                            )
                        }) :
                        "loading..."
                }
            </div>
        </>
    )
}

export default CardsContainer;