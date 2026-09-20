document.addEventListener('DOMContentLoaded', () => {
    const topicSelector = document.getElementById('topic-selector');
    const quizRoot = document.getElementById('quiz-root');
    const actionContainer = document.getElementById('action-container');
    const submitBtn = document.getElementById('submit-btn');
    const resultsContainer = document.getElementById('results-container');
    const scoreDisplay = document.getElementById('score-display');
    const feedbackList = document.getElementById('feedback-list');

    let currentSet = null;

    // Initialize Topic Buttons
    quizData.forEach((set, index) => {
        const btn = document.createElement('button');
        btn.className = 'topic-btn';
        btn.textContent = set.title;
        btn.onclick = () => loadQuiz(index);
        topicSelector.appendChild(btn);
    });

    function loadQuiz(index) {
        // Reset state
        resultsContainer.classList.remove('active');
        feedbackList.innerHTML = '';
        scoreDisplay.textContent = '';
        
        // Update active button
        document.querySelectorAll('.topic-btn').forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });

        currentSet = quizData[index];
        renderQuiz(currentSet);
        actionContainer.style.display = 'block';
    }

    function renderQuiz(set) {
        quizRoot.innerHTML = `
            <div class="quiz-container active">
                <div class="quiz-header">
                    <h2>${set.title}</h2>
                    <p>${set.description}</p>
                </div>
                <div id="questions-container"></div>
            </div>
        `;

        const qContainer = document.getElementById('questions-container');

        set.questions.forEach((q, qIndex) => {
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
                const rightOptions = [...q.pairs].map(p => p.right).sort(() => Math.random() - 0.5);
                
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
            const q = currentSet.questions[index];
            
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
                // Not graded automatically
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
        
        // Scroll to results
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
    });
});
