import React from "react"
import config from "../Config/Config"
import { useDispatch } from "react-redux";




async function TopAnime(filter='all',limit=10){
    try{
        if (filter){
            const result = await fetch(`/api/anime/ranking?ranking_type=${filter}&limit=${limit}`)
                            .then((res)=> res.json())
            return result 
        }else{
            const result = await fetch(`/api/anime/ranking?ranking_type=${filter}&limit=${limit}`
            )
                            .then((res)=> res.json())
            return result 
        }

    }catch (error){
        console.log(error)
    }
}

async function ThisAnime(anime){
    try{
        const result =  await fetch(`/api/anime/anime?q=${encodeURIComponent(anime)}`)
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
        const result =  await fetch(`/api/anime/animedetail?id=${id}&fields=id,title,main_picture,characters,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`)
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