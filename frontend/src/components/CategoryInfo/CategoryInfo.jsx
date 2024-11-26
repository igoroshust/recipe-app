import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCategoryInfo } from '../../api/getCategories';

const CategoryInfo = () => {

    const [categories, setCategories] = useState([]);
    const getResult = async () => {
        const res = await getCategoryInfo();
        setCategories(res.data);
    }

    useEffect(() => {
        getResult();
    }, []);

        return ();
}

export default CategoryList;
