import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './MetaAuthor.css';

const MetaAuthor = () => {

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
            <h1>About Author</h1>
            <div>
                <ul className="row">
                    {posts.map(post => (
                        <div className="row">
                            <div className="col-md-5"></div>
                            <div className="col-md-6 offset-md-1">
                                <MetaAuthor author={post.author} />
                                <Link to={'/metaauthor/' + post.slug}>
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

export default MetaAuthor;