const moduleContainer = document.getElementById("moduleContainer");
const addBtn = document.getElementById("addQuestionBtn");
const saveBtn = document.getElementById("saveModule");
const popup = document.getElementById("savePopup");

let questionCount = 0;

function addQuestion() {
    questionCount++;

    const block = document.createElement("div");
    block.className = "question-block";

    block.innerHTML = `
        <h2>Question #${questionCount}</h2>

        <div class="input-row">
            <label>Enter Question:</label>
            <input type="text">
        </div>

        <div class="input-row">
            <label>Correct Answer:</label>
            <input type="text">
        </div>

        <div class="input-row">
            <label>Wrong Answer #1:</label>
            <input type="text">
        </div>

        <div class="input-row">
            <label>Wrong Answer #2:</label>
            <input type="text">
        </div>

        <div class="input-row">
            <label>Wrong Answer #3:</label>
            <input type="text">
        </div>
    `;

    moduleContainer.appendChild(block);
}

addBtn.addEventListener("click", addQuestion);

saveBtn.addEventListener("click", () => {
    popup.style.display = "block";
    setTimeout(() => popup.style.display = "none", 1500);
});

// Add first question automatically
addQuestion();