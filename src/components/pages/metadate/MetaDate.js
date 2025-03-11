import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './MetaDate.css';

const MetaDate = () => {

const [posts, setPosts] = useState([])

    useEffect(
        () => {
            fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/posts')
                .then(response => response.json())
                .then(data => setPosts(data))
        }, []
    );

    return(
        <div className="container blog">
            <h1>Date</h1>
            <div>
                <ul className="row">
                    {posts.map(post => (
                        <div className="row">
                            <div className="col-md-5"></div>
                            <div className="col-md-6 offset-md-1">
                                <MetaDate date={post.date} />
                                <Link to={'/metadate/' + post.slug}>
                                    <h2 dangerouslySetInnerHTML={{ __html:post.title.rendered}} />
                                </Link>
                                <p dangerouslySetInnerHTML={{ __html:post.excerpt.rendered}} />
                            </div>
                        </div>   
                    ))}
                </ul>
            </div>
        </div>   
    );
};

export default MetaDate;