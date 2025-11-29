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


// accessibility popup

let accessContainer = document.querySelector('.access-container');
let accessBtn = document.querySelector('.fa-universal-access');

accessBtn.addEventListener('click', () => {
  accessContainer.classList.toggle('open');
});

// Subcategory functionality
const subcategoryButtons = document.querySelectorAll('.subcategory-btn');
const subcategoryArticles = document.querySelectorAll('.subcategory-articles');

subcategoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetSubcategory = button.getAttribute('data-subcategory');
    
    // Remove active class from all buttons
    subcategoryButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    button.classList.add('active');
    
    // Hide all article lists
    subcategoryArticles.forEach(articles => {
      articles.classList.add('hidden');
    });
    
    // Show the selected subcategory's articles
    const targetArticles = document.querySelector(`.subcategory-articles[data-subcategory="${targetSubcategory}"]`);
    if (targetArticles) {
      targetArticles.classList.remove('hidden');
    }
  });
});

