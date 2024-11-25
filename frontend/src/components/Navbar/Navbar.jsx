import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">recipe-app</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link" href={`${process.env.REACT_APP_API_URL}/api/`} target="_blank" rel="noopener noreferrer">API Info</a></li>
                        <li className="nav-item"><a className="nav-link" href={`${process.env.REACT_APP_API_URL}/api/openapi/`}  target="_blank" rel="noopener noreferrer">OpenAPI Schema</a></li>
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href={`${process.env.REACT_APP_API_URL}/api/swagger-ui/`}  target="_blank" rel="noopener noreferrer">Swagger</a></li>
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