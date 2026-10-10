import React from "react"
import { useEffect,useState } from 'react'
import {useSelector} from "react-redux"
import {MediaCard} from "../components"
import { Helmet } from 'react-helmet-async';


export default function SearchResult(){
    const results = useSelector((state) => state.anime.results);
    const error = useSelector((state)=> state.anime.error)
    const loading = useSelector((state) => state.anime.loading);
    return(
        <>
            <Helmet>
                    <title>SearchResults</title>
                    <meta name="description" content="Your search results "/>
                    <link rel="canonical" href="/SearchPage" />
            </Helmet>
            {error && (
                <div className=" flex w-[100vw]  min-h-screen bg-slate-600 justify-center ">
                    <div className="flex bg-slate-600 w-[100vw] h-[40vw] justify-center py-60 items-center">
                        <h1 className="text-3xl text-oliver-400">{error} </h1>
                    </div>
                </div>
            )}
            {loading && (
                <div className=" flex w-[100vw]  min-h-screen bg-slate-600 justify-center ">
                    <div className="flex bg-slate-600 w-[100vw] h-[40vw] justify-center py-60 items-center">
                        <h1 className="text-3xl text-oliver-400">Loading... </h1>
                    </div>
                </div>
            )}
            {results.length>0 &&(
                <div className="  w-[100vw]  min-h-screen    bg-slate-600 justify-center ">
                    <div className="flex bg-slate-600 w-[100vw]  justify-center pt-30 pb-10 items-center">
                        <h1 className="text-3xl text-oliver-400">Search Results... </h1>
                    </div>
                    <div className="flex justify-center  items-center p-4">
                        <div className="w-full grid min-[600px]:grid-cols-4 min-[500px]:grid-cols-3 min-[400px]:grid-cols-2  gap-3">
                            {results.map((anime)=>
                            <div key={anime.node.id} className="  bg-transparent aspect-9/16 
                            max-[400px]:aspect-9/14">
                                <MediaCard  anime={anime}/>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            { (error ==null)&& !loading&&results.length ==0 &&(
                <div className=" flex w-[100vw]  min-h-screen bg-slate-600 justify-center ">
                    <div className="flex bg-transparent w-[100vw] h-[40vw] justify-center py-60 items-center">
                        <h1 className="text-3xl text-oliver-400">No Anime Found </h1>
                    </div>
                    
                </div>
            )}

        </>
    )
}