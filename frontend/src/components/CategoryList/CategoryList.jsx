import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCategoryList } from '../../api/getCategories';

const CategoryList = () => {

    const [categories, setCategories] = useState([]);
    const getResult = async () => {
        const res = await getCategoryList();
        setCategories(res.data);
    }

    useEffect(() => {
        getResult();
    }, []);

        return (
    <>
     <div className="col-lg-4">
        <div className="card mb-4">
            <div className="card-header">Категории рецептов</div>
               <div className="card-body">
                   <div className="row1">
                       <div className="col-sm-6">
                       <ul className="list-unstyled mb-0">
                       <li><Link to="/">Все категории</Link></li>
                        { !!categories.length && categories.map((category) => (
                                <li><NavLink to={`/categories/${ category.id }`} end style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>{ category.name }</NavLink></li>
                        ))}
                        </ul>
                       </div>
                   </div>
              </div>
        </div>
    </div>
     </>
    );
}

export default CategoryList;