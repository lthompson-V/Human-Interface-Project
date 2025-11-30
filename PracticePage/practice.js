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

document.getElementById('start-practice-btn').addEventListener("click", () => {
  let questiontype = [...document.querySelectorAll('input[name="question-type"]:checked')]
  let subject = document.querySelector('input[name="subject"]:checked');
  let numberOfQuestions = document.querySelector('input[name="number-of-questions"]:checked');
  if (questiontype.length === 0 || !subject || !numberOfQuestions) {
    alert("Please make sure to select for all required fields!");
    return;
  }

  localStorage.setItem('selectedQuestionType', JSON.stringify(questiontype.map(q => q.value)));
  localStorage.setItem('selectedSubject', subject.value);
  localStorage.setItem('selectedNumberOfQuestions', numberOfQuestions.value);
  //check if user wants custom number of questions and change variable in storage if thats the case
  if (numberOfQuestions.value === "custom") {
    const customValue = document.getElementById("custom-number-input").value;
    if (!customValue || parseInt(customValue) < 1) {
        alert("Please enter a valid custom number of questions (minimum 1).");
        return;
    }
    localStorage.setItem("custom-number", customValue);
  }


  window.location.href = "TestPage/test.html"; //send user to test page
});
// accessibility popup


let accessContainer = document.querySelector('.access-container');
let accessBtn = document.querySelector('.fa-universal-access');

accessBtn.addEventListener('click', () => {
  accessContainer.classList.toggle('open');
});
