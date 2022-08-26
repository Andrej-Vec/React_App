

const BookingCard = ({props, onDelete}) => {

    const {title, guests, date, totalPrice} = props;
       
    return (
        <li className="booking">
            <h3 className="booking__title">{title}</h3>
            <span className="booking__guests">{guests} guests</span>
            <span className="booking__date">{date}</span>
            <span className="booking__total">{totalPrice} $</span>
            <button className="booking__cancel" onClick={onDelete} title="Cancel booking">
                <span className="visually-hidden">Cancel booking</span>
                ×
            </button>
        </li>
    )
}


export default BookingCard;