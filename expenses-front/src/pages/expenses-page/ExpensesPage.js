import React, { useEffect, useState } from "react";

const ExpensesPage = () => {

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        getExpenses();
    }, [])

    const getExpenses = async () => {
        const URL = 'http://localhost:4000/expenses';
        return await fetch(URL, {
            method: 'GET',
        }).then(response => response.json())
        .then((data) => setExpenses(data))
        .catch((error) => console.log(error));
    }

    return <div>
        Расходы:
        <br/>
        {
            expenses.map((expense, index) => (
                <div key={index}>
                    {expense.author}: {expense.sum} - {expense.category}
                </div>
            ))
        }
    </div>;

};

export default ExpensesPage;