


export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({
      error: "Anime ID is required",
    });
  }

  try {
    const response = await fetch(
      `https://api.myanimelist.net/v2/anime/${id}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,media_type,status,genres,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,recommendations,studios,statistics`,
      {
        headers: {
          "X-MAL-CLIENT-ID": process.env.CLIENT_ID,
        },
      }
    );

    const data = await response.json();

    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch anime details",
    });
  }
}
