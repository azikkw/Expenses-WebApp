import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

import ErrorMessage from "../components/ErrorMessage";
import Categories from "../components/Categories";

const AddExpensePage = () => {

    const [dateTime, setDateTime] = useState(new Date());
    const [sum, setSum] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [comment, setComment] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [addingState, setAddingState] = useState('Добавить');
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Добавить расход | ExpDash";
        setAuthor(localStorage.getItem("author"));
    }, []);

    const create = async (e) => {
        e.preventDefault();
        try {
            if(category.length === 0) setErrorMessage('category-error');
            else {
                setAddingState('Добавляем...')
                await fetch('http://localhost:4000/expenses', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        dateTime: dateTime.toLocaleDateString('ru-RU').toString(),
                        author: author,
                        sum: Number(sum),
                        category: category,
                        comment: comment
                    })
                }).then(() => {
                    navigate("/");
                });
            }
        } catch(error) {
            setErrorMessage(error.message);
            setAddingState('Добавить');
        }
    }

    const handleCategoryChange = (categoryName) => {
        setCategory(categoryName);
    };

    return <div className="container">
        <p className="title">Добавить Расход</p>
        <form onSubmit={(e) => create(e)}>
            <Calendar onChange={setDateTime} value={dateTime}/>
            <input type="text" value={sum} onChange={(e) => setSum(e.target.value)} placeholder="Введите сумму" pattern="\d+" required/>
            <Categories onCategorySelect={handleCategoryChange} />
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Введите комментарий" required/>
            { errorMessage.length > 0 ? <ErrorMessage props={errorMessage}/> : '' }
            <button className="create-btn" type="submit">{addingState}</button>
        </form>
    </div>;

};

export default AddExpensePage;