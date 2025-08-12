# 🎵 Spotify Song Recommender

This is a lightweight Node.js + Express application that recommends songs using the Spotify Web API. Users can enter a mood, genre, or keyword to get a list of tracks with links to play them on Spotify.

---

## 🚀 Features

- 🔍 Search for songs based on a query (e.g., "happy", "rock", "chill")
- 🎧 Returns top 5 matching tracks with title, artist, and Spotify link
- 🌐 RESTful API endpoint: `/recommend?q=your_query`
- 📁 Serves static frontend from the `public/` folder
- 🔐 Uses Spotify Client Credentials Flow for authentication

---

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Spotify Web API Node](https://github.com/thelinmichael/spotify-web-api-node)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [node-fetch](https://www.npmjs.com/package/node-fetch)

---

## 📦 Installation

1. **Clone the repository**
   bash
   git clone https://github.com/your-username/spotify-recommender.git
   cd spotify-recommender
2. **Install Dependencies**
    bash
    npm install
3. **Create an .env file**
    SPOTIFY_CLIENT_ID=your_spotify_client_id
    SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
4. **Start Server**
    node app.js
5. **Visit the broswer**
    http://localhost:3000
    
