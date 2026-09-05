import React from "react"
import { useEffect,useState } from 'react'
import {useSelector} from "react-redux"
import {MediaCard} from "../components"
import { Helmet } from 'react-helmet-async';

export default function SearchResult(){
    const results = useSelector((state) => state.anime.results);
    const error = useSelector((state)=> state.anime.error)
    return(
        <>
            <Helmet>
                    <title>SearchResults</title>
                    <meta name="description" content="Your search results "/>
                    <link rel="canonical" href="/SearchPage" />
            </Helmet>
            {error && (
                <div className=" flex w-[100vw]  h-[100vh]  justify-center ">
                    <div className="flex bg-slate-600 w-[100vw] h-[40vw] justify-center py-80 items-center">
                        <h1 className="text-3xl text-oliver-400">{error} </h1>
                    </div>
                </div>
            )}
            {results.length>0 &&(
                <div className="  w-[100vw]  h-full    justify-center ">
                    <div className="flex bg-slate-600 w-[100vw]  justify-center pt-30 pb-10 items-center">
                        <h1 className="text-3xl text-oliver-400">Search Results... </h1>
                    </div>
                    <div className="flex justify-center items-center p-4">
                        <div className="grid grid-cols-4 gap-3">
                            {results.map((anime)=>
                            <div key={anime.mal_id} className="  bg-transparent aspect-square">
                                <MediaCard  anime={anime}/>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            { (error ==null)&& results.length ==0 &&(
                <div className=" flex w-[100vw]  h-[100vh] justify-center ">
                    <div className="flex bg-transparent w-[100vw] h-[40vw] justify-center py-80 items-center">
                        <h1 className="text-3xl text-oliver-400">No Anime Found </h1>
                    </div>
                    
                </div>
            )}

        </>
    )
}