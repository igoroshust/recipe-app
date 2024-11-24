import React from 'react';

const Navbar = () => {
    return (
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#!">recipe-app</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link" href="#">API Info</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">OpenAPI Schema</a></li>
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Swagger</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

/*
 <nav className={`${$style.navbar} navbar-expand-lg navbar-dark bg-dark`}>
            <div className={$style.container}>
                <a className={$style.navbar-brand} href="#!">Start Bootstrap</a>
                <button className={$style.navbar-toggler} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div className={$style.collapse navbar-collapse} id="navbarSupportedContent">
                    <ul className={$style.navbar-nav ms-auto mb-2 mb-lg-0}>
                        <li className={$style.nav-item}><a className={$style.nav-link} href="#">Home</a></li>
                        <li className={$style.nav-item}><a className={$style.nav-link} href="#">About</a></li>
                        <li className={$style.nav-item}><a className={$style.nav-link} href="#">Contact</a></li>
                        <li className={$style.nav-item}><a className={$style.nav-link} href="#">Blog</a></li>
                    </ul>
                </div>
            </div>
        </nav>
*/

/*
const navbarClasses = classNames($style.navbar, 'navbar-expand-lg', 'navbar-dark', 'bg-dark', 'brand')
    const collapseClasses = classNames($style.collapse, 'navbar-collapse')
    const navbarUlClasses = classNames($style.navbar-nav, 'ms-auto', 'mb-2', 'mb-lg-0')

    return (
         <nav className={navbarClasses}>
            <div className={$style.container}>
                <a className={navbarClasses} href="#!">Start Bootstrap</a>
                <button className={$style.navbar-toggler} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className={$style.navbar-toggler-icon}></span></button>
                <div className={collapseClasses} id="navbarSupportedContent">
                    <ul className={navbarUlClasses}>
                        <li className={$style.nav-item}><a className={$style.nav-link} href="#">Home</a></li>
                        <li className={$style.nav-item}><a className={$style.nav-link} href="#">About</a></li>
                        <li className={$style.nav-item}><a className={$style.nav-link} href="#">Contact</a></li>
                        <li className={$style.nav-item}><a className={$style.nav-link} href="#">Blog</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
*/