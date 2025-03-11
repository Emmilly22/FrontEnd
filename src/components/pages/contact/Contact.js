import React, { useState, useEffect } from "react";
import '../WP.css';

const Contact = () => {
    
    const [data, setData] = useState(null);
        
    useEffect(
        () => {
            fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/pages/477')
            .then(response => response.json())
            .then(data => setData(data))
        }, []
    );

    if(!data) return <p>Ucitavanje...</p>

    return(
        <div>
            <h1>Kontakt</h1>
            <div dangerouslySetInnerHTML={{ __html:data.content.rendered}} />
        </div>
    );
};



export default Contact;