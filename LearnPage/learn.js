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

// Learn js
document.getElementById('continue-btn').addEventListener("click", () => {
  let subject = document.querySelector('input[name="subject"]:checked');
  let importance = document.querySelector('input[name="importance"]:checked');
  let difficulty = document.querySelector('input[name="difficulty"]:checked');

  if (!subject || !importance || !difficulty) {
    alert("Please make sure to select for all required fields!");
    return;
  }

  localStorage.setItem('selectedSubject', subject.value);
  localStorage.setItem('selectedImportance', importance.value);
  localStorage.setItem('selectedDifficulty', difficulty.value);

  window.location.href = "TopicPage/topic.html";
});
// accessibility popup


let accessContainer = document.querySelector('.access-container');
let accessBtn = document.querySelector('.fa-universal-access');

accessBtn.addEventListener('click', () => {
  accessContainer.classList.toggle('open');
});
