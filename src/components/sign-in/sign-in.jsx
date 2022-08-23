import "./sign-in.css";
import {Link} from "react-router-dom";
import { Component } from 'react';

class SignIn extends Component{
    constructor(props) {
        super(props);
        this.state = {
            valuePas: '', 
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    handleChange(event) {
        this.setState({valuePas: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if(!(this.state.valuePas.length >= 3 && this.state.valuePas.length < 20)) {
            alert(`Password minimum: 3, maximum: 20.\nYou entered ${this.state.valuePas.length} characters`);  
        } else {
            document.querySelector('.sign-in-form').submit();
        } 
    }

   

    render() {
        return (
            <main className="sign-in-page">
                <h1 className="visually-hidden">Travel App</h1>
                <form className="sign-in-form" autoComplete="off">
                    <h2 className="sign-in-form__title">Sign In</h2>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Email</span>
                        <input className="email" type="email" required />
                    </label>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Password</span>
                        <input value={this.state.valuePas} onChange={this.handleChange} className="password" type="password" required />
                    </label>
                    <button onClick={this.handleSubmit} className="button" type="submit">Sign In</button>
                </form>
                <span>
                    Already have an account?
                    <Link to="/sign-up" className="sign-in-form__link">Sign Up</Link>
                </span>
            </main>
         )
    }
}


export default SignIn;