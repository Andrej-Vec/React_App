import "./trip.css";



const Trip = ({ Data,  search, searchSet }) => {

    return (
      
        <>
        
            <main className="trip-page">
                <h1 className="visually-hidden">Travel App</h1>
                <div className="trip">
                    <img src={search.image} className="trip__img" alt="trip image" />
                    <div className="trip__content">
                        <div className="trip-info">
                            <h3 className="trip-info__title">{search.title}</h3>
                            <div className="trip-info__content">
                                <span className="trip-info__duration"><strong>{search.duration}</strong> days</span>
                                <span className="trip-info__level">{search.level}</span>
                            </div>
                        </div>
                        <div className="trip__description">
                            {search.description}
                        </div>
                        <div className="trip-price">
                            <span>Price</span>
                            <strong className="trip-price__value">{search.price} $</strong>
                        </div>
                        <button className="trip__button button">Book a trip</button>
                    </div>
                </div>
            </main>

            <div className="hidden">
                <div className="trip-popup">
                    <button className="trip-popup__close">×</button>
                    <form className="trip-popup__form" autoComplete="off">
                        <div className="trip-info">
                            <h3 className="trip-info__title">Iceland</h3>
                            <div className="trip-info__content">
                                <span className="trip-info__duration"><strong>15</strong> days</span>
                                <span className="trip-info__level">easy</span>
                            </div>
                            <label className="trip-popup__input input">
                                <span className="input__heading">Date</span>
                                <input className="date" type="date" required />
                            </label>
                            <label className="trip-popup__input input">
                                <span className="input__heading">Number of guests</span>
                                {/* <input name="guests" type="number" min="1" max="10" value="1" className="date" required /> */}
                            </label>
                            <span className="trip-popup__total">
                                Total: <output className="trip-popup__total-value">4000$</output>
                            </span>
                            <button className="button" type="submit">Book a trip</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}


export default Trip