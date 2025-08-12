<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>🎶 Song Recommender</title>
  <link href="index.css" rel="stylesheet">
</head>
<body>
  <h1>🎶 Song Recommender</h1>
  <input type="text" id="searchBox" placeholder="Search category...">
  <div id="suggestions"></div>
  <div id="loading" style="display:none;">Loading recommendations...</div>
  <h2>Recommended Songs:</h2>
  <ul id="songs"></ul>

  <script>
    const categories = [
      "Happy", "Sad", "Romantic", "Party", "Workout", "Relax", "Road trip",
      "Chill", "Study", "Jazz", "Rock", "Pop", "Classical", "Hip hop", "EDM",
      "Rainy day", "Sunny day", "Evening", "Morning", "Meditation", "Dance",
      "Travel", "Nostalgia", "Love", "Heartbreak", "Focus", "Sleep", "Gaming",
      "Adventure", "Cooking", "Driving", "Festival", "Beach", "Winter",
      "Summer", "Spring", "Autumn", "Motivation", "Celebration", "Friendship", "Mass", "Telugu", "Tamil"
    ];

    const searchBox = document.getElementById("searchBox");
    const suggestionsDiv = document.getElementById("suggestions");
    const songsList = document.getElementById("songs");
    const loadingDiv = document.getElementById("loading");

    searchBox.addEventListener("input", () => {
      const query = searchBox.value.toLowerCase();
      suggestionsDiv.innerHTML = "";
      if (!query) return;
      const filtered = categories.filter(cat => cat.toLowerCase().includes(query));
      filtered.forEach(cat => {
        const div = document.createElement("div");
        div.textContent = cat;
        div.classList.add("suggestion");
        div.onclick = () => {
          searchBox.value = cat;
          suggestionsDiv.innerHTML = "";
          getRecommendations(cat);
        };
        suggestionsDiv.appendChild(div);
      });
    });

    searchBox.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        suggestionsDiv.innerHTML = "";
        getRecommendations(searchBox.value);
      }
    });

    async function getRecommendations(query) {
      loadingDiv.style.display = "block";
      // FIX: Changed to a relative path to make the request to the same origin.
      const res = await fetch(`/recommend?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      loadingDiv.style.display = "none";
      songsList.innerHTML = "";
      data.tracks.forEach(song => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${song.url}" target="_blank">${song.title} - ${song.artist}</a>`;
        songsList.appendChild(li);
      });
    }
  </script>
</body>
</html>
