import React, {useEffect} from "react";
// Redux
import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "../actions/gamesAction";

// components
import Game from "../components/Game";

// sytling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Home =() =>{
    // fetch games
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadGames());
    }, [dispatch]);

const {popular, newGames, upcoming} = useSelector((state) => state.games)


    return(
        <GameList>
            <h2>Welcome Home</h2>
            <Games>
                {upcoming.map((game)=> 
                <Game 
                    name={game.name}
                    released ={game.released}
                    id = {game.id}
                    image = {game.background_image}
                    key = {game.id}
                />)}
            </Games>

        </GameList>
    );
};

const GameList = styled(motion.div)`
`
const Games = styled(motion.div)`
`

export default Home;