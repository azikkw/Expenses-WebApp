import React, { useState } from 'react';
import ArrowIcon from "../assets/icons/arrow.svg";

const Categories = ({onCategorySelect}) => {

    const [category, setCategory] = useState('Выберите категорию');
    const [show, setShow] = useState(false);
    const categories = ['Питание', 'Развлечения', 'Одежда', 'Платные подписки', 'Транспорт'];

    const handleCategory = (categoryName) => {
        setCategory(categoryName);
        onCategorySelect(categoryName);
        setShow(false);
    };

    return <div className="categories">
        <div className="category-top" onClick={() => setShow(!show)}>
            {category} <img src={ArrowIcon} alt="Arrow icon" style={{ rotate: show ? '90deg' : '0deg' }} />
        </div>
        {
            show
            ?
                <ul className="categories-list">
                    {
                        categories.map((categoryName, index) => (
                            <li onClick={() => handleCategory(categoryName)} key={index}>
                                {categoryName} <img src={ArrowIcon} alt="Arrow icon"/>
                            </li>
                        ))
                    }
                </ul>
            :
                ''
        }
    </div>;
}
export default Categories;