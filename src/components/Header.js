import React from "react"

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
                            <a className="navigation__item--link" href="/"><span>Link</span></a>
                        </li>
                        <li className="navigation__item">
                            <a className="navigation__item--link" href="/"><span>Link</span></a>
                        </li>
                        <li className="navigation__item">
                            <a className="navigation__item--link" href="/"><span>Link</span></a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header