import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from './pages/MainPage';
import ExpensesPage from './pages/ExpensesPage';
import AddExpensePage from './pages/AddExpensePage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <ExpensesPage />,
                // errorElement: <ErrorPage />
            },
            {
                path: "/add-expense",
                element: <AddExpensePage />,
                // errorElement: <ErrorPage />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
