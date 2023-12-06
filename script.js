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
