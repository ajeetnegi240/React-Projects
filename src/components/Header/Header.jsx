import React from "react";
import {useState} from "react";
import {SearchBtn} from '../index';
import { useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate()
    const navItems=[
    {
        name:'Home',
        path:'/',
        active:true,
    },
    {
        name:"Anime",
        path:"/AnimeGenre",
        active:"false",
    },
    // {
    //     name:"Watch Available",
    //     path:"/WatchAvailable",
    //     active:"false",
    // },
    ]

    return(
        <>
            <div className="flex justify-center fixed top-0  z-[9999] w-full bg-black ">
                <div className="flex sm:w-8/10 w-full gap-1 bg-transparent justify-between px-2 py-5">
                    <h1 className="text-white md:text-3xl sm:text-xl text-lg">AniCine</h1>
                    <div className="flex sm:gap-4 gap-2 bg-transparent  text-white">
                        <ul className="flex sm:gap-2 gap-1">
                            {navItems.map((item)=>
                            <li key={item.name}>
                                <button type="button" 
                                className="bg-transparent outline-black px-1 
                                md:text-2xl sm:text-lg text-sm rounded-sm 
                                hover:bg-orange-300/40"
                                onClick={()=>{navigate(item.path)}}
                                >{item.name}</button>
                            </li>)}
                        </ul>
                        <SearchBtn/>
                    </div>
                    
                    
                </div> 
            </div>
        </>
        
    )
}

export default Header;