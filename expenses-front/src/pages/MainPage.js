import React, {useEffect, useState} from "react";
import "../assets/css/style.css";

import { NavLink, Outlet } from "react-router-dom";

import ExpensesIcon from "../assets/icons/expenses-icon.svg";
import AddExpenseIcon from "../assets/icons/add-expense.svg";

const Main = () => {

    const [author, setAuthor] = useState(null);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        if(localStorage.getItem("author")) {
            setAuthor(localStorage.getItem("author"));
        }
    }, []);

    const start = () => {
        if(inputText.length > 0) {
            localStorage.setItem("author", inputText);
            window.location.reload();
        }
    }

    if(!author) {
        return <div className="welcome">
            <p>Добро пожаловать в</p>
            <div className="logo">
                <img src="/logo.png" alt="Expenses icon"/>ExpDash
            </div>
            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Введите ваше имя" />
            <button className="create-btn" onClick={start}>Начать</button>
        </div>
    }

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
            <div className="user">
                <span className="avatar">{author.slice(0, 1)}</span>
                <span>{author}</span>
            </div>
        </header>
        <div className="content">
            <Outlet/>
        </div>
    </div>

};

export default Main;