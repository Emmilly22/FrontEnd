import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const SingleCountry = () => {

    const {name} = useParams();
    const [singleCountry, setSingleCountry] = useState(null);



    useEffect(
            () => {
                fetch('https://restcountries.com/v3.1/alpha/' + name)
                .then(response => response.json())
                .then(data => setSingleCountry(data[0]))
            }, [name]
    );

    if(!singleCountry) return <p>Učitavanje...</p>

  
    return (
        <>
            <div className="container">
                

            </div>
    
        </>
    );
};

export default SingleCountry;