import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Header.css';

const Header = () => {

const [username, setUserName] = useState(null);


useEffect( () => {
    const user = localStorage.getItem('username');
    if(user) setUserName(user);
}, []);

const location = useLocation();
if(location.pathname === '/login' || location.pathname === '/register') return null;

const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.reload();
  };


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    /* Za opciju latest npr. tri clanka prikazuje odjednom:
    var latest = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    }; */

    return(
        <>
            <div className="overflow-hidden">
                <div className="slider">
                    <Slider {...settings}>
                            <div>
                            <h3>Text 1</h3>
                            </div>
                            <div>
                            <h3>Text 2</h3>
                            </div>
                            <div>
                            <h3>Text 3</h3>
                            </div>
                            <div>
                            <h3>Text 4</h3>
                            </div>
                            <div>
                            <h3>Text 5</h3>
                            </div>
                            <div>
                            <h3>Text 6</h3>
                            </div>
                    </Slider>
                </div>
            </div>


            <header>
    
                <nav className="navbar navbar-expand-lg py-0 navbar-primary">
                <a className="navbar-brand" href="/">@rrow</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/">Book</a>
                            <a className="dropdown-item" href="/">Writer</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">New content</a>
                        </ul>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Articles</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/">Title 1</a>
                            <a className="dropdown-item" href="/">Title 2</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">New content</a>
                        </ul>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Series</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/">Title 1</a>
                            <a className="dropdown-item" href="/">Title 2</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">New content</a>
                        </ul>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Movies</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/">Title 1</a>
                            <a className="dropdown-item" href="/">Title 2</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">New content</a>
                        </ul>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Quotes</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/">Title 1</a>
                            <a className="dropdown-item" href="/">Title 2</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">New content</a>
                        </ul>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Characters</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/">Title 1</a>
                            <a className="dropdown-item" href="/">Title 2</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">New content</a>
                        </ul> 
                        </li>
                    </ul>

                <nav className="navbar-secundary">
                    <div className="dropdown">
                        <button onclick="myFunction()" className="dropbtn">Search by Key Words</button>
                        <div id="myDropdown" className="dropdown-content">
                            <input type="text" placeholder="Search..." id="myInput" onkeyup="filterFunction()"></input>
                            <a href="/chaptername">Chapter Name 01</a>
                            <a href="/chaptername">Chapter Name 02</a>
                            <a href="/chaptername">Chapter Name 03</a>
                        </div>
                    </div>
                </nav>
                        

                        <div className="nav-item-not-dropdown ms-auto"> 
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Login</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Cart</a>
                            </li>
                        </div>  
                    </div>     
                </nav>

                <a href="/">
                <img src="images/Webook-main-img.png" alt="Naslovna slika" className="header-image" /></a>                 
                <section id="hero">
                    <div className="container">
                        <div className="row align-items-center text-center text-md-start">
                        </div>
                    </div>
                </section>
            </header>
        </>
    );
};

export default Header;




        /*  <div className="container-fluid">
                <div className="row text-center">
                    <div className="topnav">
                        <Link to="/book">Book</Link>
                        <Link to="/writer">Writer</Link>
                        <Link to="/articles">Articles</Link>
                        <Link to="/characters">Characters</Link>
                        <a href="public/images/green-darkblue-200x60.png"></a>
                        {username ? (
                            <button onClick={logout} className="btn">Welcome, {username}</button>
                        ) : (
                            <Link to="/login" className="btn">Login</Link> 
                        )}
                        <Link to="/cart">Cart</Link>
                        <Link to="public/images/search-binoculars-8-64.png">Search</Link>
                    </div>
                </div>
            </div>
    
 
            <img src="images/Webook-main-img.png" alt="Naslovna slika" />                 
            <section id="hero">
                <div className="container">
                    <div className="row align-items-center text-center text-md-start">
                    </div>
                </div>
            </section>  */
