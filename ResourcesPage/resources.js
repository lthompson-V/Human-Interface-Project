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

// Category pagination
let currentPage = 0;
const categoriesPerPage = 4;
const categoriesGrid = document.getElementById('categoriesGrid');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const totalCategories = 5;
const totalPages = Math.ceil(totalCategories / categoriesPerPage);

function updatePagination() {
  // Calculate the translateX value to show the current page
  // Since grid is 200% wide, each page is 50% of the grid width
  const translateX = -(currentPage * 50);
  categoriesGrid.style.transform = `translateX(${translateX}%)`;
  
  // Update button states
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === totalPages - 1;
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updatePagination();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < totalPages - 1) {
    currentPage++;
    updatePagination();
  }
});

// Initialize pagination on page load
updatePagination();

// Search functionality
const articles = [
    {
        title: "Lorem Ipsum Account",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "account/article.html"
    },
    {
        title: "Lorem Ipsum Billing",
        body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "billing/article.html"
    },
    {
        title: "Lorem Ipsum Teachers",
        body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        link: "teachers/article.html"
    },
    {
        title: "Lorem Ipsum Student",
        body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
        link: "student/article.html"
    },
    {
        title: "Lorem Ipsum Safety",
        body: "Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
        link: "safety/article.html"
    }
];

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const mainContent = document.getElementById('mainContent');
const searchResults = document.getElementById('searchResults');
const searchQueryText = document.getElementById('searchQueryText');
const resultsCount = document.getElementById('resultsCount');
const searchResultsList = document.getElementById('searchResultsList');
const noResults = document.getElementById('noResults');

function performSearch(query) {
    if (!query || query.trim() === '') {
        // Show main content, hide results
        mainContent.style.display = 'flex';
        searchResults.style.display = 'none';
        return;
    }
    
    const searchTerm = query.toLowerCase().trim();
    const matchingArticles = articles.filter(article => 
        article.title.toLowerCase().includes(searchTerm)
    );
    
    // Hide main content, show results
    mainContent.style.display = 'none';
    searchResults.style.display = 'block';
    
    // Update search query text
    searchQueryText.textContent = `Results for '${query}'`;
    
    if (matchingArticles.length === 0) {
        // Show no results message
        searchResultsList.style.display = 'none';
        noResults.style.display = 'block';
        resultsCount.textContent = '0 results found';
    } else {
        // Show results
        noResults.style.display = 'none';
        searchResultsList.style.display = 'flex';
        resultsCount.textContent = `${matchingArticles.length} result${matchingArticles.length !== 1 ? 's' : ''} found`;
        
        // Clear previous results
        searchResultsList.innerHTML = '';
        
        // Add matching articles
        matchingArticles.forEach(article => {
            const resultItem = document.createElement('a');
            resultItem.href = article.link;
            resultItem.className = 'search-result-item';
            
            resultItem.innerHTML = `
                <h3 class="search-result-title">${article.title}</h3>
                <p class="search-result-preview">${article.body}...</p>
            `;
            
            searchResultsList.appendChild(resultItem);
        });
    }
}

searchBtn.addEventListener('click', () => {
    performSearch(searchInput.value);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch(searchInput.value);
    }
});

// Back button functionality
const backToResources = document.getElementById('backToResources');
backToResources.addEventListener('click', (e) => {
    e.preventDefault();
    // Clear search input
    searchInput.value = '';
    // Show main content, hide results
    mainContent.style.display = 'flex';
    searchResults.style.display = 'none';
});