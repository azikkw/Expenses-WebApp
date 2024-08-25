import React, { useEffect, useState } from "react";

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const AddExpensePage = () => {

    const [dateTime, setDateTime] = useState(new Date());
    const [sum, setSum] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('Выберите категорию');
    const [comment, setComment] = useState('');

    useEffect(() => {
        document.title = "Добавить расход | ExpDash"
    }, []);

    const create = async (e) => {
        e.preventDefault();
        const URL = 'http://localhost:4000/expenses';
        await fetch(URL, {
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
        }).then(response => response.json())
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }

    return <div className="container">
        <p className="title">Добавить Расход</p>
        <form onSubmit={(e) => create(e)}>
            <Calendar onChange={setDateTime} value={dateTime}/>
            <input type="text" value={sum} onChange={(e) => setSum(e.target.value)} placeholder="Введите сумму" pattern="\d+" required/>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Введите имя автора" required/>
            {/*<input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Введите категорию" required/>*/}
            <div className="category">
                <div className="category-top">
                    {category}
                </div>
            </div>
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Введите комментарий" required/>
            <button className="create-btn" type="submit">Добавить</button>
        </form>
    </div>;

};

export default AddExpensePage;