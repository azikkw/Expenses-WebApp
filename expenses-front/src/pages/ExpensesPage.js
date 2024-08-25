import React, { useEffect, useState } from "react";
import ExpenseCard from "../components/ExpenseCard";

const ExpensesPage = () => {

    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "Расходы | ExpDash";
        getExpenses();
    }, []);

    const getExpenses = async () => {
        return await fetch('http://localhost:4000/expenses', {
            method: 'GET',
        }).then(response => response.json())
        .then((data) => {
            setExpenses(data);
            setLoading(false);
        })
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
                loading
                ?
                    <div className="loading">Loading...</div>
                :
                    expenses.sort((a, b) => b.dateTime - a.dateTime).map((expense, index) => (
                        <ExpenseCard props={expense} index={index} key={index} />
                    ))
            }
        </div>
    </div>;

};

export default ExpensesPage;