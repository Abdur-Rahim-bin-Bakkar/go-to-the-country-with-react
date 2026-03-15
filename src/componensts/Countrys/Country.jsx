import React, { useState } from 'react';
import styles from './Country.module.css'

const Country = ({ Country,ClickedCountry,clocledFlag }) => {
    const [visite, setvisite] = useState(false)
    // console.log(Country)
    return (
        <div className={`${visite? styles.red : styles.green }`}>
            <img src={Country.flags.flags.png} alt="" />
            <h3>Name: {Country.name.common}</h3>
            <p>Population: {Country.population.population} {Country.population.population >= 300000 ? "big population" : "small population"} </p>
            <p>Area: {Country.area.area} {Country.area.area >= 300000 ? "big country" : "small country"} </p>
            <p>language: {Country.languages.languages.eng}</p>

            {
                Country.capital.capital.map(cap => <p key={cap}>Capital: {cap}</p>)
            }
            <p>Region: {Country.region.region}</p>
            <p>code:{Country.ccn3.ccn3}</p>
            <p>Money: {Country.currencies?.currencies?.JMD?.name}</p>
            <button className={styles.btn} onClick={() => {
                // if (visite) {
                //     setvisite(false)
                // }
                // else {

                //     setvisite(true)
                // }
                setvisite(visite? false:true)
                ClickedCountry(Country)
            }}>{visite ? 'visited' : 'not visited'}</button>
            <button className={styles.btn} onClick={(falg)=>{
                clocledFlag(Country.flags.flags.png)
            }} >ADD flag</button>
        </div>
    );
};

export default Country;