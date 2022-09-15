import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

// images
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
// star images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

// redux
import { useSelector } from "react-redux";
// react router
import {useNavigate} from "react-router-dom";
// image resize
import { smallImage } from "../util";

const GameDetail = ({pathId}) => {
    

    // data
    const {screen, game, isLoading} = useSelector((state)=> state.detail)

    const navigate = useNavigate();

    // exit detail
    const exitDetailHandler = (e) =>{
        if(e.target.classList.contains("shadow")){
            document.body.style.overflow ="auto";
            navigate("/ignite");
        }
    }

    // get stars
    const getStars = () =>{
        const star =[];
        const rating = Math.floor(game.rating);
        for(let i=1; i<=5; i++){
            if(i <= rating){
                star.push(<img src={starFull} key={i} alt="star" />)
            }
            else{
                star.push(<img src={starEmpty} key={i} alt="star" />)
            }
        }
        return star;
    };


    // get platform
    const getPlatform =(platform) =>{
        switch(platform){
            case "PlayStation 4":
                return playstation;
            case "PlayStation 5":
                return playstation;
            case "Xbox Series S/X":
                return xbox;
            case "Xbox S":
                return xbox;
            case "Xbox One":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "iOS":
                return apple;
            default:
                return gamepad;
        }
    }
    return(
        <>
        {isLoading && (
            <CardShadow className="shadow" onClick={exitDetailHandler}>
                <Detail layoutId={pathId}>
                    <Stats>
                        <div className="rating">
                            <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                            <p>Rating: {game.rating} </p>
                            {getStars()}
                        </div>

                        <Info>
                            <h3>Platforms</h3>
                            <Platforms>
                                {game.platforms.map(data =>(
                                    <img 
                                    key={data.platform.id} 
                                    src={getPlatform(data.platform.name)} 
                                    alt={data.platform.name}/>
                                ))}
                            </Platforms>
                        </Info>
                    </Stats>
                    <Media>
                        <motion.img 
                        layoutId={`image ${pathId}`}
                        src={smallImage(game.background_image, 1280)} 
                        alt ="imagez"/>
                    </Media>
                    <Description>
                        <p>{game.decsription_raw}</p>
                    </Description>
                    <div className="gallery">
                        {screen.results.map(screen =>(
                            <img src={smallImage(screen.image, 1280)} key={screen.id} alt="game"/> 
                        ))}
                    </div>
                </Detail>
            </CardShadow>
            )}
    </>
    )
}

const CardShadow = styled(motion.div)`
    width:100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    z-index: 10;
    position:fixed;
    top:0;
    left:0;
    &::-webkit-scrollbar{
        width:0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track{
        background: white;
    }
`
const Detail = styled(motion.div)`
    width:80%;
    padding: 2rem 5rem;
    position:absolute;
    left: 10%;
    border-radius: 1rem;
    background: white;
    color: black;
    img{
        width:100%;
    }
`
const Stats = styled(motion.div)`
    display:flex;
    align-items: center;
    justify-content: space-between;
    img{
        width:2rem;
        height:2rem;
        display:inline;
    }
`
const Info = styled(motion.div)`
    text-align: center;
`
const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 3rem;
    }
`
const Media = styled(motion.div)`
    margin-top: 5rem;
    img{
        width: 100%;
        height: 60vh;
        object-fit: cover;
    }
`
const Description = styled(motion.div)`
    margin: 5rem 0rem;
`

export default GameDetail;