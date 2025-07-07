<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amir Saifi - Professional Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            scroll-behavior: smooth; /* Smooth scrolling for navigation */
        }
        /* Custom scrollbar for better aesthetics */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #1a202c; /* Dark background for scrollbar track */
        }
        ::-webkit-scrollbar-thumb {
            background: #4a5568; /* Greyish thumb color */
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #718096; /* Lighter grey on hover */
        }

        /* Hero section animations */
        .hero-title span {
            opacity: 0;
            transform: translateY(20px);
            animation: slideInUp 0.8s forwards;
            display: inline-block;
        }
        .hero-title span:nth-child(1) { animation-delay: 0.2s; }
        .hero-title span:nth-child(2) { animation-delay: 0.4s; }
        /* Add more as needed for each word in the title */

        @keyframes slideInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Subtle parallax for hero background */
        .parallax-bg {
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        /* Glassmorphism effect for cards */
        .glass-card {
            background: rgba(45, 55, 72, 0.5); /* Slightly transparent background */
            backdrop-filter: blur(10px); /* Blur effect */
            -webkit-backdrop-filter: blur(10px); /* Safari support */
            border: 1px solid rgba(100, 100, 100, 0.3); /* Subtle border */
            border-radius: 12px;
        }

        /* Active navigation link indicator */
        .nav-link.active {
            position: relative;
            color: #2dd4bf; /* Teal-400 */
        }
        .nav-link.active::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            height: 2px;
            background-color: #2dd4bf;
            border-radius: 2px;
        }

        /* Project card hover effect */
        .project-card:hover .project-overlay {
            opacity: 1;
            transform: translateY(0);
        }
        .project-overlay {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease-in-out;
            background: rgba(0, 0, 0, 0.7);
        }
    </style>
</head>
<body class="bg-gray-900 text-gray-100 antialiased">

    <nav class="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90 shadow-lg backdrop-blur-sm">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <a href="#home" class="text-2xl font-bold text-teal-400 hover:text-teal-300 transition duration-300 rounded-lg p-2">Amir Saifi</a>
            <div class="hidden md:flex space-x-6">
                <a href="#home" class="nav-link text-gray-300 hover:text-teal-400 transition duration-300 font-medium rounded-lg p-2">Home</a>
                <a href="#about" class="nav-link text-gray-300 hover:text-teal-400 transition duration-300 font-medium rounded-lg p-2">About</a>
                <a href="#skills" class="nav-link text-gray-300 hover:text-teal-400 transition duration-300 font-medium rounded-lg p-2">Skills</a>
                <a href="#portfolio" class="nav-link text-gray-300 hover:text-teal-400 transition duration-300 font-medium rounded-lg p-2">Portfolio</a>
                <a href="#contact" class="nav-link text-gray-300 hover:text-teal-400 transition duration-300 font-medium rounded-lg p-2">Contact</a>
            </div>
            <button id="mobile-menu-button" class="md:hidden text-gray-300 hover:text-teal-400 focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
        <div id="mobile-menu" class="hidden md:hidden bg-gray-800 bg-opacity-90">
            <a href="#home" class="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-teal-400 transition duration-300 rounded-lg mx-2">Home</a>
            <a href="#about" class="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-teal-400 transition duration-300 rounded-lg mx-2">About</a>
            <a href="#skills" class="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-teal-400 transition duration-300 rounded-lg mx-2">Skills</a>
            <a href="#portfolio" class="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-teal-400 transition duration-300 rounded-lg mx-2">Portfolio</a>
            <a href="#contact" class="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-teal-400 transition duration-300 rounded-lg mx-2">Contact</a>
        </div>
    </nav>

    <section id="home" class="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-center py-20 overflow-hidden parallax-bg" style="background-image: url('https://source.unsplash.com/random/1920x1080/?abstract,tech,dark');">
        <div class="absolute inset-0 z-0 opacity-10">
            <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                <circle cx="20" cy="20" r="15" fill="rgba(6, 182, 212, 0.1)"></circle>
                <circle cx="80" cy="60" r="25" fill="rgba(6, 182, 212, 0.08)"></circle>
                <circle cx="50" cy="90" r="10" fill="rgba(6, 182, 212, 0.05)"></circle>
                <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="url(#gradient-diagonal)" opacity="0.1"></path>
                <defs>
                    <linearGradient id="gradient-diagonal" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:rgb(6,182,212);stop-opacity:1" />
                        <stop offset="100%" style="stop-color:rgb(74,222,128);stop-opacity:1" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <div class="z-10 max-w-4xl mx-auto px-4">
            <img src="https://placehold.co/150x150/2a303c/ffffff?text=AS" alt="Profile Picture" class="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-teal-400 shadow-xl object-cover animate-pulse-grow">
            <h1 class="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white drop-shadow-lg hero-title">
                Hi, I'm <span class="text-teal-400">Amir Saifi</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto type-text">
                </p>
            <a href="#portfolio" class="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                View My Work <i class="fas fa-arrow-right ml-2"></i>
            </a>
        </div>
    </section>

    <section id="about" class="py-20 md:py-32 bg-gray-800 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-900 to-gray-800 opacity-20 transform -skew-y-3 origin-top-left z-0"></div>
        <div class="container mx-auto px-4 max-w-5xl z-10 relative">
            <h2 class="text-4xl font-bold text-center text-teal-400 mb-12 relative">
                About Me
                <span class="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-teal-500 rounded-full"></span>
            </h2>
            <div class="flex flex-col md:flex-row items-center gap-10 bg-gray-700 bg-opacity-70 glass-card p-8">
                <div class="md:w-1/3 flex-shrink-0">
                    <img src="https://placehold.co/300x300/374151/ffffff?text=About+Me" alt="About Image" class="rounded-lg shadow-xl border-4 border-teal-600 object-cover w-full h-full animate-fade-in-left">
                </div>
                <div class="md:w-2/3 text-lg text-gray-300 leading-relaxed animate-fade-in-right">
                    <p class="mb-6">
                        Hello! I'm **Amir Saifi**, a dedicated web developer with a keen eye for design and a passion for creating impactful digital experiences. My journey in web development began **5 years ago**, and since then, I've enjoyed turning complex problems into elegant solutions.
                    </p>
                    <p class="mb-6">
                        I specialize in building responsive and user-friendly websites and applications, focusing on clean code and modern development practices. My expertise spans across **PHP, Laravel, CodeIgniter**, and a solid understanding of frontend technologies like **React.js and Tailwind CSS**, allowing me to tackle projects from conception to deployment.
                    </p>
                    <p>
                        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book. I believe in continuous learning and always strive to improve my craft. Let's build something amazing together!
                    </p>
                    <div class="mt-8 flex justify-center md:justify-start">
                        <a href="path/to/your/resume.pdf" download class="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transform hover:scale-105 transition duration-300">
                            Download Resume <i class="fas fa-download ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="skills" class="py-20 md:py-32 bg-gray-900">
        <div class="container mx-auto px-4 max-w-5xl">
            <h2 class="text-4xl font-bold text-center text-teal-400 mb-12 relative">
                My Skills
                <span class="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-teal-500 rounded-full"></span>
            </h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div class="bg-gray-800 p-6 rounded-lg shadow-xl text-center border border-gray-700 hover:border-teal-500 transform hover:scale-105 transition duration-300 skill-card">
                    <i class="fab fa-html5 text-6xl text-orange-500 mx-auto mb-4"></i>
                    <h3 class="text-xl font-semibold text-gray-100">HTML5</h3>
                </div>
                <div class="bg-gray-800 p-6 rounded-lg shadow-xl text-center border border-gray-700 hover:border-teal-500 transform hover:scale-105 transition duration-300 skill-card">
                    <i class="fab fa-css3-alt text-6xl text-blue-500 mx-auto mb-4"></i>
                    <h3 class="text-xl font-semibold text-gray-100">CSS3</h3>
                </div>
                <div class="bg-gray-800 p-6 rounded-lg shadow-xl text-center border border-gray-700 hover:border-teal-500 transform hover:scale-105 transition duration-300 skill-card">
                    <i class="fab fa-js text-6xl text-yellow-500 mx-auto mb-4"></i>
                    <h3 class="text-xl font-semibold text-gray-100">JavaScript</h3>
                </div>
                <div class="bg-gray-800 p-6 rounded-lg shadow-xl text-center border border-gray-700 hover:border-teal-500 transform hover:scale-105 transition duration-300 skill-card">
                    <i class="fab fa-react text-6xl text-blue-400 mx-auto mb-4"></i>
                    <h3 class="text-xl font-semibold text-gray-100">React.js</h3>
                </div>
                <div class="bg-gray-800 p-6 rounded-lg shadow-xl text-center border border-gray-700 hover:border-teal-500 transform hover:scale-105 transition duration-300 skill-card">
                    <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind CSS Icon" class="w-16 h-16 mx-auto mb-4 object-contain">
                    <h3 class="text-xl font-semibold text-gray-100">Tailwind CSS</h3>
                </div>
                <div class="bg-gray-800 p-6 rounded-lg shadow-xl text-center border border-gray-700 hover:border-teal-500 transform hover:scale-105 transition duration-300 skill-card">
                    <i class="fab fa-php text-6xl text-indigo-500 mx-auto mb-4"></i>
                    <h3 class="text-xl font-semibold text-gray-100">PHP</h3>
                </div>
                <div class="bg-gray-800 p-6 rounded-lg shadow-xl text-center border border-gray-700 hover:border-teal-500 transform hover:scale-105 transition duration-300 skill-card">
                    <i class="fab fa-laravel text-6xl text-red-600 mx-auto mb-4"></i>
                    <h3 class="text-xl font-semibold text-gray-100">Laravel</h3>
                </div>
                <div class="bg-gray-800 p-6 rounded-lg shadow-xl text-center border border-gray-700 hover:border-teal-500 transform hover:scale-105 transition duration-300 skill-card">
                    <img src="https://www.vectorlogo.zone/logos/codeigniter/codeigniter-icon.svg" alt="CodeIgniter Icon" class="w-16 h-16 mx-auto mb-4 object-contain">
                    <h3 class="text-xl font-semibold text-gray-100">CodeIgniter</h3>
                </div>
                 <div class="bg-gray-800 p-6 rounded-lg shadow-xl text-center border border-gray-700 hover:border-teal-500 transform hover:scale-105 transition duration-300 skill-card">
                    <i class="fas fa-database text-6xl text-purple-500 mx-auto mb-4"></i>
                    <h3 class="text-xl font-semibold text-gray-100">SQL/Databases</h3>
                </div>
                <div class="bg-gray-800 p-6 rounded-lg shadow-xl text-center border border-gray-700 hover:border-teal-500 transform hover:scale-105 transition duration-300 skill-card">
                    <i class="fab fa-git-alt text-6xl text-red-500 mx-auto mb-4"></i>
                    <h3 class="text-xl font-semibold text-gray-100">Git/GitHub</h3>
                </div>
            </div>
        </div>
    </section>

    <section id="portfolio" class="py-20 md:py-32 bg-gray-800">
        <div class="container mx-auto px-4 max-w-6xl">
            <h2 class="text-4xl font-bold text-center text-teal-400 mb-12 relative">
                My Portfolio
                <span class="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-teal-500 rounded-full"></span>
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="relative bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-700 hover:border-teal-500 transition duration-300 project-card group">
                    <img src="https://placehold.co/600x400/2f3542/ffffff?text=Project+1" alt="E-commerce Website Image" class="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300">
                    <div class="p-6">
                        <h3 class="text-2xl font-semibold text-teal-400 mb-2">E-commerce Website</h3>
                        <p class="text-gray-300 mb-4">A fully responsive e-commerce platform built with React and Node.js, featuring product listings, shopping cart, and user authentication.</p>
                        <div class="flex flex-wrap gap-2 text-sm mb-4">
                            <span class="bg-gray-700 text-teal-300 px-3 py-1 rounded-full">React.js</span>
                            <span class="bg-gray-700 text-teal-300 px-3 py-1 rounded-full">Node.js</span>
                            <span class="bg-gray-700 text-teal-300 px-3 py-1 rounded-full">MongoDB</span>
                        </div>
                        <a href="#" class="text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center">
                            View Project <i class="fas fa-external-link-alt ml-2"></i>
                        </a>
                    </div>
                    <div class="project-overlay absolute inset-0 flex items-center justify-center text-white p-4">
                        <p class="text-center text-lg font-medium">Click to see details!</p>
                    </div>
                </div>
                <div class="relative bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-700 hover:border-teal-500 transition duration-300 project-card group">
                    <img src="https://placehold.co/600x400/2f3542/ffffff?text=Project+2" alt="Task Management App Image" class="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300">
                    <div class="p-6">
                        <h3 class="text-2xl font-semibold text-teal-400 mb-2">Task Management App</h3>
                        <p class="text-gray-300 mb-4">A sleek and intuitive task management application with drag-and-drop functionality and real-time updates.</p>
                        <div class="flex flex-wrap gap-2 text-sm mb-4">
                            <span class="bg-gray-700 text-teal-300 px-3 py-1 rounded-full">Laravel</span>
                            <span class="bg-gray-700 text-teal-300 px-3 py-1 rounded-full">Vue.js</span>
                            <span class="bg-gray-700 text-teal-300 px-3 py-1 rounded-full">MySQL</span>
                        </div>
                        <a href="#" class="text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center">
                            View Project <i class="fas fa-external-link-alt ml-2"></i>
                        </a>
                    </div>
                     <div class="project-overlay absolute inset-0 flex items-center justify-center text-white p-4">
                        <p class="text-center text-lg font-medium">Click to see details!</p>
                    </div>
                </div>
                <div class="relative bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-700 hover:border-teal-500 transition duration-300 project-card group">
                    <img src="https://placehold.co/600x400/2f3542/ffffff?text=Project+3" alt="Personal Blog Site Image" class="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300">
                    <div class="p-6">
                        <h3 class="text-2xl font-semibold text-teal-400 mb-2">Personal Blog Site</h3>
                        <p class="text-gray-300 mb-4">A minimalist and fast-loading blog platform with Markdown support and robust content management.</p>
                        <div class="flex flex-wrap gap-2 text-sm mb-4">
                            <span class="bg-gray-700 text-teal-300 px-3 py-1 rounded-full">CodeIgniter</span>
                            <span class="bg-gray-700 text-teal-300 px-3 py-1 rounded-full">Bootstrap</span>
                            <span class="bg-gray-700 text-teal-300 px-3 py-1 rounded-full">PHP</span>
                        </div>
                        <a href="#" class="text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center">
                            View Project <i class="fas fa-external-link-alt ml-2"></i>
                        </a>
                    </div>
                     <div class="project-overlay absolute inset-0 flex items-center justify-center text-white p-4">
                        <p class="text-center text-lg font-medium">Click to see details!</p>
                    </div>
                </div>
                 <div class="relative bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-700 hover:border-teal-500 transition duration-300 project-card group">
                    <img src="https://placehold.co/600x400/2f3542/ffffff?text=Project+4" alt="Weather Dashboard Image" class="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300">
                    <div class="p-6">
                        <h3 class="text-2xl font-semibold text-teal-400 mb-2">Weather Dashboard</h3>
                        <p class="text-gray-300 mb-4">An interactive weather dashboard fetching real-time data from APIs, displaying forecasts and conditions.</p>
                        <div class="flex flex-wrap gap-2 text-sm mb-4">
                            <span class="bg-gray-700 text-teal-300 px-3 py-1 rounded-full">JavaScript</span>
                            <span class="bg-gray-700 text-teal-300 px-3 py-1 rounded-full">APIs</span>
                            <span class="bg-gray-700 text-teal-300 px-3 py-1 rounded-full">HTML/CSS</span>
                        </div>
                        <a href="#" class="text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center">
                            View Project <i class="fas fa-external-link-alt ml-2"></i>
                        </a>
                    </div>
                     <div class="project-overlay absolute inset-0 flex items-center justify-center text-white p-4">
                        <p class="text-center text-lg font-medium">Click to see details!</p>
                    </div>
                </div>
                 <div class="relative bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-700 hover:border-teal-500 transition duration-300 project-card group">
                    <img src="https://placehold.co/600x400/2f3542/ffffff?text=Project+5" alt="Recipe Finder App Image" class="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300">
                    <div class="p-6">
                        <h3 class="text-2xl font-semibold text-teal-400 mb-2">Recipe Finder App</h3>
                        <p class="text-gray-300 mb-4">A dynamic recipe search application allowing users to find recipes based on ingredients or cuisine type.</p>
                        <div class="flex flex-wrap gap-2 text-sm mb-4">
                            <span class="bg-gray-700 text-teal-300 px-3 py-1 rounded-full">PHP</span>
                            <span class="bg-gray-700 text-teal-300 px-3 py-1 rounded-full">jQuery</span>
                            <span class="bg-gray-700 text-teal-300 px-3 py-1 rounded-full">API Integration</span>
                        </div>
                        <a href="#" class="text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center">
                            View Project <i class="fas fa-external-link-alt ml-2"></i>
                        </a>
                    </div>
                     <div class="project-overlay absolute inset-0 flex items-center justify-center text-white p-4">
                        <p class="text-center text-lg font-medium">Click to see details!</p>
                    </div>
                </div>
                 <div class="relative bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-700 hover:border-teal-500 transition duration-300 project-card group">
                    <img src="https://placehold.co/600x400/2f3542/ffffff?text=Project+6" alt="Landing Page Design Image" class="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300">
                    <div class="p-6">
                        <h3 class="text-2xl font-semibold text-teal-400 mb-2">Landing Page Design</h3>
                        <p class="text-gray-300 mb-4">A captivating landing page design showcasing modern UI/UX principles and animations.</p>
                        <div class="flex flex-wrap gap-2 text-sm mb-4">
                            <span class="bg-gray-700 text-teal-300 px-3 py-1 rounded-full">Tailwind CSS</span>
                            <span class="bg-gray-700 text-teal-300 px-3 py-1 rounded-full">Figma</span>
                            <span class="bg-gray-700 text-teal-300 px-3 py-1 rounded-full">Responsive Design</span>
                        </div>
                        <a href="#" class="text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center">
                            View Project <i class="fas fa-external-link-alt ml-2"></i>
                        </a>
                    </div>
                     <div class="project-overlay absolute inset-0 flex items-center justify-center text-white p-4">
                        <p class="text-center text-lg font-medium">Click to see details!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="py-20 md:py-32 bg-gray-900">
        <div class="container mx-auto px-4 max-w-3xl">
            <h2 class="text-4xl font-bold text-center text-teal-400 mb-12 relative">
                Get in Touch
                <span class="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-teal-500 rounded-full"></span>
            </h2>
            <div class="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 glass-card">
                <p class="text-gray-300 text-center mb-8 text-lg">
                    Have a project in mind or just want to say hello? Feel free to reach out!
                </p>
                <form action="#" method="POST" class="space-y-6">
                    <div>
                        <label for="name" class="block text-gray-300 text-sm font-medium mb-2">Name</label>
                        <input type="text" id="name" name="name" required
                               class="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                               placeholder=" <?php echo 'this is amir placeholder';?>">
                    </div>
                    <div>
                        <label for="email" class="block text-gray-300 text-sm font-medium mb-2">Email</label>
                        <input type="email" id="email" name="email" required
                               class="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                               placeholder="your.email@example.com">
                    </div>
                    <div>
                        <label for="message" class="block text-gray-300 text-sm font-medium mb-2">Message</label>
                        <textarea id="message" name="message" rows="5" required
                                 class="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                                 placeholder="Your message..."></textarea>
                    </div>
                    <button type="submit"
                            class="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-md shadow-lg transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                        Send Message <i class="fas fa-paper-plane ml-2"></i>
                    </button>
                </form>
                <div class="mt-8 text-center text-gray-400">
                    <p class="mb-2">Or connect with me on:</p>
                    <div class="flex justify-center space-x-6">
                        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" aria-label="LinkedIn" class="text-teal-400 hover:text-teal-300 transition duration-300 transform hover:scale-110">
                            <i class="fab fa-linkedin text-3xl"></i>
                        </a>
                        <a href="https://github.com/your-github-profile" target="_blank" aria-label="GitHub" class="text-teal-400 hover:text-teal-300 transition duration-300 transform hover:scale-110">
                            <i class="fab fa-github text-3xl"></i>
                        </a>
                        <a href="https://twitter.com/your-twitter-handle" target="_blank" aria-label="Twitter" class="text-teal-400 hover:text-teal-300 transition duration-300 transform hover:scale-110">
                            <i class="fab fa-twitter text-3xl"></i>
                        </a>
                         <a href="mailto:your.email@example.com" aria-label="Email" class="text-teal-400 hover:text-teal-300 transition duration-300 transform hover:scale-110">
                            <i class="fas fa-envelope text-3xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="bg-gray-800 py-8 text-center text-gray-400">
        <p>&copy; 2025 Amir Saifi. All rights reserved.</p>
        <p class="mt-2 text-sm">Built with <span class="text-red-500">&hearts;</span> and Tailwind CSS</p>
    </footer>

    <script>
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu after clicking a link
                const mobileMenu = document.getElementById('mobile-menu');
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            });
        });

        // Toggle mobile menu visibility
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking outside (optional, but good UX)
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });

        // Typewriter Effect for Hero Section
        const typeTextElement = document.querySelector('.type-text');
        const texts = ["Php Developer", "Laravel Developer", "Codeigniter Developer", "Full Stack Enthusiast"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeWriter() {
            const currentText = texts[textIndex];
            if (isDeleting) {
                typeTextElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typeTextElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => isDeleting = true, 1000); // Pause at end of typing
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }

            const typingSpeed = isDeleting ? 100 : 150; // Faster deleting
            setTimeout(typeWriter, typingSpeed);
        }

        // Intersection Observer for Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('animate-fade-in-left')) {
                        entry.target.classList.add('fade-in-left-active');
                    }
                    if (entry.target.classList.contains('animate-fade-in-right')) {
                        entry.target.classList.add('fade-in-right-active');
                    }
                    if (entry.target.classList.contains('skill-card')) {
                        entry.target.classList.add('scale-up-active');
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-fade-in-left').forEach(el => observer.observe(el));
        document.querySelectorAll('.animate-fade-in-right').forEach(el => observer.observe(el));
        document.querySelectorAll('.skill-card').forEach(el => observer.observe(el));


        // Active navigation link highlighting
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= sectionTop - sectionHeight / 3) { // Adjusted offset
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.href.includes(current)) {
                    link.classList.add('active');
                }
            });
        });
        
        // Initial call for typewriter effect
        document.addEventListener('DOMContentLoaded', () => {
            typeWriter();
            // Set initial active state for home link
            document.querySelector('a[href="#home"]').classList.add('active');
        });
    </script>

    <style>
        /* Fade in from left */
        .animate-fade-in-left {
            opacity: 0;
            transform: translateX(-50px);
            transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .fade-in-left-active {
            opacity: 1;
            transform: translateX(0);
        }

        /* Fade in from right */
        .animate-fade-in-right {
            opacity: 0;
            transform: translateX(50px);
            transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .fade-in-right-active {
            opacity: 1;
            transform: translateX(0);
        }

        /* Pulse grow for profile picture */
        @keyframes pulse-grow {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        .animate-pulse-grow {
            animation: pulse-grow 2s infinite ease-in-out;
        }

        /* Skill card scale up on intersect */
        .skill-card {
            opacity: 0;
            transform: scale(0.9);
            transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .skill-card.scale-up-active {
            opacity: 1;
            transform: scale(1);
        }
    </style>
</body>
</html>