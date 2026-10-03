


export default async function handler(req, res) {
  const { q, limit = "15" } = req.query;

  if (!q) {
    return res.status(400).json({
      error: "Search query is required",
    });
  }

  try {
    const response = await fetch(
      `https://api.myanimelist.net/v2/anime?q=${encodeURIComponent(q)}&limit=${encodeURIComponent(limit)}`,
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
      error: "Failed to search anime",
    });
  }
}
