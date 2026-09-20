const quizData = [
    {
        setId: "networks",
        title: "Set 1: Networks",
        description: "Fundamentals of Computer Networks",
        questions: [
            {
                type: "mcq",
                question: "What is a computer network?",
                options: [
                    "A single computer working alone",
                    "A group of two or more devices connected to communicate and share data",
                    "A software program for browsing the internet",
                    "A type of wireless connection"
                ],
                correctAnswer: 1
            },
            {
                type: "mcq",
                question: "Which of these is an example of a Local Area Network (LAN)?",
                options: [
                    "Phone connected to earbuds",
                    "A school campus network",
                    "A city-wide network",
                    "The Internet"
                ],
                correctAnswer: 1
            },
            {
                type: "mcq",
                question: "Which network topology is most common in a modern LAN?",
                options: ["Bus", "Ring", "Mesh", "Star"],
                correctAnswer: 3
            },
            {
                type: "fill-blank",
                question: "The logical network address used so devices can send data across networks is called an ___ address.",
                correctAnswer: "IP",
                hint: "Two letters, stands for Internet Protocol."
            },
            {
                type: "fill-blank",
                question: "A network connecting devices across a city is called a ___ Area Network (MAN).",
                correctAnswer: "Metropolitan",
                hint: "Starts with 'M'."
            },
            {
                type: "match",
                question: "Match the network device to its function:",
                pairs: [
                    { left: "Switch", right: "Connects devices inside a LAN" },
                    { left: "Router", right: "Connects different networks" },
                    { left: "Modem", right: "Connects the local network to the ISP" },
                    { left: "Server", right: "Provides services or resources to clients" }
                ]
            },
            {
                type: "descriptive",
                question: "Give one technical reason why you would choose a wired network for a computer lab instead of wireless.",
                sampleAnswer: "Wired networks are fast and stable, have lower interference, and are more secure physically."
            }
        ]
    },
    {
        setId: "software",
        title: "Set 2: Fundamentals of Software",
        description: "System and Application Software",
        questions: [
            {
                type: "mcq",
                question: "What is the most important type of system software?",
                options: [
                    "Application Software",
                    "Device Drivers",
                    "Operating System",
                    "Utility Software"
                ],
                correctAnswer: 2
            },
            {
                type: "mcq",
                question: "Which of these is an example of Application Software?",
                options: [
                    "macOS",
                    "Windows",
                    "Google Chrome",
                    "Linux"
                ],
                correctAnswer: 2
            },
            {
                type: "fill-blank",
                question: "The Operating System acts as the bridge between applications and ___.",
                correctAnswer: "hardware",
                hint: "The physical components of the computer."
            },
            {
                type: "descriptive",
                question: "What are two main functions of an Operating System?",
                sampleAnswer: "Functions include: manages hardware, runs applications, organises files, provides a user interface, and supports security."
            }
        ]
    },
    {
        setId: "computer-fundamentals",
        title: "Set 3: Computer Fundamentals",
        description: "Inputs, Processing, Memory, and Storage",
        questions: [
            {
                type: "mcq",
                question: "What does CPU stand for?",
                options: [
                    "Computer Processing Unit",
                    "Central Processing Unit",
                    "Control Processing Unit",
                    "Core Processing Unit"
                ],
                correctAnswer: 1
            },
            {
                type: "mcq",
                question: "Which memory is considered volatile and loses its contents when power is switched off?",
                options: ["ROM", "HDD", "SSD", "RAM"],
                correctAnswer: 3
            },
            {
                type: "mcq",
                question: "What are the three main parts of a CPU?",
                options: [
                    "Monitor, Keyboard, Mouse",
                    "RAM, ROM, HDD",
                    "ALU, CU, Registers",
                    "Input, Output, Storage"
                ],
                correctAnswer: 2
            },
            {
                type: "fill-blank",
                question: "The CPU cycle consists of three steps: Fetch -> ___ -> Execute.",
                correctAnswer: "Decode",
                hint: "Figuring out what the instruction means."
            },
            {
                type: "fill-blank",
                question: "Both HDD (Hard Disk Drive) and SSD (Solid-State Drive) are examples of ___-volatile storage.",
                correctAnswer: "non",
                hint: "They keep files even when switched off."
            },
            {
                type: "match",
                question: "Match the component to its category:",
                pairs: [
                    { left: "Keyboard", right: "Input Device" },
                    { left: "Monitor", right: "Output Device" },
                    { left: "HDD", right: "Magnetic Storage" },
                    { left: "SSD", right: "Solid State Storage" }
                ]
            },
            {
                type: "descriptive",
                question: "Explain the main difference between RAM and ROM.",
                sampleAnswer: "RAM is the working memory for current tasks and is volatile (loses data when powered off). ROM stores permanent start-up instructions and is non-volatile."
            }
        ]
    }
];
