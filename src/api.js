const baseUrl ="https://api.rawg.io/api/";
// const api_key = "824e421e1add4ebf9b4ddfdc631267a9";

// get current month
const getCurrentMonth = () =>{
    const month = new Date().getMonth() + 1;
    if (month < 10){
        return `0${month}`;
    }else{
        return month;
    }  
};

// get current day
const getCurrentDay = () =>{
    const day = new Date().getDate();
    if (day < 10){
        return `0${day}`;
    }else{
        return day;
    }
    
};

// // get current day, month and year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear=  `${currentYear-1}-${currentMonth}-${currentDay}`;
const nextYear=  `${currentYear+1}-${currentMonth}-${currentDay}`;

// popular games
const popular_games = `games?key=824e421e1add4ebf9b4ddfdc631267a9&dates=${lastYear},${currentDate}&ordering=-rating&page_size=2`;
const upcoming_games = `games?key=824e421e1add4ebf9b4ddfdc631267a9&dates=${currentDate},${nextYear}&ordering=-added&page_size=2`;
const newGames =  `games?key=824e421e1add4ebf9b4ddfdc631267a9&dates=${lastYear},${currentDate}&ordering=-released&page_size=2`;


export const popularGamesURL = () => `${baseUrl}${popular_games}`;

export const upcomingGamesURL =() => `${baseUrl}${upcoming_games}`;

export const newGamesURL = () => `${baseUrl}${newGames}`;

// GAME DETAILS
export const gameDetailURL = (game_id) => `${baseUrl}games/${game_id}.json?&key=824e421e1add4ebf9b4ddfdc631267a9`;

export const gameScreenshotURL = (game_id) => `${baseUrl}games/${game_id}/screenshots?&.json?&key=824e421e1add4ebf9b4ddfdc631267a9`;


// searched game
export const searchGameURL = (game_name) => `${baseUrl}games?key=824e421e1add4ebf9b4ddfdc631267a9&search=${game_name}&page_size=9`;