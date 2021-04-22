import logo from "../assets/images/header/Logo.svg";
import btn_arrow from "../assets/images/btn_arrow.svg";
import React from "react";
import {Link} from "react-router-dom";

const links = [
    {
        to: '/router/',
        label: 'Home'
    },
    {
        to: '/router/about',
        label: 'About'
    },
    {
        to: '/router/features',
        label: 'Features'
    },
    {
        to: '/router/contacts',
        label: 'Contacts'
    }
];

export const Navigation = () => (
    <nav className='container nav_header'>
        <div className="logo">
            <img src={logo} aria-hidden="true" alt=""/>
        </div>
        <nav className="navigation">
            {links.map(link =>
                <a className='nav_link' key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                </a>
            )}
        </nav>
        <a className="btn_demo" href="#">
            <p className="btn_text">Request Demo</p>
            <img className="btn_arrow" src={btn_arrow} aria-hidden="true" alt=""/>
        </a>
    </nav>
)