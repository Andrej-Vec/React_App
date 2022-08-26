import "./app-footer.css";
import heart from "../../asserts/images/heart.svg";

const AppFooter = () => {
    return (
        <footer className="footer">
            <span className="footer__text">
                Link to my<a target="_blank" className="footer__link" rel="noopener noreferrer" href="https://github.com/Andrej-Vec">GitHub</a> 
                <img className="footer__icon" src={heart} alt="heart icon" />
            </span>
        </footer>
    );
}



export default AppFooter;