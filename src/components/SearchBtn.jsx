import React from 'react';
import { Search,X } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import {ThisAnime} from "./AnimeReq"
import { useDispatch } from "react-redux";
import {setResults,setError} from "../store/animeslice"
import { useEffect,useState } from 'react'







function SearchBtn({size=5,height="",width="",opacity=100,}) {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [searchClicked,setSearchClicked] = React.useState(false)
    const [query,setQuery] = React.useState("")

    const search = async(anime)=>{
        try{
            setSearchClicked(false)

            if (anime.length>0){
                const result = await ThisAnime(anime)
                
                if ( result.data) {
                    const {data} = result
                    console.log(result)
                    dispatch(setResults(data))
                    dispatch(setError(null))

                }
                if (result.status>=400){
                    dispatch(setError('Something Went Wrong'))
                    dispatch(setResults([]))
                }
                navigate('/SearchPage')
                return
            }
        }catch(error){
            dispatch(setError(error.message))
        }
    }


    const CrossIcon = () => {
        return (
            <X />
        );
    };

    const SearchIcon = () => {
        return (
            <Search />
        );
    };

    return(
        <>
            <div className={`flex ${height? `h-${height}`:'' } ${width? `w-${width}`:""} bg-slate-950/${opacity}`} >
                <form onSubmit={search} className="flex">
                    <div className="flex gap-1 bg-transparent
                    border-2 border-gray-400 rounded-2xl py-1 px-1">  
                        {SearchIcon()}             
                        <input type="search" 
                        placeholder="Search"
                        size={size}
                        className="bg-transparent focus:outline-hidden 
                        text-white transition ease-out duration-200 
                        hover:scale-110"
                        readOnly
                        onClick={()=>{setSearchClicked(true)}}
                        />
                    </div>
                </form>
            </div>

            {searchClicked && (
                <div className={`flex justify-center items-center w-full h-full  fixed top-0 right-0 z-[9999] bg-slate-950/60`} >
                    <div className="flex ">
                        <form onSubmit={(e)=>{e.preventDefault();search(query)}} className="flex">
                            <div className="flex gap-4 bg-transparent bg-black border-2 border-gray-400 rounded-2xl py-1 px-1">  
                                {SearchIcon()}             
                                <input type="search" 
                                placeholder="Search"
                                size='30'
                                className="bg-transparent focus:outline-hidden 
                                text-white transition ease-out duration-200 hover:scale-110"
                                onChange={(e)=>setQuery(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setSearchClicked(false)}
                                    className="text-white px-2"
                                    >
                                        ✕
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}



export default SearchBtn;
