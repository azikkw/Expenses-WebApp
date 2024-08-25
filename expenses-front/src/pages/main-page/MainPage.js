import React from "react";
import './main-page.css';

import { NavLink, Outlet } from "react-router-dom";

import ExpensesIcon from "../../assets/expenses-icon.svg";
import AddExpenseIcon from "../../assets/add-expense.svg";

const Main = () => {
    return <div className="container">
        <header>
            <div className="header-left">
                <div className="logo">ExpDash</div>
                <nav>
                    <NavLink to='/' className={({isActive}) => (isActive ? 'active' : '')}>
                        <img src={ExpensesIcon} alt="Expenses icon"/>Расходы
                    </NavLink>
                    <NavLink to='/add-expense' className={({isActive}) => (isActive ? 'active' : '')}>
                        <img src={AddExpenseIcon} alt="Add expense icon"/>Добавить расход
                    </NavLink>
                </nav>
            </div>
            <a href="https://github.com/azikkw" target="_blank" rel="noreferrer">
                azikkw
            </a>
        </header>
        <div className="content">
            <Outlet/>
        </div>
    </div>
};

export default Main;