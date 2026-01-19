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
        PROFESSIONAL_TITLE: "Junior Software Developer",
        // TAGLINE: Short catchphrase that appears below your name
        TAGLINE: "Building innovative stuffs with modern technologies. Passionate about Sports and Tech.",

        // ABOUT_DESCRIPTION: A paragraph about yourself (2-4 sentences)
        ABOUT_DESCRIPTION: `Passionate software developer with a B.Tech in Computer Science and Technology 
    from IIEST, Shibpur. I specialize in building scalable web applications and enjoy solving 
    complex problems with elegant code. Currently working as an Analyst-Developer at WTW, 
    where I contribute to enterprise-level solutions.`,

        // PROFILE_IMAGE_PATH: Path to your profile photo (replace in frontend assets)
        PROFILE_IMAGE_PATH: "/assets/images/profile-photo.jpg",
        ABOUT_BG_IMAGE: "/assets/images/about-bg-demo.png",
        HERO_BG_IMAGE: "/assets/images/hero-bg-demo.png",
        RESUME_URL: "/assets/resume/PRAYAS_MAZUMDER_RESUME.pdf",
    },

    // =====================================================
    // CONTACT & SOCIAL LINKS
    // Replace # with your actual URLs
    // =====================================================
    contact: {
        EMAIL_ADDRESS: "mazumder.prayas@gmail.com",
        SECONDARY_EMAIL: "prayasrikai@gmail.com", // Secondary contact
        LOCATION: "Kolkata,India",

        // Social Media Links - Replace # with actual URLs
        GITHUB_URL: "https://github.com/captainprice27",
        LINKEDIN_URL: "https://linkedin.com/in/prayas-mazumder",
        TWITTER_URL: "https://x.com/captainprice_27", // Updated to X.com
        INSTAGRAM_URL: "https://instagram.com/captainprice_27",
        PORTFOLIO_URL: "#", // Your deployed portfolio URL
    },

    // =====================================================
    // TECHNICAL SKILLS
    // Add/remove skills as needed. Proficiency is 0-100
    // =====================================================
    skills: [
        // Programming Languages
        { name: "C#", category: "language" },
        { name: "C++", category: "language" },
        { name: "Python", category: "language" },
        { name: "JavaScript", category: "language" },
        { name: "TypeScript", category: "language" },




        // Frontend Technologies
        { name: "React.js", category: "frontend" },
        { name: "Next.js", category: "frontend" },
        { name: "HTML5", category: "frontend" },
        { name: "Tailwind CSS", category: "frontend" },
        { name: "Bootstrap", category: "frontend" },

        // Backend Technologies
        { name: "Node.js", category: "backend" },
        { name: "Express.js", category: "backend" },
        { name: "ASP.NET Core", category: "backend" },
        { name: "MySQL", category: "backend" },
        { name: "SQL Server", category: "backend" },
        { name: "MongoDB", category: "backend" },
        // { name: "PostgreSQL", category: "backend" },

        // Tools & Others
        { name: "Git & GitHub", category: "tools" },
        { name: "Docker", category: "tools" },
        { name: "Kubernetes", category: "tools" },
        { name: "Azure", category: "tools" },
        { name: "AWS", category: "tools" },
    ],

    // =====================================================
    // JOURNEY TIMELINE
    // Your educational and professional journey
    // =====================================================
    journey: [
        {
            id: 1,
            type: "education",
            INSTITUTION_NAME: "Ramakrishna Mission Vidyabhaban (H.S.), Midnapore", // Replace with your school name
            INSTITUTION_LOGO: "/assets/logos/school-logo.svg", // Replace in assets
            title: "Secondary & Higher Secondary",
            YEAR_START: "2012",
            YEAR_END: "2020",
            // HS_MARKS: Your Higher Secondary percentage/CGPA
            ACHIEVEMENT_DETAILS: "12th Boards: 95.60%", // Replace XX.XX with actual marks
            description: "Completed schooling with focus on Science stream (Physics, Chemistry, Mathematics)",
            icon: "school",
        },
        {
            id: 2,
            type: "education",
            INSTITUTION_NAME: "Indian Institute of Engineering Science and Technology (IIEST), Shibpur",
            INSTITUTION_LOGO: "/assets/logos/iiest-logo.svg", // Replace with actual logo
            title: "B.Tech in Computer Science and Technology",
            YEAR_START: "2021",
            YEAR_END: "2025",
            ACHIEVEMENT_DETAILS: "CGPA: 8.8", // Replace X.XX with your CGPA
            description: "Graduated in B.tech(Computer Science and Technology) from one of India's second oldest engineering college",
            icon: "university",
        },
        {
            id: 3,
            type: "work",
            INSTITUTION_NAME: "WTW (Willis Towers Watson)",
            INSTITUTION_LOGO: "/assets/logos/wtw-logo.svg", // Replace with WTW logo
            title: "Analyst-Software Developer",
            YEAR_START: "June 2025",
            YEAR_END: "Present",
            ACHIEVEMENT_DETAILS: "Full-time Position",
            description: "Working on enterprise solutions and contributing to financial projects",
            icon: "briefcase",
        },
    ],

    // =====================================================
    // CODING PROFILES
    // Your competitive programming achievements
    // =====================================================
    codingProfiles: [
        {
            name: "LeetCode",
            logo: "/assets/logos/leetcode-logo.svg",
            profileLink: "https://leetcode.com/captainprice27/",
            description: "Solved 1000+ problems. Max Rating: 2024. Active daily problem solver.Got prestigious 'Knight' badge",
        },
        {
            name: "CodeChef",
            logo: "/assets/logos/codechef-logo.svg",
            profileLink: "https://www.codechef.com/users/captainprice27",
            description: "3-Star Rated Coder. Highest Rating: 1789. Ranked in top 6000 globally.",
        },
        {
            name: "Codeforces",
            logo: "/assets/logos/codeforces-logo.svg",
            profileLink: "https://codeforces.com/profile/icecream27",
            description: "Pupil (Max Rating: 1395). Active problem solver in Div 2 and Div 3 contests.",
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
            PROJECT_DESCRIPTION: `Developed an end-to-end security pipeline that identifies Android ransomware across 20+ families by transforming raw APK data into visual RGB feature maps for deep learning analysis. Using Python and TensorFlow, I engineered a Convolutional Neural Network (CNN) that achieved 86% accuracy and an 85.31 F1 score, optimized through a massive 90,000-combination hyperparameter search. The project is deployed as a full-stack Flask platform that supports batch APK uploads and provides real-time model inference with confidence score visualizations.`,
            PROJECT_IMAGE: "/assets/projects/project-1.png", // Replace with project screenshot
            TECHNOLOGIES_USED: ["Python", "TensorFlow", "Flask", "MongoDB", "JavaScript"],
            GITHUB_REPO_URL: "https://github.com/captainprice27/Ransom-Check",
            LIVE_DEMO_URL: "https://ransom-check.netlify.app/",
            PROJECT_YEAR: "2025",
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
