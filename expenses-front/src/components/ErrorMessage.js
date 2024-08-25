import React from 'react';

const ErrorMessage = ({props}) => {
    return <div className="error-message">
        {
            props === 'category-error' ? 'Выберите категорию!' : 'Что-то пошло не так. Попробуйте еще раз!'
        }

    </div>;
}
export default ErrorMessage;