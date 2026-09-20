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
                type: "mcq",
                question: "What does PAN stand for in networking?",
                options: ["Public Area Network", "Primary Area Network", "Personal Area Network", "Private Area Network"],
                correctAnswer: 2
            },
            {
                type: "mcq",
                question: "Which of the following is the best example of a Wide Area Network (WAN)?",
                options: ["A Bluetooth connection", "A school network", "A home Wi-Fi", "The Internet"],
                correctAnswer: 3
            },
            {
                type: "mcq",
                question: "A set of rules that devices follow so communication is understood and reliable is called a:",
                options: ["Protocol", "Topology", "Server", "Client"],
                correctAnswer: 0
            },
            {
                type: "mcq",
                question: "What protocol automatically gives devices an IP configuration on a network?",
                options: ["HTTP", "DNS", "DHCP", "TCP/IP"],
                correctAnswer: 2
            },
            {
                type: "mcq",
                question: "Which service translates human-readable domain names (like google.com) into IP addresses?",
                options: ["HTTP", "DNS", "DHCP", "MAC"],
                correctAnswer: 1
            },
            {
                type: "mcq",
                question: "Which of these is a hardware identifier linked to a network interface?",
                options: ["IP Address", "MAC Address", "DNS", "HTTP"],
                correctAnswer: 1
            },
            {
                type: "mcq",
                question: "What is a major advantage of a wireless network over a wired network?",
                options: ["Faster speeds", "Easy mobility", "Lower interference", "Higher physical security"],
                correctAnswer: 1
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
                type: "fill-blank",
                question: "The core rules for sending data across networks and the internet is known as ___/IP.",
                correctAnswer: "TCP",
                hint: "Transmission Control Protocol."
            },
            {
                type: "fill-blank",
                question: "A network model where devices can share directly without a dedicated central server is called ___-to-peer.",
                correctAnswer: "peer",
                hint: "P2P."
            },
            {
                type: "fill-blank",
                question: "The device that connects the local network to the ISP service is a ___.",
                correctAnswer: "modem",
                hint: "Starts with 'M'."
            },
            {
                type: "fill-blank",
                question: "The ___ topology uses a central switch to connect all devices.",
                correctAnswer: "star",
                hint: "Shape in the night sky."
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
                type: "match",
                question: "Match the Network Type to its Scope:",
                pairs: [
                    { left: "PAN", right: "A few metres (e.g., Bluetooth earbuds)" },
                    { left: "LAN", right: "Building or campus (e.g., School network)" },
                    { left: "MAN", right: "City-wide network" },
                    { left: "WAN", right: "Country to world (e.g., Internet)" }
                ]
            },
            {
                type: "descriptive",
                question: "Give one technical reason why you would choose a wired network for a computer lab instead of wireless.",
                sampleAnswer: "Wired networks are fast and stable, have lower interference, and are more secure physically."
            },
            {
                type: "descriptive",
                question: "What is the difference between a switch and a router?",
                sampleAnswer: "A switch connects devices inside a single LAN and forwards data to the correct device. A router connects different networks together and directs data between them."
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
                options: ["Application Software", "Device Drivers", "Operating System", "Utility Software"],
                correctAnswer: 2
            },
            {
                type: "mcq",
                question: "Which of these is an example of Application Software?",
                options: ["macOS", "Windows", "Google Chrome", "Linux"],
                correctAnswer: 2
            },
            {
                type: "mcq",
                question: "Which of the following is considered System Software?",
                options: ["Device Drivers", "Microsoft Word", "Photoshop", "Video Games"],
                correctAnswer: 0
            },
            {
                type: "mcq",
                question: "What is the primary function of Application Software?",
                options: ["Controls hardware", "Helps users perform specific tasks", "Manages the operating system", "Provides a user interface for the computer"],
                correctAnswer: 1
            },
            {
                type: "mcq",
                question: "Which software acts as the bridge between applications and hardware?",
                options: ["Utility Software", "Microsoft Office", "Operating System", "Device Driver"],
                correctAnswer: 2
            },
            {
                type: "mcq",
                question: "Which of these is an example of an Operating System for mobile devices?",
                options: ["Photoshop", "macOS", "Linux", "Android"],
                correctAnswer: 3
            },
            {
                type: "mcq",
                question: "Which of these Operating Systems is primarily used on Apple computers?",
                options: ["Windows", "iOS", "macOS", "Android"],
                correctAnswer: 2
            },
            {
                type: "mcq",
                question: "Which of the following is a function of the Operating System?",
                options: ["Browsing the web", "Managing files and folders", "Editing photos", "Playing video games"],
                correctAnswer: 1
            },
            {
                type: "mcq",
                question: "Software is best defined as:",
                options: ["The physical parts of a computer", "The set of programs and instructions that tell a computer what to do", "The screen and keyboard", "The electrical power supply"],
                correctAnswer: 1
            },
            {
                type: "mcq",
                question: "Which type of software is responsible for supporting security on the computer?",
                options: ["Operating System", "Application Software", "Spreadsheet Software", "Media Player"],
                correctAnswer: 0
            },
            {
                type: "fill-blank",
                question: "The Operating System acts as the bridge between applications and ___.",
                correctAnswer: "hardware",
                hint: "The physical components of the computer."
            },
            {
                type: "fill-blank",
                question: "Software that helps the Operating System communicate with specific hardware, like a printer, is called a Device ___.",
                correctAnswer: "Driver",
                hint: "Like someone who steers a car."
            },
            {
                type: "fill-blank",
                question: "Google Chrome and Microsoft Word are examples of ___ Software.",
                correctAnswer: "Application",
                hint: "Apps."
            },
            {
                type: "fill-blank",
                question: "Windows and Linux are examples of ___ Systems.",
                correctAnswer: "Operating",
                hint: "OS."
            },
            {
                type: "fill-blank",
                question: "The Operating System provides a user ___ so humans can interact with the computer.",
                correctAnswer: "interface",
                hint: "Starts with 'I'."
            },
            {
                type: "fill-blank",
                question: "System software controls and ___ the computer itself.",
                correctAnswer: "manages",
                hint: "Like a manager."
            },
            {
                type: "match",
                question: "Match the software type to its example:",
                pairs: [
                    { left: "Operating System", right: "Windows" },
                    { left: "Application Software", right: "Photoshop" },
                    { left: "Mobile OS", right: "iOS" },
                    { left: "Web Browser", right: "Google Chrome" }
                ]
            },
            {
                type: "match",
                question: "Match the term to its definition:",
                pairs: [
                    { left: "Hardware", right: "Physical parts you can touch" },
                    { left: "Software", right: "Programs and instructions" },
                    { left: "System Software", right: "Controls the computer itself" },
                    { left: "Application Software", right: "Helps users do specific tasks" }
                ]
            },
            {
                type: "descriptive",
                question: "What are two main functions of an Operating System?",
                sampleAnswer: "Functions include: manages hardware, runs applications, organises files, provides a user interface, and supports security."
            },
            {
                type: "descriptive",
                question: "Explain the difference between System Software and Application Software.",
                sampleAnswer: "System Software controls and manages the computer itself (like the Operating System), while Application Software helps users perform specific tasks (like word processing or web browsing)."
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
                options: ["Computer Processing Unit", "Central Processing Unit", "Control Processing Unit", "Core Processing Unit"],
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
                options: ["Monitor, Keyboard, Mouse", "RAM, ROM, HDD", "ALU, CU, Registers", "Input, Output, Storage"],
                correctAnswer: 2
            },
            {
                type: "mcq",
                question: "Which part of the CPU performs mathematical calculations (+, -, *, /)?",
                options: ["Control Unit", "Registers", "Arithmetic Logic Unit", "RAM"],
                correctAnswer: 2
            },
            {
                type: "mcq",
                question: "Which part of the CPU fetches and decodes instructions?",
                options: ["ALU", "Registers", "Control Unit", "ROM"],
                correctAnswer: 2
            },
            {
                type: "mcq",
                question: "What does ROM stand for?",
                options: ["Random Only Memory", "Read-Only Memory", "Running Output Memory", "Real Operating Memory"],
                correctAnswer: 1
            },
            {
                type: "mcq",
                question: "Which of these is an example of an Output Device?",
                options: ["Microphone", "Scanner", "Keyboard", "Projector"],
                correctAnswer: 3
            },
            {
                type: "mcq",
                question: "Which of these is an example of an Input Device?",
                options: ["Speakers", "Monitor", "Mouse", "Printer"],
                correctAnswer: 2
            },
            {
                type: "mcq",
                question: "CPU speed is most commonly measured in:",
                options: ["Megabytes (MB)", "Gigahertz (GHz)", "Terabytes (TB)", "Kilobytes (KB)"],
                correctAnswer: 1
            },
            {
                type: "mcq",
                question: "A touchscreen is considered:",
                options: ["Input only", "Output only", "Both input and output", "Storage"],
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
                type: "fill-blank",
                question: "A Hard Disk Drive (HDD) uses spinning ___ disks to store data.",
                correctAnswer: "magnetic",
                hint: "Starts with 'M'."
            },
            {
                type: "fill-blank",
                question: "1000 Gigabytes is roughly equal to 1 ___.",
                correctAnswer: "Terabyte",
                hint: "TB"
            },
            {
                type: "fill-blank",
                question: "Memory that stores permanent start-up instructions and firmware is called ___.",
                correctAnswer: "ROM",
                hint: "Three letters."
            },
            {
                type: "fill-blank",
                question: "Very small, ultra-fast storage locations inside the CPU are called ___.",
                correctAnswer: "Registers",
                hint: "Starts with 'R'."
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
                type: "match",
                question: "Match the Storage Size (Smallest to Largest):",
                pairs: [
                    { left: "1st (Smallest)", right: "Kilobyte (KB)" },
                    { left: "2nd", right: "Megabyte (MB)" },
                    { left: "3rd", right: "Gigabyte (GB)" },
                    { left: "4th (Largest)", right: "Terabyte (TB)" }
                ]
            },
            {
                type: "descriptive",
                question: "Explain the main difference between RAM and ROM.",
                sampleAnswer: "RAM is the working memory for current tasks and is volatile (loses data when powered off). ROM stores permanent start-up instructions and is non-volatile."
            },
            {
                type: "descriptive",
                question: "Why does having more RAM help a computer's performance?",
                sampleAnswer: "More RAM allows more apps to stay open at once, large files to be worked on smoothly, and reduces the need to repeatedly move data to slower storage."
            }
        ]
    }
];
