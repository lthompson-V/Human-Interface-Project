// Save popup behavior
function showSavedPopup() {
    const popup = document.getElementById("savedPopup");
    popup.style.opacity = "1";

    setTimeout(() => {
        popup.style.opacity = "0";
    }, 1600);
}

// Add new question
function addQuestion() {
    const container = document.getElementById("questionsContainer");
    const number = container.children.length + 1;

    const block = document.createElement("div");
    block.className = "question-block";

    block.innerHTML = `
        <h2 class="question-number">Question #${number}:</h2>

        <label>Enter Question:</label>
        <input type="text" class="question-input">

        <label>Enter Answer:</label>
        <input type="text" class="answer-input">
    `;

    container.appendChild(block);
}