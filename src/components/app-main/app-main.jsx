import "./app-main.css";
import {Link} from "react-router-dom";
import iceland from "../../asserts/images/iceland.jpg";
//import SearcgPanel from "../search-panel/search-panel";
import Card from "../card/card";
import { useState } from 'react';

const AppMain = ({Data, searchSet}) => {
    
    const [value, setValue] = useState('');
    const [optionDays, setOptionDays] = useState('');
    const [optionLevel, setOptionLevel] = useState('');

   
    const filterCards = Data.filter((card) => {
        return card.title.toUpperCase().includes(value.toUpperCase()) 
    }) 

    const filterDays =  filterCards.filter((card) => {
        switch(optionDays) {
            case "0_x_5": return card.duration > 0 && card.duration < 5; 
            case "5_x_10":return card.duration > 5 && card.duration < 10;
            case "10_x": return card.duration > 10;
            default: return true;
        }
    }) 

    const filterLevel =  filterDays.filter((card) => {
        switch(optionLevel) {
            case "easy": return card.level === "easy";
            case "moderate":return card.level === "moderate";
            case "difficult": return card.level === "difficult";
            default: return true;
        }
    }) 

    

    const handleSearch = (props) => {
      searchSet(props);
    }
    


    let list = filterLevel.map(item => {
        return <Card props = {item} onSearch = {handleSearch} key={item.id}></Card>;
    })


    return (
       
        <main>
            <h1 className="visually-hidden">Travel App</h1>
            <section className="trips-filter">
            <h2 className="visually-hidden">Trips filter</h2>
            <form className="trips-filter__form" autoComplete="off">
                <label className="trips-filter__search input">
                    <span className="visually-hidden">Search by name</span>
                    <input onChange={(event) => {setValue(event.target.value)}} name="search" type="search" placeholder="search by title" />
                </label>
                <label className="select">
                    <span className="visually-hidden">Search by duration</span>
                    <select onChange ={(event) => {setOptionDays(event.target.value)}} name="duration">
                        <option value="">duration</option>
                        <option value="0_x_5">&lt; 5 days</option>
                        <option value="5_x_10">&lt; 10 days</option>
                        <option value="10_x">&ge; 10 days</option>
                    </select>
                </label>
                <label className="select">
                    <span className="visually-hidden">Search by level</span>
                    <select onChange={(event) => {setOptionLevel(event.target.value)}} name="level">
                        <option value="">level</option>
                        <option value="easy">easy</option>
                        <option value="moderate">moderate</option>
                        <option value="difficult">difficult</option>
                    </select>
               </label>
            </form>
        </section>
                <section className="trips">
                <h2 className="visually-hidden">Trips List</h2>
                <ul className="trip-list">
                    {list}
                </ul>
            </section>
        </main>
    )
}

export default AppMain;