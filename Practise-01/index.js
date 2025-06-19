const fs = require("fs");

const placeData= require("./data/Favourite.json");

placeData.map((item)=>{
    return(
        fs.mkdir(`item.folder`,err=>{console.log("folder created error",err)})
    )
})
