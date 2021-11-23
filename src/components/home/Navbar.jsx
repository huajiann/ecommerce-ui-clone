import React from 'react'
import * as BiIcons from 'react-icons/bi';

const Navbar = () => {
    return (
        <header className="header">
            <div className="top">
                <ul className="top__list">
                    <li className="top__item">
                        <a>Client Services</a>
                    </li>
                    <li className="top__item">
                        <a>FAQ</a>
                    </li>
                    <li className="top__item">
                        <a>About</a>
                    </li>
                    <li className="top__item">
                        <a>Eng</a>
                        <BiIcons.BiChevronDown/>
                    </li>
                </ul>
            </div>
            <div className="middle">
                <div className="middle__left">
                    <a>
                        <h1 className="middle__brand">Blizoo.</h1>
                    </a>
                    <BiIcons.BiSearchAlt className="middle__icon"/>
                </div>
                <div className="middle__right">
                    <a className="middle__item">
                        Men's
                    </a>
                    <a className="middle__item">
                        Women's
                    </a>
                    <BiIcons.BiHeart className="middle__icon"/>
                    <BiIcons.BiUser className="middle__icon"/>
                    <button>
                        <BiIcons.BiCartAlt className="middle__icon"/>
                        Cart (0)
                    </button>
                </div>
            </div>
            <nav className="bottom">
                <ul className="bottom__list">
                    <li className="bottom__item">
                        <a>Top</a>
                    </li>
                    <li className="bottom__item">
                        <a>Bottom</a>
                    </li>
                    <li className="bottom__item">
                        <a>Swim wear</a>
                    </li>
                    <li className="bottom__item">
                        <a>Watch</a>
                    </li>
                    <li className="bottom__item">
                        <a>Shoes</a>
                    </li>
                    <li className="bottom__item">
                        <a>Bag</a>
                    </li>
                    <li className="bottom__item">
                        <a>Shoes</a>
                    </li>
                    <li className="bottom__item">
                        <a>Accessories</a>
                    </li>
                    <li className="bottom__item">
                        <a>Sports</a>
                    </li>
                    <li className="bottom__item">
                        <a>Cosmetic</a>
                    </li>
                    <li className="bottom__item">
                        <a>Muslim Wear</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
