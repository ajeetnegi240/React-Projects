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
            setTopAiringAnime(airing.data);



            await delay(1500);

            const top = await TopAnime(undefined, 10);
            setTopAnimes(top.data);

            await delay(1500);
            

            const popular = await TopAnime("bypopularity", 10);
            setTopPopularAnime(popular.data);

            await delay(1500);


            const upcoming = await TopAnime("upcoming", 10);
            setTopUpcomingAnime(upcoming.data);


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