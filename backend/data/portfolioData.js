/**
 * =====================================================
 * PORTFOLIO DATA
 * Static data for the portfolio - Replace placeholders with your actual data
 * =====================================================
 */

const portfolioData = {
    // =====================================================
    // PERSONAL INFORMATION
    // =====================================================
    personal: {
        FULL_NAME: "Prayas Mazumder",
        PROFESSIONAL_TITLE: "Software Developer",
        // TAGLINE: Short catchphrase that appears below your name
        TAGLINE: "Building innovative solutions with modern technologies",

        // ABOUT_DESCRIPTION: A paragraph about yourself (2-4 sentences)
        ABOUT_DESCRIPTION: `Passionate software developer with a B.Tech in Computer Science and Technology 
    from IIEST, Shibpur. I specialize in building scalable web applications and enjoy solving 
    complex problems with elegant code. Currently working as an Analyst-Developer at WTW, 
    where I contribute to enterprise-level solutions.`,

        // PROFILE_IMAGE_PATH: Path to your profile photo (replace in frontend assets)
        PROFILE_IMAGE_PATH: "/assets/images/profile-photo.jpg",
    },

    // =====================================================
    // CONTACT & SOCIAL LINKS
    // Replace # with your actual URLs
    // =====================================================
    contact: {
        EMAIL_ADDRESS: "your.email@example.com",
        PHONE_NUMBER: "+91-XXXXXXXXXX",
        LOCATION: "India",

        // Social Media Links - Replace # with actual URLs
        GITHUB_URL: "https://github.com/YOUR_GITHUB_USERNAME",
        LINKEDIN_URL: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME",
        TWITTER_URL: "https://twitter.com/YOUR_TWITTER_HANDLE",
        PORTFOLIO_URL: "#", // Your deployed portfolio URL
    },

    // =====================================================
    // TECHNICAL SKILLS
    // Add/remove skills as needed. Proficiency is 0-100
    // =====================================================
    skills: [
        // Programming Languages
        { name: "JavaScript", category: "language", proficiency: 90 },
        { name: "TypeScript", category: "language", proficiency: 80 },
        { name: "Python", category: "language", proficiency: 85 },
        { name: "Java", category: "language", proficiency: 75 },
        { name: "C++", category: "language", proficiency: 70 },

        // Frontend Technologies
        { name: "React.js", category: "frontend", proficiency: 90 },
        { name: "Next.js", category: "frontend", proficiency: 80 },
        { name: "HTML5/CSS3", category: "frontend", proficiency: 95 },
        { name: "Tailwind CSS", category: "frontend", proficiency: 85 },

        // Backend Technologies
        { name: "Node.js", category: "backend", proficiency: 88 },
        { name: "Express.js", category: "backend", proficiency: 85 },
        { name: "MongoDB", category: "backend", proficiency: 80 },
        { name: "PostgreSQL", category: "backend", proficiency: 75 },

        // Tools & Others
        { name: "Git & GitHub", category: "tools", proficiency: 90 },
        { name: "Docker", category: "tools", proficiency: 70 },
        { name: "AWS", category: "tools", proficiency: 65 },
    ],

    // =====================================================
    // JOURNEY TIMELINE
    // Your educational and professional journey
    // =====================================================
    journey: [
        {
            id: 1,
            type: "education",
            INSTITUTION_NAME: "Your School Name", // Replace with your school name
            INSTITUTION_LOGO: "/assets/logos/school-logo.png", // Replace in assets
            title: "Secondary & Higher Secondary",
            YEAR_START: "2012",
            YEAR_END: "2020",
            // HS_MARKS: Your Higher Secondary percentage/CGPA
            ACHIEVEMENT_DETAILS: "Higher Secondary Score: XX.XX%", // Replace XX.XX with actual marks
            description: "Completed schooling with focus on Science stream (Physics, Chemistry, Mathematics)",
            icon: "school",
        },
        {
            id: 2,
            type: "education",
            INSTITUTION_NAME: "IIEST, Shibpur",
            INSTITUTION_LOGO: "/assets/logos/iiest-logo.png", // Replace with actual logo
            title: "B.Tech in Computer Science and Technology",
            YEAR_START: "2021",
            YEAR_END: "2025",
            ACHIEVEMENT_DETAILS: "CGPA: X.XX", // Replace X.XX with your CGPA
            description: "Pursuing Bachelor of Technology in Computer Science from one of India's premier engineering institutions",
            icon: "university",
        },
        {
            id: 3,
            type: "work",
            INSTITUTION_NAME: "WTW (Willis Towers Watson)",
            INSTITUTION_LOGO: "/assets/logos/wtw-logo.png", // Replace with WTW logo
            title: "Analyst-Developer",
            YEAR_START: "June 2025",
            YEAR_END: "Present",
            ACHIEVEMENT_DETAILS: "Full-time Position",
            description: "Working on enterprise solutions and contributing to large-scale software development projects",
            icon: "briefcase",
        },
    ],

    // =====================================================
    // PROJECTS
    // Showcase your best work - Large cards with images
    // =====================================================
    projects: [
        {
            id: 1,
            PROJECT_TITLE: "Project One Title",
            PROJECT_DESCRIPTION: `A comprehensive description of your first project. Explain what problem 
      it solves, the key features, and your role in building it. This should be 2-3 sentences 
      that give a good overview.`,
            PROJECT_IMAGE: "/assets/projects/project-1.png", // Replace with project screenshot
            TECHNOLOGIES_USED: ["React", "Node.js", "MongoDB", "Express"],
            GITHUB_REPO_URL: "https://github.com/YOUR_USERNAME/project-1",
            LIVE_DEMO_URL: "https://your-project-1-demo.com",
            PROJECT_YEAR: "2024",
            isFeatured: true,
        },
        {
            id: 2,
            PROJECT_TITLE: "Project Two Title",
            PROJECT_DESCRIPTION: `Description of your second project. What technologies did you use? 
      What challenges did you overcome? What was the impact or result of this project?`,
            PROJECT_IMAGE: "/assets/projects/project-2.png",
            TECHNOLOGIES_USED: ["Python", "Django", "PostgreSQL", "Docker"],
            GITHUB_REPO_URL: "https://github.com/YOUR_USERNAME/project-2",
            LIVE_DEMO_URL: "https://your-project-2-demo.com",
            PROJECT_YEAR: "2024",
            isFeatured: true,
        },
        {
            id: 3,
            PROJECT_TITLE: "Project Three Title",
            PROJECT_DESCRIPTION: `Description of your third project. Highlight the unique aspects 
      of this project and what you learned while building it.`,
            PROJECT_IMAGE: "/assets/projects/project-3.png",
            TECHNOLOGIES_USED: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
            GITHUB_REPO_URL: "https://github.com/YOUR_USERNAME/project-3",
            LIVE_DEMO_URL: "https://your-project-3-demo.com",
            PROJECT_YEAR: "2023",
            isFeatured: true,
        },
        {
            id: 4,
            PROJECT_TITLE: "Project Four Title",
            PROJECT_DESCRIPTION: `Description of your fourth project. This could be a personal project, 
      hackathon submission, or academic project that showcases your skills.`,
            PROJECT_IMAGE: "/assets/projects/project-4.png",
            TECHNOLOGIES_USED: ["React Native", "Firebase", "Redux"],
            GITHUB_REPO_URL: "https://github.com/YOUR_USERNAME/project-4",
            LIVE_DEMO_URL: "https://your-project-4-demo.com",
            PROJECT_YEAR: "2023",
            isFeatured: false,
        },
    ],
};

module.exports = portfolioData;
