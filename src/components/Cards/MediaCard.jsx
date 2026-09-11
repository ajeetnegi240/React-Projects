import React from "react";
import {useNavigate} from "react-router-dom"

export default function MediaCard({anime}){
    const navigate = useNavigate()
    const eachAnime = anime;

    const CardClick = ()=>{
        navigate(`/anime/${anime.mal_id}`)
    }


    return(
        <div onClick={CardClick} className={`flex items-end w-[100%] h-[100%] rounded-sm `}
            style={{
            backgroundImage: `url(${anime.images.jpg.large_image_url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            }}>
            <div className="flex flex-col justify-between bg-transparent w-[100%] h-[48%] 
            text-white  font-600 px-4 
            g-gradient-to-b from-slate-950/60 to-slate-950/90 
            bg-gradient-to-r from-slate-950 via-slate-600/40 to-transparent
            drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                <h1 className=" w-[80%] line-clamp-4 text-sm text-orange-100">{eachAnime.title_english}</h1>
                <div className=" flex gap-4 my-4 max-[410px]:my-1">
                    <p className="text-yellow-500 text-sm ">Rating: {eachAnime.score}</p>
                </div>

            </div>
        </div>
    )

}