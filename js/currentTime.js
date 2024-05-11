function updateTime() {
    var now = new Date();
    var dateString = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    var timeString = now.toLocaleTimeString('en-US', { hour12: false });

    // Display the time and date in the element with id="current-time"
    document.getElementById('current-time').textContent = dateString + ' ' + timeString;
}

// Update the time every second
setInterval(updateTime, 1000);

// Run updateTime initially to avoid delay
updateTime();
