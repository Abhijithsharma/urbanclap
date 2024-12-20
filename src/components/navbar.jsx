import React from "react";
import './navbar.css';

function Header() {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-emphasis border">
                <div className="container-fluid">
                    <a className="navbar-brand mx-4" href="#"><img src="/images/logo.png" style={{width: '120px'}} alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active mx-3" aria-current="page" href="#">Beauty</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3" href="#">Homes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3" href="#">Native</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control margininp pt-md-1"
                                type="search"
                                placeholder="Banjara Hills, Hyderabad"
                                aria-label="Search"
                            />
                            <input
                                className="form-control margininp2"
                                type="search"
                                placeholder="Search for"
                                aria-label="Search"
                            />
                        </form>
                        <ul className="navbar-nav icons">
                            <li className="nav-item"><i className="fa-solid fa-cart-shopping icon"></i></li>
                            <li className="nav-item"><i className="fa-regular fa-user icon"></i></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
