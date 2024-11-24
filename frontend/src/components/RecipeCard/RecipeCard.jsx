import React from 'react';

const RecipeCard = () => {

    return (
        <div class="card mb-4">
            <a href="#!"><img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
            <div class="small text-muted">January 1, 2023</div>
               <h2 class="card-title"><a href="#!">Title</a></h2>
               <p class="card-text">Description</p>
               <a class="btn btn-primary" href="#!">Read more →</a>
        </div>
    );
}

export default RecipeCard;