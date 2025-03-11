import React from "react";
import './Home.css';
import { Link } from "react-router-dom";


/* BS mb-4 postavlja marginu na dnu elementa na 24px */

/* BS mb-md-0 uklanja marginu na dnu (margin-bottom) elementa na uredjajima sa 
sirinom ekrana od 768px ili vecom (npr. tabletima i vecim uredjajima). */


const Home = () => {
    return (
        <>
            <section id="New Div">
                <div className="container-fluid-primary">
                    <div className="row">
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="home-page">
                                <div className="background-div">
                                    <h2><a href="/">Title</a></h2>
                                    <p className="home-details mt-3">
                                        <span className="date">12 Apr 2025</span>
                                        <p>
                                            <span className="tags">
                                            <a href="/">Button</a>
                                            </span>
                                        </p>
                                    </p>
                                    <p className="m-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="home-page">
                            <h2><a href="/">Title</a></h2>
                            <p className="home-details mt-3">
                                <span className="date">12 Apr 2025</span>
                                <p>
                                    <span className="tags">
                                    <a href="/">Button</a>
                                    </span>
                                </p>
                            </p>
                            <p className="m-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="home-page">
                            <h2><a href="/">Title</a></h2>
                            <p className="home-details mt-3">
                                <span className="date">12 Apr 2025</span>
                                <p>
                                    <span className="tags">
                                    <a href="/">Button</a>
                                    </span>
                                </p>
                            </p>
                            <p className="m-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid-secundary">
                    <div className="row">
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="home-page">
                                <div className="background-div">
                                    <h2><a href="/">Title</a></h2>
                                    <p className="home-details mt-3">
                                        <span className="date">12 Apr 2025</span>
                                        <p>
                                            <span className="tags">
                                            <a href="/">Button</a>
                                            </span>
                                        </p>
                                    </p>
                                    <p className="m-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="home-page">
                            <h2><a href="/">Title</a></h2>
                            <p className="home-details mt-3">
                                <span className="date">12 Apr 2025</span>
                                <p>
                                    <span className="tags">
                                    <a href="/">Button</a>
                                    </span>
                                </p>
                            </p>
                            <p className="m-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="home-page">
                            <h2><a href="/">Title</a></h2>
                            <p className="home-details mt-3">
                                <span className="date">12 Apr 2025</span>
                                <p>
                                    <span className="tags">
                                    <a href="/">Button</a>
                                    </span>
                                </p>
                            </p>
                            <p className="m-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Home;