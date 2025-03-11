import React from "react";
import './Footer.css';

import {useLocation} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer className="text-center">
            <div className="icons">
                <a href="/">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="/">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
               
                <a href="/"><i className="fa-brands fa-square-facebook"></i></a>
                <a href="/"><i className="fa-brands fa-square-instagram"></i></a>
                <a href="/"><i className="fa-brands fa-square-twitter"></i></a>
                <a href="/"><i className="fa-brands fa-linkedin"></i></a>
                <a href="/"><i className="fa-brands fa-mail"></i></a>
            </div>
            <p>Copyright ©2025 All rights reserved</p>
        </footer>
    );
};

export default Footer;