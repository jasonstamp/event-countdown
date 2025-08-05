# Event Countdown

A simple, clean, and modern web application that displays a real-time countdown to a specified event. Built with HTML, CSS, and vanilla JavaScript.

## Features

- **Real-time Countdown** - Shows days, hours, minutes, and seconds until your event
- **Modern Design** - Clean, responsive interface with gradient backgrounds and glassmorphism effects
- **Responsive Layout** - Works perfectly on desktop, tablet, and mobile devices
- **Event Image Display** - Customizable event image with hover effects
- **Easy Configuration** - Simple variables to customize event name, date, and image
- **Status Indicator** - Shows whether the event is upcoming or has ended
- **Smooth Animations** - Animated transitions and hover effects for a polished experience

## Quick Start

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Customize your event by editing the variables in `script.js`

## Customization

To customize the countdown for your event, edit these variables at the top of `script.js`:

```javascript
// Event name
const eventName = "Your Event Name";

// Event date and time (YYYY-MM-DD HH:MM:SS format)
const eventDateTime = "2025-12-31 23:59:59";

// Optional: Event image URL (replace with your own image)
const eventImageUrl = "images/your-image.png";
```

## File Structure

```
event-countdown/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript countdown logic
├── favicon.png         # Favicon for the app
├── images/
│   └── image.png      # Event image
└── README.md          # This file
```

## Features in Detail

### Countdown Display
- **Days**: Shows the number of days remaining
- **Hours**: 24-hour format countdown
- **Minutes**: Real-time minute updates
- **Seconds**: Live second-by-second countdown

### Responsive Design
- **Desktop**: Full 4-column layout with large countdown displays
- **Tablet**: 2-column grid layout for optimal viewing
- **Mobile**: Compact 2-column grid with adjusted font sizes

### Visual Effects
- Gradient background with modern color scheme
- glassmorphism card design with backdrop blur
- Hover animations on countdown units and images
- Smooth transitions and scaling effects

## Browser Compatibility

This app works in all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is open source and available under the [MIT License](LICENSE).