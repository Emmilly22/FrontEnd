import React, { useEffect, useState } from "react";
import PostDate from "./PostDate";
import PostAuthor from "./PostAuthor";
import { Link } from "react-router-dom";
import './Blog.css';


const Blog = () => {

const [posts, setPosts] = useState([])

    useEffect(
        () => {
            fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/posts?per_page=20')
            .then(response => {
                    console.log(response.headers.get('X-WP-Total'));
                    response.json();
        })        
            .then(data => setPosts(data))
        }, []
    );

    return(
        <div className="container blog">
            <h1>Blog</h1>
            <div>
                <ul className="row">
                    {posts.map(post => (
                        <div className="row">
                            <div className="col-md-5"></div>
                            <div className="col-md-6 offset-md-1">
                                <p>
                                    Datum objave: <PostDate date ={"post.date"} />
                                </p>
                                <p>
                                    Autor članka: <PostAuthor authorID={post.author} />
                                </p>
                                <Link to={'/blog/' + post.slug}>
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

export default Blog;