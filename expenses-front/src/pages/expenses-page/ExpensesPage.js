import React, { useEffect, useState } from "react";
import {findAll} from "../../services/ExpensesService";

const ExpensesPage = () => {

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        getExpenses();
    })

    const getExpenses = async () => {
        const URL = 'http://localhost:4000/expenses';
        return await fetch(URL, {
            method: 'GET',
        }).then(response => response.json())
        .then((data) => console.log(data));
    }

    return <div>
        Expenses
    </div>;

};

export default ExpensesPage;