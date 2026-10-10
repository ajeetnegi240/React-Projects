import {useState,useEffect} from "react"
import {TopAnime} from "../components/AnimeReq"
import {useNavigate} from "react-router-dom"
import {AnimeDetail} from "../components/AnimeReq" 


export default function AnimeGenre(){
    const navigate = useNavigate()
    const [selectedGenre,setSelectedGenre] = useState("Genre")
    const [selectedYear,setSelectedYear] = useState("2026")
    const [selectedSeason,setSelectedSeason] = useState("winter")
    const [result,setResult] =useState([])
    const [results,setResults] =useState([])
    const [loading,setLoading] =useState(true)


    const genres =[ "Genre",
                    "Action",
                    "Adventure",
                    "Comedy",
                    "Drama",
                    "Fantasy",
                    "Horror",
                    "Romance",
                    "Sci-Fi",
                    "Slice of Life",
                    "Sports",
                    "Supernatural",
                    "Thriller",]

    const currentYear = new Date().getFullYear();
    const years = Array.from(
        { length: currentYear - 2000 + 1 },
        (_, i) => currentYear - i
        );

    const seasons =[
        "Seasons",'winter','summer','spring','fall'
    ]

    const filterItems = [
        {
            id:1,
            content:<select name="Genres" value={selectedGenre} 
                  className="rounded-lg border text-white border-gray-600 bg-gray-900 
                  px-4 py-2 text-white outline-none focus:border-blue-500"
                onChange={(e)=>{setSelectedGenre(e.target.value)}}>
                {genres.map((item)=>(
                    <option  key={item} value={item}>{item}</option>
                ))}   
            </select>
        },
        {
            id:2,
            content:<select name="Year" value={selectedYear}
                  className="rounded-lg text-white border border-gray-600 bg-gray-900
                   px-4 py-2 text-white outline-none focus:border-blue-500" 
                onChange={(e)=>{setSelectedYear(e.target.value)}}>
                {years.map((item)=>(
                    <option key={item} value={item}>{item}</option>
                ))}
                </select>
        },
        // {
        //     id:3,
        //     content:<select name="Season"      
        //         className="rounded-lg text-white border border-gray-600 
        //         bg-gray-900 px-4 py-2 text-white outline-none focus:border-blue-500"
        //         value={selectedSeason} onChange={(e)=>{setSelectedSeason(e.target.value)}}>
        //         {seasons.map((item)=>(
        //             <option  key={item} value={item}>{item}</option>
        //         ))}
        //         </select>
        // }
    ] 
     const CardClick = (anime)=>{
        navigate(`/anime/${anime.id}`)
    }

    useEffect(()=>{
        try{
            const getAnime= async()=>{
            const response = await TopAnime("all", 100);
            response?setResults(response.data):null
            }
            getAnime()
        }catch(error){
            console.log(error)
        }
    
    },[])


    useEffect(()=>{
        
        setResult([])
        {results?.map((anime)=>{
            setLoading(true)
            const eachAnime=async()=>{
                try{
                    console.log(selectedGenre)
                    const data = await AnimeDetail(anime.node.id)
                    if (data?.start_season.year==selectedYear ){
                            if (selectedGenre == "Genre"){
                                result.push(data)
                                setResult(result)
                                console.log("selectedGenre is genre")
                            }else{
                                {data.genres.map((genre)=>{
                                    if (genre.name==selectedGenre){
                                        result.push(data)}
                                        setResult(result)
                                    }
                                )}
                                
                            }
                            }
                }catch(error){
                    console.log(error)
                }finally{
                    setLoading(false)
                }
            }
            eachAnime()
            console.log(result)
        })}
        
        
    },[selectedGenre,selectedYear,selectedSeason,results])

    return(
        <div>
        <div className="  w-[100vw]  min-h-screen    bg-slate-600 justify-center ">
            <div className="flex   sm:w-8/10 w-full gap-3 pt-21 bg-slate-900
              px-2 py-5">
                <ul className="flex sm:gap-2 gap-1">
                    {filterItems.map((item)=>
                    <li key={item.id}>
                            {item.content}
                    </li>)}
                </ul>
            </div>

            {result?.length>0 &&(
                            <div className="  w-[100vw]  min-h-screen    bg-slate-600 justify-center ">
                                <div className="flex justify-center  items-center p-4">
                                    <div className="w-full grid min-[600px]:grid-cols-4 min-[500px]:grid-cols-3 min-[400px]:grid-cols-2  gap-3">
                                        {result.map((anime)=>

                                        <div key={anime.id} className="  bg-transparent aspect-9/16 
                                        max-[400px]:aspect-9/14">
                                            <div onClick={()=>(CardClick(anime))} className={`flex items-end w-[100%] h-[100%] rounded-sm `}
                                                style={{
                                                backgroundImage: `url(${anime.main_picture.medium})`,
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: 'cover',
                                                }}>
                                                <div className="flex flex-col justify-between bg-transparent w-[100%] h-[48%] 
                                                text-white  font-600 px-4 
                                                g-gradient-to-b from-slate-950/60 to-slate-950/90 
                                                bg-gradient-to-r from-slate-950 via-slate-600/40 to-transparent
                                                drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                                                    <h1 className=" w-[80%] line-clamp-4 text-sm text-orange-100">{anime.title}</h1>
                                                    <div className=" flex gap-4 my-4 max-[410px]:my-1">
                                                        <p className="text-yellow-500 text-sm ">Rating: {anime.mean}</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                )}


            { !loading && result?.length ==0 &&(
                <div className=" flex w-[100vw] min-h-screen bg-slate-600 justify-center ">
                    <div className="flex bg-transparent w-[100vw] h-[40vw] justify-center py-60 items-center">
                        <h1 className="text-3xl text-oliver-400">No Anime Found </h1>
                    </div>
                    
                </div>
            )}
            { loading && (
                <div className=" flex w-[100vw]  min-h-screen bg-slate-600 justify-center ">
                    <div className="flex bg-slate-600 w-[100vw] h-[40vw] justify-center py-60 items-center">
                        <h1 className="text-3xl text-oliver-400">Loading... </h1>
                    </div>
                </div>
            )}
        </div>
        </div>
    )
}