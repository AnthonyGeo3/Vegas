function updateCountdown() {
    const tripDate = new Date('2024-04-02');
    const now = new Date();
    const difference = tripDate - now;

    const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minsLeft = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const secsLeft = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = daysLeft + " days " + hoursLeft + " hours " + minsLeft + " minutes " + secsLeft + " seconds <br> until Las Vegas!";
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call
updateCountdown();

function fetchGoogleImage(searchTerm) {
      // Check if today's image is already set
    const today = new Date().toDateString();
    const storedDate = localStorage.getItem('backgroundSetDate');
    const storedImageUrl = localStorage.getItem('backgroundImageUrl');

    if (storedDate === today && storedImageUrl) {
        // Use the stored image URL
        document.body.style.backgroundImage = `url('${storedImageUrl}')`;
        return; // No need to fetch a new image
    }

    const apiKey = 'AIzaSyAXFVj8hbJYaIiqPL6E8Cv0w3Zj0R9FI0s';
    const searchEngineId = 'd5af8dade41574f17';
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&searchType=image&q=${encodeURIComponent(searchTerm)}`;
  
    fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.items && data.items.length > 0) {
        // Logic to handle the response and extract the image URL
        const imageUrl = data.items[0].link;

        // Update the background and store the new image URL
        document.body.style.backgroundImage = `url('${imageUrl}')`;

        // Store the date and URL in local storage
        localStorage.setItem('backgroundSetDate', today);
        localStorage.setItem('backgroundImageUrl', imageUrl);
      } else {
        console.error('No image results found');
      }
    })
    .catch(error => {
      console.error('Error fetching image:', error);
    });
}

function updateBackground() {
    const searchTerms = [ 
        'Las Vegas Strip',
        'The Venetian Resort',
        'Bellagio Fountains',
        'Las Vegas Casino',
        'The Venetian Gondola Rides',
        'Las Vegas Neon Signs',
        'The Venetian Grand Canal Shoppes',
        'Fremont Street Experience',
        'Las Vegas Nightlife',
        'The Venetian Luxury Suite',
        'High Roller Ferris Wheel',
        'Las Vegas Shows',
        'The Venetian Pool Deck',
        'Las Vegas Wedding Chapel',
        'The Venetian Poker Room',
        'Las Vegas Buffets',
        'The Venetian Casino Floor',
        'Las Vegas Concerts',
        'The Venetian Hotel Lobby',
        'Las Vegas Helicopter Tours',
        'The Venetian Fine Dining',
        'Las Vegas Theme Hotels',
        'The Venetian Art Installations',
        'Las Vegas Desert Landscapes',
        'The Venetian Shopping Experience',
        'Las Vegas Slot Machines',
        'The Venetian Madame Tussauds',
        'Las Vegas Sportsbooks',
        'The Venetian Canyon Ranch Spa',
        'Las Vegas Fireworks'
    ]
  const randomIndex = Math.floor(Math.random() * searchTerms.length);
  const randomTerm = searchTerms[randomIndex];
  fetchGoogleImage(randomTerm);
}

// Run this once per day
const lastBackgroundUpdate = localStorage.getItem('backgroundSetDate');
const today = new Date().toDateString();
if (lastBackgroundUpdate !== today) {
  updateBackground();
}

//  const randomTerm = searchTerms[Math,floor(Math.random()*searchTerms.length)];
// fetchGoogleImage(randomTerm);
