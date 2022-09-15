import React from "react";

// sytling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../animation";

// redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

// react router
import {Link} from "react-router-dom";

// image resize
import { smallImage } from "../util";


const Game =(props) =>{
    const stringPathId = props.id.toString();
    // load details
    const dispatch = useDispatch();
    const loadDetailHandler = () =>{
        document.body.style.overflow ="hidden";
        dispatch(loadDetail(props.id));
    }
    return(
        <StyledGame  
        variants ={popup} 
        initial="hidden" 
        animate ="show" 
        layoutId={stringPathId}  
        onClick={loadDetailHandler}>
            <Link to={`/game/${props.id}`}>
                <motion.h3 layoutId={`title ${stringPathId}`}>{props.name}</motion.h3>
                <p>{props.released}</p>
                <motion.img 
                layoutId={`image ${stringPathId}`}
                src={smallImage(props.image, 640)} 
                alt={props.name} />
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
    margin-bottom:2em;
    img{
        width: 100%;
        height: 62vh;
        object-fit: cover;
    }
`
export default Game;