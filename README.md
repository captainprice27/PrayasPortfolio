# Prayas Mazumder - Portfolio

A professional, modern portfolio website built with the MERN stack (MongoDB, Express, React, Node.js). Features a stunning dual-theme design with smooth animations and an artistic journey timeline.

---

## ✨ Features

### 🎨 Design & UI
- **Dual Theme System**: Toggle between Light (white + light red/green) and Dark (black + blue/yellow) modes
- **Modern Typography**: Uses Google Fonts (Inter & Outfit) for a clean, professional look
- **Smooth Animations**: Framer Motion powered animations throughout
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices

### 📄 Sections
| Section | Description |
|---------|-------------|
| **Hero** | Animated landing with gradient text and floating background elements |
| **About** | Profile image, bio, and quick facts with decorative elements |
| **Skills** | Categorized skills with animated progress bars |
| **Journey** | Artistic timeline with fluid connections and glowing nodes |
| **Projects** | Large cards (2 per row) with images, tech tags, and GitHub/demo links |
| **Analytics** | Dashboard tracking visits with location and detailed stats |
| **Contact** | Contact form with social links and info cards |
| **Footer** | Branding, social links, and back-to-top button |

### 🛠️ Technical
- **Frontend**: React 18, Vite, Framer Motion, React Icons
- **Backend**: Express.js, MongoDB with Mongoose
- **Styling**: Pure CSS with CSS Custom Properties (Variables)
- **Theme Persistence**: Theme preference saved in localStorage

---

## 📁 Project Structure

```
portfolio/
├── backend/                    # Express API
│   ├── config/db.js           # MongoDB connection
│   ├── data/portfolioData.js  # Your portfolio content (EDIT THIS!)
│   ├── routes/api.js          # API endpoints
│   ├── server.js              # Express server
│   └── .env                   # Environment variables
│
├── frontend/                   # React App
│   ├── public/
│   │   └── assets/            # Images, logos, project screenshots
│   ├── src/
│   │   ├── components/        # All React components
│   │   ├── context/           # Theme context
│   │   └── styles/            # Global CSS & variables
│   └── index.html
│
├── README.md                   # This file
└── Run.md                      # Setup instructions
```

---

## 🔧 Customization

### Files to Update with Your Information

| File | What to Update |
|------|----------------|
| `backend/data/portfolioData.js` | Personal info, skills, journey, projects |
| `frontend/src/components/Hero.jsx` | Social links |
| `frontend/src/components/About.jsx` | About paragraphs, facts |
| `frontend/src/components/Skills.jsx` | Technical skills |
| `frontend/src/components/JourneyTimeline.jsx` | Education & work history |
| `frontend/src/components/Projects.jsx` | Project details |
| `frontend/src/components/Contact.jsx` | Contact info |

### Assets to Replace

Replace the placeholder SVG files in `frontend/public/assets/`:

- `/assets/images/profile-photo.jpg` - Your photo
- `/assets/logos/school-logo.png` - Your school logo  
- `/assets/logos/iiest-logo.png` - College logo
- `/assets/logos/wtw-logo.png` - Company logo
- `/assets/projects/project-*.png` - Project screenshots

---

## 🎨 Theme Colors

### Light Theme
- Background: White (#FFFFFF)
- Primary Accent: Coral Red (#FF6B6B)
- Secondary Accent: Mint Green (#4ECDC4)

### Dark Theme  
- Background: Deep Black (#0D0D0D)
- Primary Accent: Sky Blue (#4A90D9)
- Secondary Accent: Golden Yellow (#F5D76E)

---

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/YOUR_USERNAME)
- **GitHub**: [Your GitHub](https://github.com/YOUR_USERNAME)

---

## 📜 License

MIT License - Feel free to use this template for your own portfolio!

---

**Made with ❤️ by Prayas Mazumder**
