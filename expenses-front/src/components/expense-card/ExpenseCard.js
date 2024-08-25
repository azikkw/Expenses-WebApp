import React from 'react';
import './expense-card.css';

const ExpenseCard = ({props, index}) => {
    return <div className="expense-card">
        <span className="expense-date">{props.dateTime}</span>
        <span className="expense-author">{props.author}</span>
        <span className="expense-sum">{props.sum}</span>
        <span className="expense-category">{props.category}</span>
        <span className="expense-comment">{props.comment}</span>
    </div>;
}
export default ExpenseCard;