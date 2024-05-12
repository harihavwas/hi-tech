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


// function submitForm() {
//     // Show the preload image
//     document.getElementById("preloadContainer").style.display = "block";
    
//     // Here you would typically submit your form or perform your desired action
//     // For demonstration purposes, let's simulate a delay with setTimeout
//     setTimeout(function() {
//       // Hide the preload image when done (replace this with your actual form submission logic)
//       document.getElementById("preloadContainer").style.display = "none";
//     }, 3000); // Replace 3000 with the duration of your form submission
//   }
  