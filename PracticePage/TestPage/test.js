//Code that will create test on test.html
document.addEventListener("DOMContentLoaded", () => {
    let testInProgress = true;
    const questiontype = JSON.parse(localStorage.getItem("selectedQuestionType"));
    const subject = localStorage.getItem("selectedSubject");
    let numberOfQuestions = localStorage.getItem("selectedNumberOfQuestions");

    if (numberOfQuestions === "custom") { 
        numberOfQuestions = parseInt(localStorage.getItem("custom-number"));
    } else {
        numberOfQuestions = parseInt(numberOfQuestions);
    }

    const main = document.querySelector("main");
    //create a modal in case user forgot to answer some questions
        const modal = document.createElement("div");
        modal.id = "alert-modal";
        modal.innerHTML = `
            <div class="alert-box">
                <h2>Hold on!</h2>
                <p>Please answer all questions before submitting!</p>
                <button id="modal-close-btn">Continue</button>
            </div>
        `;
        document.body.appendChild(modal);
        document.addEventListener("click", (e) => {
            if (e.target.id === "modal-close-btn") {
                modal.style.display = "none";
            }
        });

    const subjectQuestions = Question_Bank[subject];
    //this will create user's number of questions and mix them so it isn't the same order
    let chosenQuestions = [];
    questiontype.forEach(type => {
    const pool = subjectQuestions.filter(q => q.type === type);
    if (pool.length > 0) 
        {
            chosenQuestions.push(pool[Math.floor(Math.random() * pool.length)]);
        }
    });

    const all = subjectQuestions.filter(q => questiontype.includes(q.type)); //put all wanted types here
    let remaining = all.filter(q => !chosenQuestions.includes(q)); //to avoid duplicate questions of a type
    remaining = remaining.sort(() => Math.random() - 0.5);
    while (chosenQuestions.length < numberOfQuestions && remaining.length > 0) {
        chosenQuestions.push(remaining.shift()); //add questions until user preference is reached
    }
    const selected = chosenQuestions.sort(() => Math.random() - 0.5);

    //Shuffles MCQ answers so they all aren't in the same place every single time
    function shuffleOptions(optionsArray) {
    return optionsArray
        .map((opt, i) => ({ text: opt, index: i }))
        .sort(() => Math.random() - 0.5);
    }

    const answerStore = {}; // store user answers by question index
    function renderAllQuestions() {
        main.innerHTML = "";

        selected.forEach((q, index) => {
            const wrapper = document.createElement("div");
            wrapper.classList.add("question-block");

            const questionText = document.createElement("h2");
            questionText.textContent = `Question ${index + 1}: ${q.question}`;
            wrapper.appendChild(questionText);

            if (q.type === "multiple-choice") {
            const shuffled = shuffleOptions(q.options); // <- use shuffled version

            shuffled.forEach(obj => {
                const btn = document.createElement("button");
                btn.textContent = obj.text;
                btn.classList.add("option-btn");
                
                btn.dataset.index = index;
                btn.dataset.value = obj.index; // keep correct mapping

                btn.addEventListener("click", () => {
                    answerStore[index] = obj.index;

                    [...wrapper.querySelectorAll("button")].forEach(b => {
                        b.style.background = "";
                    });
                    btn.style.background = "#c8dde3";
                });

                wrapper.appendChild(btn);
            });
        }


            if (q.type === "true-false") {
                ["True", "False"].forEach(choice => {
                    const btn = document.createElement("button");
                    btn.textContent = choice;
                    btn.classList.add("option-btn");
                    btn.dataset.index = index;

                    btn.addEventListener("click", () => {
                        const value = (choice === "True");
                        answerStore[index] = value;

                        [...wrapper.querySelectorAll("button")].forEach(b => {
                            b.style.background = "";
                        });
                        btn.style.background = "#c8dde3";
                    });

                    wrapper.appendChild(btn);
                });
            }

            if (q.type === "fill-in-the-blank") {
                const input = document.createElement("input");
                input.type = "text";
                input.addEventListener("input", () => {
                    answerStore[index] = input.value.trim().toLowerCase();
                });

                wrapper.appendChild(input);
            }

            if (q.type === "matching") {
                const section = document.createElement("div");
                section.classList.add("matching-container");

                const shuffledRight = q.right
                    .map((item, i) => ({ item, index: i }))
                    .sort(() => Math.random() - 0.5);

                const selections = [];

                q.left.forEach((left, leftIndex) => {
                    const row = document.createElement("div");
                    row.classList.add("match-row");

                    const leftLabel = document.createElement("span");
                    leftLabel.textContent = left;

                    const dropdown = document.createElement("select");
                    dropdown.innerHTML = `<option value="">Select</option>`;

                    shuffledRight.forEach(obj => {
                        const opt = document.createElement("option");
                        opt.value = obj.index;
                        opt.textContent = obj.item;
                        dropdown.appendChild(opt);
                    });

                    dropdown.addEventListener("change", () => {
                        selections[leftIndex] = parseInt(dropdown.value);
                        answerStore[index] = selections;
                    });

                    row.appendChild(leftLabel);
                    row.appendChild(dropdown);
                    section.appendChild(row);
                });

                wrapper.appendChild(section);
            }

            main.appendChild(wrapper);
        });

        const finishBtn = document.createElement("button");
        finishBtn.textContent = "Finish Test";
        finishBtn.classList.add("finish-btn");
        finishBtn.addEventListener("click", checkAllAnswers);
        main.appendChild(finishBtn);
    }

    // error handling that makes sure user doesn't leave by accident
    window.addEventListener("beforeunload", (e) => {
        if (testInProgress) {
            e.preventDefault();
            e.key = "";
        }
    });

    // dialog message when user clicks nav w/o finishing test
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", (e) => {
            if (testInProgress) {
                e.preventDefault();

                const leave = confirm("Are you sure you want to leave? Your test progress will be lost.");

                if (leave) {
                    testInProgress = false;
                    window.location.href = link.href;
                }
            }
        });
    });

    function checkAllAnswers() {
    for (let i = 0; i < selected.length; i++) {

        if (answerStore[i] === undefined || answerStore[i] === "") {
            document.getElementById("alert-modal").style.display = "flex";
            return;
        }

        // to avoid users from forgetting to answer all questions in matching
        if (selected[i].type === "matching") {
            const arr = answerStore[i];
            if (!arr || arr.length !== selected[i].left.length) {
                document.getElementById("alert-modal").style.display = "flex";
                return;
            }

            for (let k = 0; k < arr.length; k++) {
                if (isNaN(arr[k])) {
                    document.getElementById("alert-modal").style.display = "flex";
                    return;
                }
            }
        }
    }

        showResults();
    }

    function showResults() {
        testInProgress = false;
        let score = 0;
        selected.forEach((q, index) => {
            if (JSON.stringify(q.answer) === JSON.stringify(answerStore[index])) {
                score++;
            }
        });
        main.innerHTML = `
        <h1>Test Complete!</h1>
        <h2>Your Score: ${score} / ${selected.length}</h2>

        <button id="review-btn" class="finish-btn">Review Answers</button>
        <button id="practice-btn" class="finish-btn">Back to Practice</button>
        <button id="learn-btn" class="finish-btn">Back to Learn</button>
    `;

        document.getElementById("review-btn").addEventListener("click", showReviewPage);
        document.getElementById("practice-btn").addEventListener("click", () => {
            window.location.href = "../../PracticePage/practice.html";
        });

        document.getElementById("learn-btn").addEventListener("click", () => {
            window.location.href = "../../LearnPage/learn.html";
        });
    }

    function showReviewPage() {
        testInProgress = false;
        main.innerHTML = "<h1>Review Answers</h1>";

        selected.forEach((q, index) => {
            const wrapper = document.createElement("div");
            wrapper.classList.add("review-block");

            const userAns = answerStore[index];
            const correctAns = q.answer;

            // check correct answers to compare to user's wrong answers later
            const isCorrect = JSON.stringify(userAns) === JSON.stringify(correctAns);

            const statusIcon = document.createElement("span");
            statusIcon.classList.add("status-icon");
            statusIcon.textContent = isCorrect ? "✔" : "✖";

            const questionText = document.createElement("h2");
            questionText.textContent = `Question ${index + 1}: ${q.question}`;

            wrapper.appendChild(statusIcon);
            wrapper.appendChild(questionText);

            // MCQ check
            if (q.type === "multiple-choice") {
                q.options.forEach((opt, i) => {
                    const p = document.createElement("p");

                    // user's pick
                    if (userAns === i) {
                        p.style.color = isCorrect ? "#a6ffb0" : "#ff9f9f";
                        p.style.fontWeight = "bold";
                    }

                    // indicate correct answer
                    if (i === correctAns) {
                        p.textContent = `→ ${opt}`;
                    } else {
                        p.textContent = opt;
                    }

                    wrapper.appendChild(p);
                });
            }

            // TRUE / FALSE REVIEW
            if (q.type === "true-false") {
                ["True", "False"].forEach(choice => {
                    const value = choice === "True";
                    const p = document.createElement("p");

                    if (userAns === value) {
                        p.style.color = isCorrect ? "#a6ffb0" : "#ff9f9f";
                        p.style.fontWeight = "bold";
                    }

                    if (correctAns === value) {
                        p.textContent = `→ ${choice}`;
                    } else {
                        p.textContent = choice;
                    }

                    wrapper.appendChild(p);
                });
            }

            // FILL IN THE BLANK
            if (q.type === "fill-in-the-blank") {
                const yourAns = document.createElement("p");
                yourAns.innerHTML = `<strong>Your answer:</strong> ${userAns}`;
                yourAns.style.color = isCorrect ? "#a6ffb0" : "#ff9f9f";

                const correct = document.createElement("p");
                correct.innerHTML = `<strong>Correct answer:</strong> ${correctAns}`;

                wrapper.appendChild(yourAns);
                wrapper.appendChild(correct);
            }

            // MATCHING REVIEW
            if (q.type === "matching") {
                q.left.forEach((leftItem, leftIndex) => {
                    const row = document.createElement("p");

                    const userPickedIndex = userAns[leftIndex];
                    const correctIndex = correctAns[leftIndex];

                    const userRight = q.right[userPickedIndex];
                    const correctRight = q.right[correctIndex];

                    if (userPickedIndex === correctIndex) {
                        row.style.color = "#a6ffb0";
                    } else {
                        row.style.color = "#ff9f9f";
                    }

                    row.innerHTML = `
                        <strong>${leftItem}</strong> → ${userRight}
                        ${userPickedIndex !== correctIndex ? `<br><em>Correct:</em> ${correctRight}` : ""}
                    `;

                    wrapper.appendChild(row);
                });
            }

            main.appendChild(wrapper);
        });

        const backBtn = document.createElement("button");
        const backBtn2 = document.createElement("button");
        backBtn.textContent = "Take Another Test";
        backBtn2.textContent = "Review Flashcards";
        backBtn.classList.add("finish-btn");
        backBtn2.classList.add("finish-btn");
        backBtn.addEventListener("click", () => {
            window.location.href = "../practice.html";
        });
        backBtn2.addEventListener("click", () => {
            window.location.href = "../../LearnPage/learn.html";
        });

        main.appendChild(backBtn);
        main.appendChild(backBtn2);
    }

    renderAllQuestions();
});