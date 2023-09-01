import React, { useEffect, useState } from "react";
import "./home.css";
import {Link} from "react-router-dom";

function Home(){
    const[productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.jason())
        .then(data=>{
            setProductos(data);
            setLoading(false);
        })
    }, [])

    return(
        <div>

        <h1>Inicio</h1>
        
        <Link to="/producto/1">Ver producto 1</Link>
        <Link to="/registro">Registro</Link>
        <Link to="/login">Login</Link>

        </div>
    )
}

export default Home;