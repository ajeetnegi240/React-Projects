import React from "react";
import {useNavigate} from "react-router-dom"

export default function HeroCard({anime}){
    const navigate = useNavigate()
    const eachAnime = anime;

    const CardClick = ()=>{
        navigate(`/anime/${anime.mal_id}`)
    }


    return(
        <div onClick={CardClick} className={`flex items-end w-[100%] h-[100%] rounded-sm  `}
            style={{
            backgroundImage: `url(${anime.images.jpg.large_image_url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            }}>
            <div className="bg-transparent w-[100%] sm:h-[68%] [80%]
            text-white  font-600 px-4 
            g-gradient-to-b from-slate-950/60 to-slate-950/90 
            bg-gradient-to-r from-slate-950 via-slate-600/40 to-transparent
            drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                <h1 className=" w-[35%] sm:text-2xl text-lg text-orange-300">{eachAnime.title_english}</h1>
                <p className="text-sm w-[40%] h-[30%] md:h-[25%]
                lg:line-clamp-4 md:line-clamp-3 max-[640px]:line-clamp-2
                overflow-hidden">{eachAnime.synopsis}</p>
                <div className=" flex gap-4 my-4 ">
                    <p className="text-yellow-500">Rating: {eachAnime.score}</p>
                    {/* <button className="bg-transparent  border-2 border-orange rounded-lg px-1 hover:bg-orange-500">Trailer</button> */}
                </div>

            </div>
        </div>
    )

}