import React from "react"
import {useEffect,useState} from "react"
import {useParams} from "react-router-dom"
import {AnimeDetail} from "../components/AnimeReq"
import {Comment} from '../components'
import { Helmet } from 'react-helmet-async';

function ShowAnime(){
    const {id} = useParams()
    const [CurrentAnime,setCurrentAnime] = useState(null)
    const [Pictures,setPictures] = useState(null)
    const [Characters,setCharacters] = useState(null)
    
    useEffect(()=>{
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        const GetData =async()=>{
            try{
                    const result = await AnimeDetail(id)
                    setCurrentAnime(result.data)

                    await delay(1500)

                    const pic =`${id}/pictures`
                    const pics = await AnimeDetail(pic)
                    setPictures(pics.data)

                    await delay(1500)
                    
                    const char =`${id}/characters`
                    const chars = await AnimeDetail(char)
                    setCharacters(chars.data)

                    await delay(1500)


            }catch (error){
                    console.log(error)
            }}
        GetData();
            
    },[id])
    const gototrailer = ()=>{
        console.log(CurrentAnime)
        if (CurrentAnime.trailer.url){
            window.open(CurrentAnime.trailer.url,"_blank","noopener,noreferrer");
            
        }else{
            alert("No trailer available!")
        }
    }

    return(
        <>
            <Helmet>
                    <title>Anime</title>
                    <meta name="description" content="An Anime in detail "/>
                    <link rel="canonical" href="/AnimePage" />
            </Helmet>
            
            <div className="  w-[100vw]  h-full    justify-center " >
                <div className="flex bg-slate-600 w-[100vw]  justify-center pt-30 pb-10 items-center">
                    <h1 className="text-3xl text-oliver-400">Anime Detail </h1>
                    </div>
                <div className="flex justify-center items-center p-4 ">
                    {CurrentAnime && 
                        (<div> 
                            <div  className={`flex items-end w-[100%] h-[100%] 
                                            max-[640px]:bg-[image:var(--backgroundImageLarge)] max-[640px]:bg-center
                                            min-[640px]:bg-[image:var(--backgroundImageLarge)] 
                                            min[640px]:bg-no-repeat min-[640px]:cover
                                            rounded-sm  `}
                                style={{
                                "--backgroundImageLarge": `url(${CurrentAnime.images.jpg.large_image_url})`,
                                "--backgroundImageSmall": `url(${CurrentAnime.images.jpg.small_image_url})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: 'cover',
                                }}>
                                <div className="bg-transparent w-[100%] 
                                text-white  font-600 px-4 
                                g-gradient-to-b from-slate-950/60 to-slate-950/90 
                                bg-gradient-to-r from-slate-950 via-slate-600/40 to-transparent
                                drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]
                                pt-8 pb-8">
                                    <h1 className=" w-[35%] text-2xl text-orange-300">{CurrentAnime.title_english}</h1>
                                    <p className={`text-sm w-[40%] 
                                    max-[640px]:hidden 
                                    overflow-hidden`}>{CurrentAnime.synopsis}</p>
                                    <p className="text-yellow-500">Episodes: {CurrentAnime.episodes}</p>
                                    <p className="text-yellow-500">Duration: {CurrentAnime.duration}</p>
                                    <p className="text-yellow-500">Rank: {CurrentAnime.rank}</p>
                                    <p className="text-yellow-500">Popularity: {CurrentAnime.popularity}</p>
                                    <div className=" flex gap-4 my-4 ">
                                        <p className="text-yellow-500">Rating: {CurrentAnime.score}</p>
                                        <button className="bg-transparent  border-2 border-orange rounded-lg px-1 hover:bg-orange-500" onClick={gototrailer}
                                        >
                                            Trailer
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <p className={`text-sm w-[90%] m-5 min-[640px]:hidden
                                overflow-hidden`}>{CurrentAnime.synopsis}
                            </p>
                            {Pictures && 
                                (<div className="flex justify-center items-center p-8">
                                    <h1 className="text-2xl text-oliver-400">Anime Images </h1>
                                    <div className="grid grid-cols-4 gap-3">
                                        {Pictures.map((imgUrl,index)=>
                                            <div key={index} className="  bg-transparent aspect-square">
                                                <img src={imgUrl} alt="" 
                                                className=" w-[100%] h-[100%]"/>
                                            </div>)}
                                    </div>
                                </div>)}

                            {Characters &&
                                (<div className=" justify-center items-center p-8">
                                    <h1 className="text-2xl text-oliver-400 p-3">Characters </h1>
                                    <div className="grid sm:grid-cols-4 grid-cols-2 gap-3">
                                        {Characters.map((item,index)=>
                                            <div key={index} className={`flex items-end w-[100%] h-[100%] aspect-9/16 rounded-sm `}
                                                style={{
                                                backgroundImage: `url(${item.character.images.jpg.image_url})`,
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: 'cover',
                                                }}>
                                                <div className="flex flex-col justify-between bg-transparent w-[100%] h-[48%] 
                                                text-white  font-600 px-4 
                                                g-gradient-to-b from-slate-950/60 to-slate-950/90 
                                                bg-gradient-to-r from-slate-950 via-slate-600/40 to-transparent
                                                drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                                                    <h1 className=" w-[80%] line-clamp-4 text-sm text-orange-100">{item.character.name}</h1>
                                                    <div className=" flex gap-4 my-4 ">
                                                        <p className="text-yellow-500 text-sm">{item.role}</p>
                                                    </div>

                                                </div>
                                            </div>)}
                                    </div>
                                </div>)}
                            
                        </div> )}
                </div>
                <Comment/>
            </div>
        </>
    )

}

export default ShowAnime;