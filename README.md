# JeffTimeBooker 📅

A humorous, fully functional static HTML/JavaScript booking page that systematically rejects all meeting attempts after a fake real-time schedule check. Users may appeal rejections through an appeal form, which undergoes a fake AI analysis before being rejected again with a humorous final message.

## 🎯 Try It Now

**Live Demo:** [thestamp.github.io/JeffTimeBooker](http://thestamp.github.io/JeffTimeBooker/)

Experience the full booking prank journey—see if you can beat the system! (Spoiler: you can't.)

## Features ✨

- **Professional Calendar Interface** - Clean date picker with month navigation (future dates only)
- **Time Slot Selection** - Business hours (9 AM - 5 PM) with deterministic booked slots
- **Consistent Fake Bookings** - Same booked slots appear on refresh for each date
- **Rich Animations** - Smooth transitions and loading states
- **Fake Booking Processing** - Professional-looking schedule check (2-4 seconds)
- **Humorous Rejections** - Randomized rejection reasons (easily customizable)
- **Appeal System** - Multi-field form for users to plead their case
- **Fake AI Analysis** - Simulated GPT-4 analysis with fake metrics (2-3 seconds)
- **Double Rejection** - AI also rejects appeals with humor
- **Email Integration** - Pre-populated email with all meeting details as final CTA
- **Collapsible Prank Reveal** - Click "Try Again" to reveal it was all a joke
- **Data Preservation** - User info retained if they try different time
- **Fully Responsive** - Works on desktop, tablet, and mobile
- **Self-Contained** - Single HTML file, no external dependencies

## Quick Start 🚀

### Use as-is (for Jeff)
```bash
# Just open in your browser
open index.html
```

### Create Your Own Version

**Option 1: Fork on GitHub**
1. Visit [github.com/thestamp/JeffTimeBooker](https://github.com/thestamp/JeffTimeBooker)
2. Click "Fork" button
3. Clone to your machine: `git clone https://github.com/YOUR_USERNAME/JeffTimeBooker.git`
4. Edit `config.js` with your details (see below)
5. Open `index.html` in your browser
6. Deploy to GitHub Pages or share the file

**Option 2: Direct Download & Edit**
1. Download the files
2. Edit `config.js` in any text editor
3. Open `index.html` in your browser
4. Share with friends!

## Files 📁

- **index.html** - Main application (HTML + embedded CSS + JavaScript)
- **config.js** - Configuration file with owner details
- **REQUIREMENTS.md** - Full project requirements and specifications

**All customizable content is in `config.js`. No need to edit HTML!**

### Basic Settings
```javascript
const CONFIG = {
  ownerName: "Jeff",                    // Your name
  ownerEmail: "jeff@example.com",       // Email for meeting details
  companyName: "The Schedule Defense Initiative",
  timezone: "America/New_York",
  rejectionIntensity: "normal",         // "mild", "normal", "savage"
  bookingProcessingDelay: 3000,         // Booking check delay (ms)
  aiAnalysisDelay: 2500,                // AI analysis delay (ms)
};
```

### Customizable Messages

**Booking Rejection Reasons** (shown when booking is rejected)
```javascript
rejectionReasons: [
  "Unfortunately, that time conflicts with Jeff's daily coffee ritual (non-negotiable).",
  "Availability constraints detected: Jeff has scheduled this slot for strategic thinking.",
  // Add or edit as many as you want...
]
```

**Processing Details** (shown while "checking calendar")
```javascript
processingDetails: [
  "Scanning 247 calendar entries...",
  "Cross-referencing timezone conflicts...",
  // Add custom messages...
]
```

**AI Analysis Results** (shown after appeal is analyzed)
```javascript
aiAnalysisResults: [
  "After careful analysis, your appeal demonstrates 73% sincerity, but Jeff's schedule analysis indicates a 0% probability of availability...",
  // Add funny AI reasoning...
]
```

**Confidence Scores**
```javascript
confidenceScores: [
  "99.2%",
  "99.7%",
  "100%",
  // Add more scores...
]
```

## How It Works 🔄

1. User lands on booking page
2. Selects future date and time (some slots are "booked")
3. Enters name, email, phone, meeting description
4. Reviews booking details
5. Clicks "Confirm" → fake processing occurs
6. Gets rejected with humorous reason
7. Can click "Try Different Time" (keeps user info) or "Submit Appeal"
8. If appealing: fills form, AI "analyzes" (2-3 seconds)
9. Appeal gets rejected by AI with funny reasoning
10. Final screen shows joke reveal on "Try Again" button
11. User can send meeting details via email (pre-populated!)

## Browser Compatibility 🌐

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Mobile browsers ✅

## Accessibility ♿

- Semantic HTML structure
- Keyboard navigation support
- ARIA labels for screen readers
- Color contrast compliance (WCAG AA)
- Responsive design

## No External Dependencies 📦

This project is completely self-contained:
- No CDN required
- No npm packages
- No build step
- Just HTML, CSS, and vanilla JavaScript

## Sharing Your Version 👥

Once you've customized it:
1. Deploy to GitHub Pages or your own hosting
2. Share the link with friends/coworkers
3. Watch their reactions! 😂
4. Reveal the prank in the "Additional Details" section

## Tips for Maximum Humor 😄

- **Customize rejection reasons** to reference inside jokes
- **Adjust processing delays** if you want faster/slower checking
- **Make AI analysis funny** - the more corporate-speak, the better
- **Use specific details** about why you're actually unavailable
- **Share unaware** - don't tell people it's a prank beforehand!

## Deploy Your Own 🚀

### GitHub Pages (Free!)
1. Fork the repo on GitHub
2. Go to Settings → Pages
3. Set source to `main` branch
4. Your site is live at `https://YOUR_USERNAME.github.io/JeffTimeBooker/`
5. Share the link!

### Other Hosting
- **Netlify** - Drag and drop files
- **Vercel** - Connect to GitHub
- **AWS S3 + CloudFront** - For scale
- **Any web host** - Just upload files

---

**Live Demo:** [thestamp.github.io/JeffTimeBooker](http://thestamp.github.io/JeffTimeBooker/)  
**Repository:** [github.com/thestamp/JeffTimeBooker](https://github.com/thestamp/JeffTimeBooker)  
**Created by:** [github.com/thestamp](https://github.com/thestamp)
