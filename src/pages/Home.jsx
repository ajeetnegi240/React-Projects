import { useEffect,useState } from 'react'
import {HeroSlider,MediaSlider} from "../components"
import {TopAnime} from "../components/AnimeReq"
import {Comment} from '../components'
import { Helmet } from 'react-helmet-async';

export default function Home(){
    const [TopAiringAnime, setTopAiringAnime] = useState([]);
    const [TopAnimes, setTopAnimes] = useState([]);
    const [TopPopularAnime, setTopPopularAnime] = useState([]);
    const [TopUpcomingAnime, setTopUpcomingAnime] = useState([]);



    useEffect(()=>{
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        const loadAnime = async () => {
            try {
            const airing = await TopAnime("airing", 10);
            airing?setTopAiringAnime(airing.data):null;



            await delay(1500);

            const top = await TopAnime(undefined, 10);
            top?setTopAnimes(top.data):null;

            await delay(1500);
            

            const popular = await TopAnime("bypopularity", 10);
            popular?setTopPopularAnime(popular.data):null;

            await delay(1500);


            const upcoming = await TopAnime("upcoming", 10);
            upcoming?setTopUpcomingAnime(upcoming.data):null;


            } catch (error) {
                console.log(error)
            }
        };
        loadAnime();


    },[])
    


    return(
        <>
        <Helmet>
            <title>Home</title>
            <meta name="description" content="Different Anime category "/>
            <link rel="canonical" href="/Home" />
        </Helmet>

            <div className="flex justify-center w-full  py-40  ">
                <HeroSlider cards={TopAiringAnime} heading={'Top Airing Anime' } />
            </div>
            <div className="flex w-full justify-center bg-transparent py-10">
                <MediaSlider cards={TopAnimes}  heading ={"Top Anime"} />
            </div>
            <div className="flex w-full justify-center bg-transparent py-10">
                <MediaSlider cards={TopUpcomingAnime}  heading ={"Upcoming Anime"} />
            </div>
            <div className="flex w-full justify-center bg-transparent py-10">
                <MediaSlider cards={TopPopularAnime}  heading ={"Top popular Anime"} />
            </div>
            <Comment/>
        </>
    
    )
}