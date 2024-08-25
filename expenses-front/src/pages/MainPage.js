import React from "react";
import "../assets/css/style.css";

import { NavLink, Outlet } from "react-router-dom";

import ExpensesIcon from "../assets/icons/expenses-icon.svg";
import AddExpenseIcon from "../assets/icons/add-expense.svg";

const Main = () => {
    return <div>
        <header>
            <div className="header-left">
                <div className="logo">
                    <img src="/logo.png" alt="Expenses icon"/>ExpDash
                </div>
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