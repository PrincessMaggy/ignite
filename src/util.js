// media resize
let image;
export const smallImage = (imagePath, size) =>{
    if (imagePath){
    image = imagePath.match(/media\/(screenshots|games)/)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
    )
    : imagePath.replace('/media/games/', `/media/resize/${size}/-/games`);
    }
    else{
        image = imagePath;
    }
    return image;
}
