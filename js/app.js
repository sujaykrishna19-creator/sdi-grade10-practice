document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const topicSelector = document.getElementById('topic-selector');
    const quizRoot = document.getElementById('quiz-root');
    const actionContainer = document.getElementById('action-container');
    const submitBtn = document.getElementById('submit-btn');
    const resultsContainer = document.getElementById('results-container');
    const scoreDisplay = document.getElementById('score-display');
    const feedbackList = document.getElementById('feedback-list');
    
    // View Elements
    const registrationView = document.getElementById('registration-view');
    const quizView = document.getElementById('quiz-view');
    const startBtn = document.getElementById('start-btn');
    const regError = document.getElementById('reg-error');
    const profileDisplay = document.getElementById('student-profile-display');

    let currentSet = null;
    let randomizedQuestions = [];
    
    // Student State
    let studentInfo = {
        name: localStorage.getItem('sdi_student_name') || '',
        homeroom: localStorage.getItem('sdi_student_homeroom') || ''
    };

    // Initialize state
    if (studentInfo.name && studentInfo.homeroom) {
        updateProfileDisplay();
    }

    // Initialize Topic Buttons in Sidebar
    quizData.forEach((set, index) => {
        const btn = document.createElement('button');
        btn.className = 'topic-btn';
        btn.textContent = set.title;
        btn.onclick = () => handleTopicClick(index);
        topicSelector.appendChild(btn);
    });

    // Registration Handler
    startBtn.addEventListener('click', () => {
        const nameInput = document.getElementById('student-name').value.trim();
        const hrInput = document.getElementById('student-homeroom').value.trim();

        if (!nameInput || !hrInput) {
            regError.style.display = 'block';
            return;
        }

        regError.style.display = 'none';
        studentInfo.name = nameInput;
        studentInfo.homeroom = hrInput;
        
        localStorage.setItem('sdi_student_name', nameInput);
        localStorage.setItem('sdi_student_homeroom', hrInput);
        
        updateProfileDisplay();
        
        // If they clicked a topic but hadn't registered, load it now
        if (currentSet) {
            showQuizView();
            renderQuiz();
        } else {
            // Just prompt them to select a topic
            registrationView.innerHTML = `
                <h2>Welcome, ${studentInfo.name}!</h2>
                <div class="subject-info">
                    <p>You are now registered for this session.</p>
                    <p><strong>Please select a topic from the left sidebar to begin your practice.</strong></p>
                </div>
            `;
        }
    });

    function updateProfileDisplay() {
        profileDisplay.style.display = 'block';
        profileDisplay.innerHTML = `<strong>${studentInfo.name}</strong> | ${studentInfo.homeroom}`;
        
        // Pre-fill inputs if registration view is visible
        document.getElementById('student-name').value = studentInfo.name;
        document.getElementById('student-homeroom').value = studentInfo.homeroom;
    }

    function handleTopicClick(index) {
        // Update active button state
        document.querySelectorAll('.topic-btn').forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });

        currentSet = quizData[index];

        if (!studentInfo.name || !studentInfo.homeroom) {
            // Need to register first
            registrationView.classList.add('active');
            quizView.classList.remove('active');
        } else {
            // Proceed to quiz
            showQuizView();
            renderQuiz();
        }
    }

    function showQuizView() {
        registrationView.classList.remove('active');
        quizView.classList.add('active');
        resultsContainer.classList.remove('active');
        feedbackList.innerHTML = '';
        scoreDisplay.textContent = '';
        actionContainer.style.display = 'block';
    }

    // Helper to shuffle an array
    function shuffleArray(array) {
        const newArr = [...array];
        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        return newArr;
    }

    function renderQuiz() {
        quizRoot.innerHTML = `
            <div class="quiz-header">
                <h2>${currentSet.title}</h2>
                <p>${currentSet.description}</p>
            </div>
            <div id="questions-container"></div>
        `;

        const qContainer = document.getElementById('questions-container');
        
        // Randomize questions for this session
        randomizedQuestions = shuffleArray(currentSet.questions);

        randomizedQuestions.forEach((q, qIndex) => {
            const block = document.createElement('div');
            block.className = 'question-block';
            block.dataset.index = qIndex;
            block.dataset.type = q.type;

            let html = `<div class="question-text">${qIndex + 1}. ${q.question}</div>`;

            if (q.type === 'mcq') {
                html += `<ul class="options-list">`;
                q.options.forEach((opt, oIndex) => {
                    html += `
                        <li class="option-item">
                            <label class="option-label">
                                <input type="radio" name="q${qIndex}" value="${oIndex}" class="option-input">
                                ${opt}
                            </label>
                        </li>
                    `;
                });
                html += `</ul>`;
            } else if (q.type === 'fill-blank') {
                html += `
                    <input type="text" class="fill-blank-input" name="q${qIndex}" placeholder="Type your answer here...">
                    ${q.hint ? `<div class="hint">Hint: ${q.hint}</div>` : ''}
                `;
            } else if (q.type === 'match') {
                // Shuffle right side for options
                const rightOptions = shuffleArray([...q.pairs].map(p => p.right));
                
                html += `<div class="match-container">
                    <div class="match-column">
                        ${q.pairs.map(p => `<div class="match-item">${p.left}</div>`).join('')}
                    </div>
                    <div class="match-column">
                        ${q.pairs.map((p, i) => `
                            <select class="match-select" name="q${qIndex}_${i}">
                                <option value="">-- Select Match --</option>
                                ${rightOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                            </select>
                        `).join('')}
                    </div>
                </div>`;
            } else if (q.type === 'descriptive') {
                html += `
                    <textarea class="descriptive-input" name="q${qIndex}" placeholder="Write your explanation here..."></textarea>
                `;
            }

            block.innerHTML = html;
            qContainer.appendChild(block);
        });
    }

    submitBtn.addEventListener('click', () => {
        if (!currentSet) return;

        let score = 0;
        let totalGradable = 0;
        feedbackList.innerHTML = '';

        const blocks = document.querySelectorAll('.question-block');

        blocks.forEach((block) => {
            const index = parseInt(block.dataset.index);
            const type = block.dataset.type;
            const q = randomizedQuestions[index];
            
            let isCorrect = false;
            let feedbackHtml = `<strong>Q${index + 1}: ${q.question}</strong><br>`;

            if (type === 'mcq') {
                totalGradable++;
                const selected = block.querySelector(`input[name="q${index}"]:checked`);
                if (selected && parseInt(selected.value) === q.correctAnswer) {
                    isCorrect = true;
                    score++;
                    feedbackHtml += `Your answer: ${q.options[selected.value]} (Correct)`;
                } else {
                    feedbackHtml += `Your answer: ${selected ? q.options[selected.value] : 'Not answered'}<br>`;
                    feedbackHtml += `Correct answer: ${q.options[q.correctAnswer]}`;
                }
            } else if (type === 'fill-blank') {
                totalGradable++;
                const input = block.querySelector(`input[name="q${index}"]`).value.trim();
                if (input.toLowerCase() === q.correctAnswer.toLowerCase()) {
                    isCorrect = true;
                    score++;
                    feedbackHtml += `Your answer: ${input} (Correct)`;
                } else {
                    feedbackHtml += `Your answer: ${input || 'Not answered'}<br>`;
                    feedbackHtml += `Correct answer: ${q.correctAnswer}`;
                }
            } else if (type === 'match') {
                totalGradable++;
                let allCorrect = true;
                const selects = block.querySelectorAll(`select`);
                let matchFeedback = "<ul>";
                
                selects.forEach((select, i) => {
                    const selectedValue = select.value;
                    const correctValue = q.pairs[i].right;
                    
                    if (selectedValue === correctValue) {
                        matchFeedback += `<li>${q.pairs[i].left} -> ${selectedValue} (Correct)</li>`;
                    } else {
                        allCorrect = false;
                        matchFeedback += `<li>${q.pairs[i].left} -> ${selectedValue || 'Not answered'} (Incorrect, should be: ${correctValue})</li>`;
                    }
                });
                matchFeedback += "</ul>";
                
                if (allCorrect) {
                    isCorrect = true;
                    score++;
                }
                feedbackHtml += matchFeedback;
            } else if (type === 'descriptive') {
                const text = block.querySelector(`textarea`).value.trim();
                feedbackHtml += `Your answer: ${text || 'Not answered'}<br>`;
                feedbackHtml += `<div class="sample-answer"><strong>Sample Answer / Key Points:</strong> ${q.sampleAnswer}</div>`;
            }

            const feedbackDiv = document.createElement('div');
            if (type === 'descriptive') {
                feedbackDiv.className = 'feedback-item feedback-descriptive';
                feedbackDiv.innerHTML = feedbackHtml + '<br><em>(Descriptive answers are self-graded against the sample)</em>';
            } else {
                feedbackDiv.className = `feedback-item ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`;
                feedbackDiv.innerHTML = feedbackHtml;
            }
            
            feedbackList.appendChild(feedbackDiv);
        });

        scoreDisplay.textContent = `You scored ${score} out of ${totalGradable} (Excluding descriptive questions)`;
        resultsContainer.classList.add('active');
        
        // Save the score
        saveScoreToServer(currentSet.title, score, totalGradable);

        // Scroll to results
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
    });

    // Mock function to "store" scores. 
    // In a real environment on GitHub Pages, this should POST to a Google Apps Script Web App or Firebase.
    function saveScoreToServer(topic, score, maxScore) {
        const payload = {
            studentName: studentInfo.name,
            homeroom: studentInfo.homeroom,
            topic: topic,
            score: score,
            maxScore: maxScore,
            timestamp: new Date().toISOString()
        };

        console.log("Saving Score to Database:", payload);
        
        // Example of saving to LocalStorage for offline tracking:
        let savedScores = JSON.parse(localStorage.getItem('sdi_scores') || '[]');
        savedScores.push(payload);
        localStorage.setItem('sdi_scores', JSON.stringify(savedScores));

        /* 
        TO TEACHER: To actually collect this in a Google Sheet, you would use fetch():
        
        fetch('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL', {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        */
    }
});
