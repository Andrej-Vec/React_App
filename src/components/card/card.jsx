import {Link} from "react-router-dom";

const Card = ({props, onSearch}) => {
    const {id, title, description, level, duration, price, image} = props;
    const BookID = `/trip/:trip${id}`;

    function handleSearch() {
        onSearch(props);
        //console.log(id);
    }


    return (
        <li className="trip-card">
            <Link to={BookID}  onClick = {handleSearch}> <img src={image} alt="trip image" className="trip__img" /></Link>
           
            <div className="trip-card__content">
                <div className="trip-info">
                    <h3 className="trip-info__title">{title}</h3>
                    <div className="trip-info__content">
                    <span className="trip-info__duration"><strong>{duration}</strong> days</span>
                    <span className="trip-info__level">{level}</span>
                    </div>
                </div>
                <div className="trip-price">
                    <span>Price</span>
                    <strong className="trip-price__value">{price} $</strong>
                </div>
            </div>
            <Link to={BookID} /* onClick={OnSearch} */ onClick = {handleSearch} className="button">Discover a trip</Link>
        </li>
    )
}

export default Card;