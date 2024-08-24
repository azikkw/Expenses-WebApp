import React from "react";
import './main-page.css';

import { Link, Outlet } from "react-router-dom";
// import {LogoGithub} from "react-ionicons";

const Main = () => {
    return <div className="container">
        <header>
            <div className="logo">ExpDash</div>
            <a href="https://github.com/azikkw" target="_blank" rel="noreferrer">
                azikkw
            </a>
        </header>
        <div className="dashboard">
            <nav className="left-bar">
                <span>МЕНЮ</span>
                <ul>
                    <li><Link to='/expenses'>Расходы</Link></li>
                    <li><Link to='/add-expense'>Добавить расход</Link></li>
                </ul>
            </nav>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    </div>
};

export default Main;