import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">МойРецепт</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link" href={`${process.env.REACT_APP_API_URL}/api/`} target="_blank" rel="noopener noreferrer">API Root</a></li>
                        <li className="nav-item"><a className="nav-link" href={`${process.env.REACT_APP_API_URL}/api/openapi/`}  target="_blank" rel="noopener noreferrer">OpenAPI</a></li>
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href={`${process.env.REACT_APP_API_URL}/api/swagger-ui/`}  target="_blank" rel="noopener noreferrer">Swagger</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;