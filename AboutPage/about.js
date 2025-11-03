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
