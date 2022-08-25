
import { useState } from "react";
import BookingCard from "../booking-card/booking-card";


import "./bookings.css";



const Bookings = () => {

   

    let [bookcards, setBookcards] = useState([
        { title: "Iceland", guests: 2, date: '13.07.2022', totalPrice: 9590, id: 1},
        { title: "Scotland", guests: 1, date: '13.07.2022', totalPrice: 2145,  id: 2},
        { title: "Norway", guests: 1, date: '13.07.2022', totalPrice: 2690, id: 3}
    ]);

    const handleDelete = (id) => {
        bookcards = bookcards.filter(item => {
            if(item.id !== id) {
                return item
            }
        }) 
        setBookcards(bookcards);
        
    }


    let listBookCards = bookcards.map((item) => {
        return <BookingCard props = {item} key={item.id} onDelete = {() => handleDelete(item.id)}></BookingCard>
    });


    return (
        <main className="bookings-page">
            <h1 className="visually-hidden">Travel App</h1>
            <ul className="bookings__list">
                {listBookCards}
                {/* <li className="booking">
                    <h3 className="booking__title">Iceland</h3>
                    <span className="booking__guests">2 guests</span>
                    <span className="booking__date">13.07.2022</span>
                    <span className="booking__total">14000 $</span>
                    <button className="booking__cancel" title="Cancel booking">
                        <span className="visually-hidden">Cancel booking</span>
                        ×
                    </button>
                </li>
                <li className="booking">
                    <h3 className="booking__title">Iceland</h3>
                    <span className="booking__guests">2 guests</span>
                    <span className="booking__date">13.07.2022</span>
                    <span className="booking__total">14000 $</span>
                    <button className="booking__cancel" title="Cancel booking">
                        <span className="visually-hidden">Cancel booking</span>
                        ×
                    </button>
                </li>
                <li className="booking">
                    <h3 className="booking__title">Iceland</h3>
                    <span className="booking__guests">2 guests</span>
                    <span className="booking__date">13.07.2022</span>
                    <span className="booking__total">14000 $</span>
                    <button className="booking__cancel" title="Cancel booking">
                        <span className="visually-hidden">Cancel booking</span>
                        ×
                    </button>
                </li> */}
            </ul>
        </main>
    )
}


export default Bookings;