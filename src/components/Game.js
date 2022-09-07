import React from "react";

// sytling and animation
import styled from "styled-components";
import { motion } from "framer-motion";


const Game =(props) =>{

    return(
        <div>
            <h3>{props.name}</h3>
            <p>{props.released}</p>
            <img src={props.image} alt={props.name} />
        </div>
    );
};

export default Game;