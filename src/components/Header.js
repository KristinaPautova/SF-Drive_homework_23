import React, { Fragment } from 'react';
import logo from '../img/logo.svg';

const Header = ({isMain}) => {
    return (
    <Fragment>
        <header>
        <nav >
                <div className="navbar__container">
                    <Link to="/" rel="nofollow">
                        <img src={ logo } className="navbar__brand-text" alt="logo"/>
                    </Link>
                    <div className="navbar__menu is-desktop">
                            <Link to="/about" className="navbar__menu-item is-animated" rel="nofollow">О нас</Link>
                            <Link to="/404" className="navbar__menu-item is-animated" rel="nofollow">Условия</Link>
                            <Link to="/questions" className="navbar__menu-item is-animated" rel="nofollow">Частые вопросы</Link>
                            <a className="navbar__menu-login is-animated" href="" target="_blank" rel="nofollow">Войти</a>
                    </div>
                </div>
            </nav>

        </header>
    </Fragment>
    )
};

export default Header;

