import React, { use, useState } from 'react';
import Country from './Countrys/Country';
import styles from './box.module.css'

const CountryContainer = ({ allApi }) => {
    const apiData = use(allApi)

    const [visitedCountry, setVisiteCountry] = useState([])
    const [visitedCountryFlag, setVisiteCountryFlag] = useState([])
    // console.log(apiData.countries)
    const ClickedCountry = (info) =>{
        let countCountry = [...visitedCountry]
        if(!countCountry.includes(info)){
            countCountry.push(info)
        }
        setVisiteCountry(countCountry)
        console.log(visitedCountryFlag)
    }
    const clocledFlag = (flag) =>{

        let checkFlag = [...visitedCountryFlag];
        if(!checkFlag.includes(flag)){
            checkFlag.push(flag)
        }
        setVisiteCountryFlag(checkFlag)
        console.log('fah', visitedCountryFlag)
    }
    return (
        <div>
            <h1>hello i am form card</h1>
            <div className="">
                {
                    visitedCountryFlag.map(falg=> <img style={{width:"150px"}} src={falg}></img>)
                }
            </div>
            <ol>
                {
                    visitedCountry.map(count=><li key={count.name.common}>{count.name.common}</li>)
                }
            </ol>
            <h3>visited country: {visitedCountry.length}</h3>
            <h3>Visited country fags:{visitedCountryFlag.length}</h3>
            <button className={styles.btn}>click mef </button>
            <div className={styles.country}>
                {
                    apiData.countries.map((country) => <Country ClickedCountry={ClickedCountry} key={country.name.common} Country={country} clocledFlag={clocledFlag}></Country>)
                }
            </div>
        </div>
    );
};

export default CountryContainer;