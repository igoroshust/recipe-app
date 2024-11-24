import React from 'react';
import { useState, useEffect } from 'react';
import { getCategoryList, getCategoryInfo } from '../../api/getCategories';

const CategoryList = () => {

    const [categories, setCategories] = useState([]);
    const getResult = async () => {
//        const res = await getRecipeInfo(3);
//        setRecipes([res.data]);
    const res = await getCategoryList();
    setCategories(res.data);
}

    useEffect(() => {
        getResult();
    }, []);

        return (
    <>
     <div class="col-lg-4">
        <div class="card mb-4">
            <div class="card-header">Categories</div>
               <div class="card-body">
                   <div class="row">
                       <div class="col-sm-6">
                        { !!categories.length && categories.map((category) => (
                           <ul class="list-unstyled mb-0">
                               <li><a href="#!">{ category.name }</a></li>
                           </ul>
                        ))}
                       </div>
                   </div>
              </div>
        </div>
    </div>
     </>
    );
}

export default CategoryList;

/*
            <div class="card mb-4">
            <a href="#!"><img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
            <div class="small text-muted">{ recipe.time_create }</div>
            <h2 class="card-title"><a href={ recipe.pk }>{ recipe.title }</a></h2>
            <p class="card-text">{ recipe.content }</p>
            <a class="btn btn-primary" href="#!">Read more →</a>
         </div>
*/