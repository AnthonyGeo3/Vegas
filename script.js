function updateCountdown() {
    const tripDate = new Date('2024-04-02');
    const now = new Date();
    const difference = tripDate - now;

    const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minsLeft = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const secsLeft = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerText = daysLeft + " days " + hoursLeft + " hours " + minsLeft + " minutes " + secsLeft + " seconds until Las Vegas!";
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call
updateCountdown();

function fetchGoogleImage(searchTerm) {
    const apiKey = 'YAIzaSyAXFVj8hbJYaIiqPL6E8Cv0w3Zj0R9FI0s';
    const searchEngineId = 'd5af8dade41574f17';
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&searchType=image&q=${encodeURIComponent(searchTerm)}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Logic to handle the response and extract the image URL
        const imageUrl = data.items[0].link;
        document.body.style.backgroundImage = `url('${imageUrl}')`;
      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
  }