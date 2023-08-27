import React from "react";
import "./intro.css";
import team from './team.png';
import CustomButton from "../button/customButton";

function Intro({ titulo }){
    return(
        <div className="contenedorImagen">
            <img src={team} className="team" alt="foto-perfil"/>
            <h1> {titulo} </h1>

            <CustomButton 
            color="green" texto="Botón intro">  
            </CustomButton>

            <CustomButton 
            color="blue" texto="Botón intro">  
            </CustomButton>

        </div> 
    )
}

export default Intro;