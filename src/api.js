const baseUrl ="https://api.rawg.io/api/";


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
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=20`;

export const popularGamesURL = () => `${baseUrl}${popular_games}`;