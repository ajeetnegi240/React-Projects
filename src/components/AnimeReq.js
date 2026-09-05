import React from "react"
import config from "../Config/Config"
import { useDispatch } from "react-redux";




async function TopAnime(filter=null,limit=10){
    try{
        if (filter){
            const result = await fetch(`${config.jikanUrl}top/anime?filter=${filter}&limit=${limit}`)
                            .then((res)=> res.json())
            return result 
        }else{
            const result = await fetch(`${config.jikanUrl}top/anime`)
                            .then((res)=> res.json())
            return result 
        }

    }catch (error){
        console.log(error)
    }
}

async function ThisAnime(anime){
    try{
        const result =  await fetch(`${config.jikanUrl}anime?q=${anime}`)
                            .then((res)=> res.json())
        return result
    }catch(error){
        console.log('there is an error')
        console.log(error)
        return false;
    }
}
async function AnimeDetail(id){
    try{
        const result =  await fetch(`${config.jikanUrl}anime/${id}`)
                            .then((res)=> res.json())
        return result
    }catch(error){
        console.log('there is an error')
        console.log(error)
        return false;
    }
}



export {
    TopAnime,
    ThisAnime,
    AnimeDetail,
}