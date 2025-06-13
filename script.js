const translations = {
    name: {
        en: "Karthik Ganesan"
    },
    title: {
        en: "Software Engineer - Full Stack Developer"
    },
    tiles: {
        overview: { 
            title: { en: "Overview" },
            subtitle: { en: "About me" }
        },
        experience: { 
            title: { en: "Experience" },
            subtitle: { en: "Professional journey" }
        },
        education: { 
            title: { en: "Education" },
            subtitle: { en: "Academic background" }
        },
        skills: { 
            title: { en: "Skills" },
            subtitle: { en: "" }
        },
        extras: { 
            title: { en: "Projects" },
            subtitle: { en: "Open Source & Personal Projects" }
        }
    },
    leftTiles: {
        resume: { en: "See resume" }
    },
    backButton: {
        en: "Back"
    },
    sections: {
        overview: {
            title: { en: "Overview" },
            content: { 
                en: "I am a Computer Science undergraduate with a strong enthusiasm for system design and backend technologies. Currently, I am deeply engaged in competitive programming and exploring the possibilities of Web3. I also enjoy building full-stack applications, always aiming to deliver efficient and scalable solutions. My technical strengths include Golang, TypeScript, Node.js, React, Docker, and more. I am passionate about blending innovation with practical engineering to solve real-world challenges."
            }
        },
        skills: {
            title: { en: "Skills" },
            content: { 
                en: [
                    "Programming Languages: C/C++, Rust, Java, Python, JS, TS, Go, Solidity",
                    "Frameworks: NextJS, ReactJS, Recoil, ExpressJS, Tailwind CSS, PyTorch",
                    "Databases: MongoDB, MySQL, PostgreSQL, Redis, ORMs",
                    "Tools: Git, GitHub, Postman, Vim, AWS-S3, AWS-CDN, AWS-EC2, Linux, Docker, Grafana, Prometheus, Foundry, Firebase, Arduino, Nucleo",
                    "Interests: Competitive Programming, Web3, Full Stack Development, System Design, Machine Learning"
                ]
            }
        },
        education: {
            title: { en: "Education" },
            content: {
                en: [
                    {
                        title: "Amrita Vishwa Vidhyapeetam, Coimbatore, India (2023-2027)",
                        points: [
                            "Bachelor of Technology in Computer Science",
                            "CGPA: 8.4"
                        ]
                    },
                    {
                        title: "Indian Institute Of Technology, Madras, Chennai, India (2023-2027)",
                        points: [
                            "Bachelor of Science in Electronic System",
                            "CGPA: 8.00"
                        ]
                    },
                    {
                        title: "Sri Sankara Senior Secondary School, Chennai, India (2021-2023)",
                        points: [
                            "Higher Secondary Education (12th Grade)",
                            "Board Exam Score: 87%"
                        ]
                    },
                    {
                        title: "Sri Sankara Senior Secondary School, Chennai, India (2010-2021)",
                        points: [
                            "Secondary Education (10th Grade)",
                            "Board Exam Score: 89%"
                        ]
                    }
                ]
            }
        },
        experience: {
            title: { en: "Experience" },
            content: {
                en: [
                    {
                        title: "LG Electronics India - Software Engineering Intern (May 2025 - Present)",
                        points: [
                          "Built and enhanced LG's high-performance conversation platform, capable of handling 20K+ concurrent users.",
                          "Stack: Golang, Docker, TypeScript, CI/CD pipelines, AI Agents, MCP"
                        ]
                      },
                    {
                        title: "Genisis-IIC'25 - Full Stack Developer (Feb 2025 - Present)",
                        points: [
                          "Spearheaded the development and deployment of a responsive event management portal, facilitating registration, scheduling, and announcements for 700+ users.",
                          "Built the frontend using React.js with Tailwind CSS, ensuring mobile-first, intuitive UI/UX across devices.",
                          "Developed core features, real-time schedule updates, and user dashboards using Node.js and JavaScript.",
                          "Integrated dynamic schedule rendering and countdowns to improve user engagement and event visibility.",
                          "Collaborated closely with a cross-functional team of 7 developers through Git,Github and daily sync-ups.",
                          "Delivered a fully functional, production-ready platform within a 2-week sprint, meeting all feature requirements and design specifications.",
                          "Received commendations from event organizers and users for intuitive design and smooth user experience."
                        ]
                      }
                      
                ]
            }
        },
        extras: {
            title: { en: "Projects & Open Source" },
            content: {
                en: [
                    "<div class='achievement-link'>Meteomunch - Golang-based weather data package for paragliding optimization<br><a href='https://github.com/adofm/DexAdofm' target='_blank'>github.com/adofm/DexAdofm</a></div>",
                    "<div class='achievement-link'>DexAdofm - Typescript-based dApp for community ranking system<br><a href='https://github.com/adofm/DexAdofm' target='_blank'>github.com/adofm/DexAdofm</a></div>",
                    "<div class='achievement-link'>ChainLy AI - CLI AI Agent for Ethereum blockchain operations<br><a href='https://github.com/adofm/onChain-agent' target='_blank'>github.com/adofm/onChain-agent</a></div>",
                    "<div class='achievement-link'>Bludis - Go based Redis implementation (Feb 2025)<br>PR #21: <a href='https://github.com/IAmRiteshKoushik/bluedis/pull/21' target='_blank'>github.com/IAmRiteshKoushik/bluedis/pull/21</a><br>Issue #8: <a href='https://github.com/IAmRiteshKoushik/bluedis/issues/8' target='_blank'>github.com/IAmRiteshKoushik/bluedis/issues/8</a></div>",
                    "<div class='achievement-link'>LeetPath - Graph-based LeetCode recommender (Jan 2025)<br>PR #7: <a href='https://github.com/amri-tah/LeetPath/pull/7' target='_blank'>github.com/amri-tah/LeetPath/pull/7</a><br>Issue #4: <a href='https://github.com/amri-tah/LeetPath/issues/4' target='_blank'>github.com/amri-tah/LeetPath/issues/4</a></div>"
                ]
            }
        }
    }
};

// State management
let currentView = 'tiles';
let currentSection = null;

function updateContent() {
    const lang = 'en';

    // Update profile section
    document.getElementById('name').textContent = translations.name[lang];
    document.getElementById('title').textContent = translations.title[lang];

    // Update left tiles
    document.querySelector('.tile-resume .tile-text').textContent = translations.leftTiles.resume[lang];

    // Update right tiles
    const tiles = document.querySelectorAll('.tile-grid-right .tile');
    tiles.forEach(tile => {
        const section = tile.getAttribute('data-section');
        if (section && translations.tiles[section]) {
            const titleElement = tile.querySelector('.tile-title');
            const subtitleElement = tile.querySelector('.tile-subtitle');
            
            if (titleElement) {
                titleElement.textContent = translations.tiles[section].title[lang];
            }
            if (subtitleElement) {
                subtitleElement.textContent = translations.tiles[section].subtitle[lang];
            }
        }
    });

    // Update back button
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.innerHTML = `<span class="back-icon">←</span> ${translations.backButton[lang]}`;
    }

    // Update section content
    Object.keys(translations.sections).forEach(sectionKey => {
        const section = document.getElementById(sectionKey);
        if (section) {
            const titleElement = section.querySelector('h3');
            if (titleElement) {
                titleElement.textContent = translations.sections[sectionKey].title[lang];
            }
            
            const contentElement = section.querySelector('p, ul, div');
            if (contentElement) {
                const content = translations.sections[sectionKey].content[lang];
                if (Array.isArray(content)) {
                    if (typeof content[0] === 'object') {
                        // For education and experience sections
                        let html = '';
                        content.forEach((item, index) => {
                            html += `<h4>${item.title}</h4><ul>`;
                            item.points.forEach(point => {
                                html += `<li>${point}</li>`;
                            });
                            html += '</ul>';
                            if (sectionKey === 'experience' && index < content.length - 1) {
                                html += '<hr class="experience-divider">';
                            }
                        });
                        contentElement.innerHTML = html;
                    } else {
                        // For skills, certification, and extras sections
                        contentElement.innerHTML = content.map(item => `<li>${item}</li>`).join('');
                    }
                } else {
                    // For overview section
                    contentElement.textContent = content;
                }
            }
        }
    });
}

function showTileGrid() {
    const tileGrid = document.getElementById('tile-grid');
    const contentView = document.getElementById('content-view');
    
    contentView.classList.remove('active');
    setTimeout(() => {
        contentView.style.display = 'none';
        tileGrid.style.display = 'grid';
        setTimeout(() => {
            tileGrid.classList.add('active');
        }, 50);
    }, 300);
    
    currentView = 'tiles';
    currentSection = null;
}

function showContent(sectionId) {
    const tileGrid = document.getElementById('tile-grid');
    const contentView = document.getElementById('content-view');
    
    // Hide all sections first
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
    
    // Transition from tiles to content
    tileGrid.classList.remove('active');
    setTimeout(() => {
        tileGrid.style.display = 'none';
        contentView.style.display = 'flex';
        setTimeout(() => {
            contentView.classList.add('active');
        }, 50);
    }, 300);
    
    currentView = 'content';
    currentSection = sectionId;
}

function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        // Create a temporary tooltip
        const tooltip = document.createElement('div');
        tooltip.textContent = 'Copied!';
        tooltip.style.cssText = `
            position: absolute;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 12px;
            pointer-events: none;
            z-index: 1000;
            transform: translateX(-50%);
            left: 50%;
            top: -30px;
        `;
        
        element.style.position = 'relative';
        element.appendChild(tooltip);
        
        setTimeout(() => {
            tooltip.remove();
        }, 1500);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('dark-mode');
    updateContent();

    // Right side tile click handlers
    const rightTiles = document.querySelectorAll('.tile-grid-right .tile');
    rightTiles.forEach(tile => {
        tile.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            showContent(targetSection);
        });
    });

    // Back button handler
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', showTileGrid);

    // Email and phone copy handlers
    const emailTile = document.getElementById('email-tile');
    const phoneTile = document.getElementById('phone-tile');
    
    emailTile.addEventListener('click', function() {
        const emailText = document.getElementById('email-info').textContent;
        copyToClipboard(emailText, this);
    });
    
    phoneTile.addEventListener('click', function() {
        const phoneText = document.getElementById('phone-info').textContent;
        copyToClipboard(phoneText, this);
    });

    // Prevent link tiles from interfering with their anchor tags
    const linkTiles = document.querySelectorAll('.tile-resume, .tile-github, .tile-linkedin');
    linkTiles.forEach(tile => {
        tile.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });

    // Add entrance animations for tiles
    const allTiles = document.querySelectorAll('.tile');
    allTiles.forEach((tile, index) => {
        tile.style.animationDelay = `${index * 0.05}s`;
        tile.style.animation = 'fadeInScale 0.5s ease forwards';
    });
});

// Add CSS animation for tile entrance
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

