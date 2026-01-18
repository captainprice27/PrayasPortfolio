# 🚀 How to Run the Portfolio Application

Complete guide to set up and run your MERN portfolio locally.

---

## 📋 Prerequisites

Before running the application, ensure you have:

| Requirement | Version | Download |
|-------------|---------|----------|
| Node.js | v18+ | [nodejs.org](https://nodejs.org/) |
| npm | v9+ | Comes with Node.js |
| MongoDB | v6+ | [mongodb.com](https://www.mongodb.com/try/download/community) |

**Check your versions:**
```bash
node --version
npm --version
mongod --version
```

---

## 🗄️ MongoDB Setup

### Option A: Local MongoDB

1. **Install MongoDB Community Server** from [mongodb.com](https://www.mongodb.com/try/download/community)

2. **Start MongoDB service**:
   ```bash
   # Windows (run as Administrator)
   net start MongoDB
   
   # Or using mongod directly
   mongod --dbpath="C:\data\db"
   ```

3. **Connection string**: `mongodb://localhost:27017/portfolio`

### Option B: MongoDB Atlas (Cloud - Recommended)

1. Create a free account at [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create a new cluster (free tier is sufficient)
3. Click "Connect" → "Connect your application"
4. Copy the connection string (looks like):
   ```
   mongodb+srv://username:password@cluster.xxxxx.mongodb.net/portfolio
   ```
5. Update `backend/.env` with your connection string

---

## 🔧 Installation Steps

### Step 1: Clone/Navigate to Project

```bash
cd e:\SAVED_CODES_AND_PROJECT\code-playing\portfolio
```

### Step 2: Install Backend Dependencies

```bash
cd backend
npm install
```

**Packages installed:**
- `express` - Web framework
- `mongoose` - MongoDB ODM
- `cors` - Cross-origin requests
- `dotenv` - Environment variables
- `nodemon` - Auto-restart on changes (dev)

### Step 3: Configure Environment Variables

1. Open `backend/.env`
2. Update with your MongoDB URI:
   ```env
   MONGODB_URI=mongodb://localhost:27017/portfolio
   PORT=5000
   NODE_ENV=development
   ```

### Step 4: Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

**Packages installed:**
- `react` & `react-dom` - UI library
- `vite` - Build tool
- `framer-motion` - Animations
- `react-icons` - Icon library
- `axios` - HTTP client
- `react-intersection-observer` - Scroll animations

---

## 🏃 Running the Application

### Development Mode (Recommended for editing)

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Backend runs at: `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
Frontend runs at: `http://localhost:5173`

### Production Build

```bash
# Build frontend
cd frontend
npm run build

# The built files are in frontend/dist/
# Serve them with your preferred method
```

---

## ⚙️ Environment Variables Reference

### Backend (.env)

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/portfolio` |
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment mode | `development` or `production` |

---

## 🔍 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/portfolio` | All portfolio data |
| GET | `/api/personal` | Personal info only |
| GET | `/api/skills` | Skills list |
| GET | `/api/journey` | Timeline milestones |
| GET | `/api/projects` | Projects list |
| GET | `/api/contact` | Contact info |

Test the API: `http://localhost:5000/api/portfolio`

---

## 🎯 Further Changes & Enhancements

### Updating Your Content

1. **Portfolio Data** - Edit `backend/data/portfolioData.js`:
   - Personal info, skills, journey, projects
   - All fields with UPPERCASE names (like `PROJECT_TITLE`) are meant to be replaced

2. **Component Text** - Edit files in `frontend/src/components/`:
   - Each component has a configuration object at the top
   - Look for UPPERCASE variable names

3. **Theme Colors** - Edit `frontend/src/styles/variables.css`:
   - Modify `--accent-primary`, `--accent-secondary`, etc.

### Adding More Projects

In `frontend/src/components/Projects.jsx`, add to the `PROJECTS_DATA` array:

```javascript
{
  id: 5,
  PROJECT_TITLE: "New Project",
  PROJECT_DESCRIPTION: "Description...",
  PROJECT_IMAGE: "/assets/projects/project-5.png",
  TECHNOLOGIES: ["React", "Node.js"],
  GITHUB_URL: "https://github.com/...",
  DEMO_URL: "https://...",
  PROJECT_YEAR: "2024",
  isFeatured: true,
}
```

### Adding New Journey Milestones

In `frontend/src/components/JourneyTimeline.jsx`, add to `JOURNEY_MILESTONES`:

```javascript
{
  id: 4,
  type: "work",  // or "education"
  INSTITUTION_NAME: "Company Name",
  INSTITUTION_LOGO: "/assets/logos/company-logo.png",
  title: "Job Title",
  YEAR_RANGE: "2026 - Present",
  ACHIEVEMENT: "Details",
  description: "Description...",
  icon: FiBriefcase,
  color: "var(--accent-primary)",
}
```

### Contact Form Integration

The contact form currently simulates submission. To make it functional:

**Option 1: EmailJS (No backend needed)**
1. Sign up at [emailjs.com](https://emailjs.com)
2. Create an email template
3. Update `Contact.jsx` with EmailJS SDK

**Option 2: Formspree (Easy)**
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update form action URL

**Option 3: Backend API**
Add a POST route in `backend/routes/api.js` with Nodemailer

---

## 🐛 Troubleshooting

### MongoDB Connection Failed

```
❌ MongoDB Connection Error: connect ECONNREFUSED
```

**Solution**: Make sure MongoDB is running:
- Windows: `net start MongoDB`
- Check if MongoDB service is installed

### Port Already in Use

```
Error: listen EADDRINUSE: address already in use :::5000
```

**Solution**: Change PORT in `.env` or kill the process using the port

### Module Not Found

```
Error: Cannot find module 'express'
```

**Solution**: Run `npm install` in the appropriate directory

---

## 📱 Deploying

### Frontend (Vercel/Netlify)

1. Build: `cd frontend && npm run build`
2. Deploy the `dist/` folder

### Backend (Railway/Render)

1. Push code to GitHub
2. Connect to Railway/Render
3. Set environment variables
4. Deploy

### Full Stack (Single Platform)

Consider using:
- **Vercel** - Great for full-stack React apps
- **Railway** - Easy MongoDB + Node.js hosting
- **Render** - Free tier available

---

## 💡 Enhancement Ideas

- [ ] Add a blog section with MDX
- [ ] Implement dark mode scheduling (auto-switch)
- [ ] Add page transitions
- [ ] Implement project filtering by technology
- [ ] Add a testimonials section
- [ ] Integrate Google Analytics
- [ ] Add PDF resume download
- [ ] Implement i18n for multiple languages

---

**Happy coding! 🎉**
