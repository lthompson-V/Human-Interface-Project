let moreTab = document.querySelector('.more-tab');
let moreContent = document.querySelector('.more-contents');

moreTab.addEventListener('mouseenter', () => {
  moreContent.classList.add('show');
});

moreTab.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!moreContent.matches(':hover')) {
      moreContent.classList.remove('show');
    }
  }, 300);
});

moreContent.addEventListener('mouseleave', () => {
  moreContent.classList.remove('show');
});

let subject = localStorage.getItem('selectedSubject');

if (!subject) {
  console.warn("No subject found in localStorage, return to Learn page.");
  window.location.href = "../../LearnPage/learn.html";
}

document.getElementById("subject-display").textContent = "Subject: " + subject;
let importance = localStorage.getItem('selectedImportance');
let difficulty = localStorage.getItem('selectedDifficulty');

console.log("Selected Subject:", subject);
console.log("Selected Importance:", importance);
console.log("Selected Difficulty:", difficulty);

const topicsBySubject = {
  cs1: [
    "Variable",
    "Data Types",
    "Functions",
    "Arrays",
    "Recursion",
    "Sorting Algorithms",
    "Searching Algorithms",
    "Data Structures"
  ],
  cs2: [
    "Abstract Data Types",
    "Classes",
    "Pointers",
    "Dynamic Arrays",
    "Templates",
    "Stacks",
    "Queues",
    "Linked Lists",
    "Trees",
    "Double Linked Lists",
    "Containers/Iterators",
    "Inheritance"
  ],

  cs3: [
    "Associative Containers",
    "Sequential Containers",
    "Algorithms",
    "Singleton",
    "Abstract vs. Concrete Classes",
    "Casting",
    "Bridge Design Pattern",
    "Composite Design Pattern",
    "Command Design Pattern",
    "Mediator Design Pattern",
    "Memento Design Pattern",
    "Prototype Design Pattern",
    "State Design Pattern",
    "Visitor Design Pattern",
    "Adapter Design Pattern",
    "Decorator Design Pattern",
    "Observer Design Pattern",
    "Chain of Responsibility Design Pattern",
    "Flyweight Design Pattern"
  ],

  "computer-communication-networks": [
    "TCP",
    "UDP",
    "IP",
    "Go-Back-In",
    "Selective Repeat",
    "Congestion vs. Flow Control"
  ],

  "graphic-design": [
    "HTML/CSS Basics",
    "JavaScript Fundamentals"
  ]
};

let container = document.getElementById('topics-container');
let topics = topicsBySubject[subject];
topics.forEach(topicName => {
  let wrapper = document.createElement("div");
  wrapper.classList.add("topic-row");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "topics";
  checkbox.value = topicName;

  let label = document.createElement("label");
  label.textContent = topicName;
  
  wrapper.appendChild(checkbox);
  wrapper.appendChild(label);

  container.appendChild(wrapper);
});

document.getElementById("continue-btn").addEventListener("click", () => {
    
    let checkedBoxes = document.querySelectorAll('input[name="topics"]:checked');
    let selectedTopics = [];

    checkedBoxes.forEach(box => {
        selectedTopics.push(box.value);
    });

    if (selectedTopics.length === 0) {
        alert("Please select at least one topic before continuing!");
        return;
    }
    localStorage.setItem("selectedTopics", JSON.stringify(selectedTopics));
    window.location.href = "../FlashcardsPage/flashcards.html";

});
