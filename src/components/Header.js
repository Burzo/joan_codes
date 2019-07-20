import React from "react"
import { NavLink } from "react-router-dom"

class Header extends React.Component {

    render() {
        return(
            <header className="header">
                <div className="header__logo-box">
                    <img className="header__logo-box__logo" src="images/joan_logo_big.png" alt="Joan Logo"/>
                </div>
                <div className="header__title">
                    <h1 className="header__title__text" >Joan Code Generator</h1>
                    <span className="header__title__desc">Generate customizable codes for Joan Credits.</span>
                </div>
                <nav className="navigation">
                    <ul className="navigation__list">
                        <li className="navigation__item">
                            <NavLink exact to="/" className="navigation__item--link" activeClassName="navigation__item--link--selected"><span>Home</span></NavLink>
                        </li>
                        <li className="navigation__item">
                        <NavLink exact to="/mycodes" className="navigation__item--link" activeClassName="navigation__item--link--selected"><span>My Codes</span></NavLink>
                        </li>
                        <li className="navigation__item">
                        <NavLink exact to="/w" className="navigation__item--link" activeClassName="navigation__item--link--selected"><span>Link</span></NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header