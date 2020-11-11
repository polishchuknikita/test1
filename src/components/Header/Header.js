import React, {useState} from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';
import Login from '../Pages/Login/Login';

const Header = (props) => {
    const [show, setShow] = useState(false);
    
    const openModal = () => {
        setShow(true)
    }
    const closeModal = () => {
        setShow(false)
    }
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <NavLink to="/" exact className="logo">
                        Logo
                    </NavLink>
                    <ul className="menu">
                        <li className="menu__item">
                            <NavLink
                                to="/"
                                exact
                                className="menu__link"
                            >
                                Главная
                            </NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink
                                to="/News"
                                exact
                                className="menu__link"
                            >
                                Новости
                            </NavLink>
                        </li>
                        <li className="menu__item">
                            <button 
                                type="button" 
                                className="menu__link menu__link_login"
                                onClick={openModal}
                            >
                                Вход / Выход
                            </button>
                        </li>
                    </ul>
                </nav>
                <Login 
                    closeModal={closeModal}
                    staticModal={show}
                />
            </div>
        </header>
    )
}

export default Header;

