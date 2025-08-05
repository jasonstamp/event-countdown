// ===============================================
// EVENT CONFIGURATION - CUSTOMIZE THESE VALUES
// ===============================================

// Event name
const eventName = "My Monika Returning Home";

// Event date and time (YYYY-MM-DD HH:MM:SS format)
// You can also use formats like "2025-12-31 23:59:59" or "December 31, 2025 23:59:59"
const eventDateTime = "2025-08-09 09:30:00";

// Optional: Event image URL (replace with your own image)
const eventImageUrl = "images/image.png";

// ===============================================
// COUNTDOWN LOGIC - DO NOT MODIFY UNLESS NEEDED
// ===============================================

// DOM elements
const eventNameElement = document.getElementById('eventName');
const eventDateElement = document.getElementById('eventDate');
const eventStatusElement = document.getElementById('eventStatus');
const eventImageElement = document.getElementById('eventImage');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Initialize the app
function initializeApp() {
    // Set event name
    eventNameElement.textContent = eventName;
    
    // Set event image
    if (eventImageUrl) {
        eventImageElement.src = eventImageUrl;
        eventImageElement.alt = `${eventName} Image`;
    }
    
    // Parse the event date
    const targetDate = new Date(eventDateTime);
    
    // Display the formatted event date
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    eventDateElement.textContent = targetDate.toLocaleDateString('en-US', options);
    
    // Start the countdown
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Update countdown function
function updateCountdown() {
    const now = new Date().getTime();
    const targetDate = new Date(eventDateTime).getTime();
    const timeDifference = targetDate - now;
    
    if (timeDifference > 0) {
        // Calculate time units
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        
        // Update display with animation
        updateTimeUnit(daysElement, days);
        updateTimeUnit(hoursElement, hours);
        updateTimeUnit(minutesElement, minutes);
        updateTimeUnit(secondsElement, seconds);
        
        // Update status
        eventStatusElement.textContent = "Event is upcoming!";
        eventStatusElement.className = "event-status upcoming";
        
    } else {
        // Event has ended
        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";
        
        eventStatusElement.textContent = "Event has ended!";
        eventStatusElement.className = "event-status ended";
    }
}

// Update time unit with animation
function updateTimeUnit(element, value) {
    const formattedValue = value.toString().padStart(2, '0');
    
    if (element.textContent !== formattedValue) {
        element.classList.add('updating');
        element.textContent = formattedValue;
        
        setTimeout(() => {
            element.classList.remove('updating');
        }, 300);
    }
}


// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', initializeApp);

// Optional: Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add click effect to time units
    const timeUnits = document.querySelectorAll('.time-unit');
    timeUnits.forEach(unit => {
        unit.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Add keyboard shortcut to refresh countdown
    document.addEventListener('keydown', function(event) {
        if (event.key === 'r' || event.key === 'R') {
            updateCountdown();
        }
    });
});
