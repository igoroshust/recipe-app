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


/*
            <div class="card mb-4">
            <a href="#!"><img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
            <div class="small text-muted">{ recipe.time_create }</div>
            <h2 class="card-title"><a href={ recipe.pk }>{ recipe.title }</a></h2>
            <p class="card-text">{ recipe.content }</p>
            <a class="btn btn-primary" href="#!">Read more →</a>
         </div>
*/

/*
            <div class="card mb-4">
            <a href="#!"><img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
            <div class="small text-muted">{ recipe.time_create }</div>
            <h2 class="card-title"><a href={ recipe.pk }>{ recipe.title }</a></h2>
            <p class="card-text">{ recipe.content }</p>
            <a class="btn btn-primary" href="#!">Read more →</a>
         </div>
*/
/*
            <div class="card mb-4">
            <a href="#!"><img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
            <div class="small text-muted">{ recipe.time_create }</div>
            <h2 class="card-title"><a href={ recipe.pk }>{ recipe.title }</a></h2>
            <p class="card-text">{ recipe.content }</p>
            <a class="btn btn-primary" href="#!">Read more →</a>
         </div>
*/

/*
            <div class="card mb-4">
            <a href="#!"><img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
            <div class="small text-muted">{ recipe.time_create }</div>
            <h2 class="card-title"><a href={ recipe.pk }>{ recipe.title }</a></h2>
            <p class="card-text">{ recipe.content }</p>
            <a class="btn btn-primary" href="#!">Read more →</a>
         </div>
*/

/*
            <div class="card mb-4">
            <a href="#!"><img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
            <div class="small text-muted">{ recipe.time_create }</div>
            <h2 class="card-title"><a href={ recipe.pk }>{ recipe.title }</a></h2>
            <p class="card-text">{ recipe.content }</p>
            <a class="btn btn-primary" href="#!">Read more →</a>
         </div>
*/

/*
            <div class="card mb-4">
            <a href="#!"><img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
            <div class="small text-muted">{ recipe.time_create }</div>
            <h2 class="card-title"><a href={ recipe.pk }>{ recipe.title }</a></h2>
            <p class="card-text">{ recipe.content }</p>
            <a class="btn btn-primary" href="#!">Read more →</a>
         </div>
*/



/*
 <li><Link onClick={() => setSelectedCategory(null)}>Все категории</Link></li>
                        { !!categories.length && categories.map((category) => (
                               <li key={category.id}>
                                    <Link onClick={() => handleCategoryClick(category.id)}>
                                    {category.name}
                                    </Link>
                               </li>
                        ))}
*/

/*
<li><Link to="/">Все категории</Link></li>
                         { !!categories.length && categories.map((category) => (
                           <li><Link to={`/categories/${ category.id }`}>{ category.name }</Link></li>
                        ))}
*/

/*
            <div class="card mb-4">
            <a href="#!"><img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
            <div class="small text-muted">{ recipe.time_create }</div>
            <h2 class="card-title"><a href={ recipe.pk }>{ recipe.title }</a></h2>
            <p class="card-text">{ recipe.content }</p>
            <a class="btn btn-primary" href="#!">Read more →</a>
         </div>
*/