import React from "react";

// sytling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
// react router
import {Link} from "react-router-dom";

const Game =(props) =>{
    // load details
    const dispatch = useDispatch();
    const loadDetailHandler = () =>{
        document.body.style.overflow ="hidden";
        dispatch(loadDetail(props.id));
    }
    return(
        <StyledGame onClick={loadDetailHandler}>
            <Link to={`/game/${props.id}`}>
                <h3>{props.name}</h3>
                <p>{props.released}</p>
                <img src={props.image} alt={props.name} />
            </Link>
        </StyledGame>
    );
};


const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba(0,0,0,0.1);
    text-align: center;
    border-radius: 1rem;
    overflow:hidden;
    cursor:pointer-events;
    img{
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`
export default Game;