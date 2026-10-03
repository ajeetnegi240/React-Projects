


export default async function handler(req, res) {
  const { ranking_type = "all", limit = "10" } = req.query;

  try {
    const response = await fetch(
      `https://api.myanimelist.net/v2/anime/ranking?ranking_type=${encodeURIComponent(ranking_type)}&limit=${encodeURIComponent(limit)}`,
      {
        headers: {
          "X-MAL-CLIENT-ID": process.env.CLIENT_ID,
        },
      }
    );

    const data = await response.json();

    return res.status(response.status).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Failed to fetch anime from MyAnimeList",
    });
  }
}
