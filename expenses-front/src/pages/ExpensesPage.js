import React, { useEffect, useState } from "react";
import ExpenseCard from "../components/expense-card/ExpenseCard";

const ExpensesPage = () => {

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        document.title = "Расходы | ExpDash"
        getExpenses();
    }, []);

    const getExpenses = async () => {
        const URL = 'http://localhost:4000/expenses';
        return await fetch(URL, {
            method: 'GET',
        }).then(response => response.json())
        .then((data) => setExpenses(data))
        .catch((error) => console.log(error));
    }

    return <div className="container">
        <p className="title">Расходы</p>
        <div className="expenses-list-titles">
            <span>Date</span>
            <span>Author</span>
            <span>Sum</span>
            <span>Category</span>
            <span>Comment</span>
        </div>
        <div className="expenses-list">
            {
                expenses.map((expense, index) => (
                    <ExpenseCard props={expense} index={index} key={index} />
                ))
            }
        </div>
    </div>;

};

export default ExpensesPage;