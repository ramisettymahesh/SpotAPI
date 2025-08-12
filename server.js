import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import SpotifyWebApi from "spotify-web-api-node";


dotenv.config();
const app = express();
const PORT = 3000;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID || "",
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET || "",
});

async function getSpotifyToken() {
  const data = await spotifyApi.clientCredentialsGrant();
  spotifyApi.setAccessToken(data.body.access_token);
}

app.use(express.static("public"));

app.get("/recommend", async (req, res) => {
  try {
    const query = req.query.q || "happy";
    await getSpotifyToken();

    const results = await spotifyApi.searchTracks(query, { limit: 5 });
    const tracks = results.body.tracks.items.map(track => ({
      title: track.name,
      artist: track.artists.map(a => a.name).join(", "),
      url: track.external_urls.spotify
    }));

    res.json({ tracks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Song recommendation failed" });
  }
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
