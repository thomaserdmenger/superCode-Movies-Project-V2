// Import Movies Array
import movies from './movies.js';

// DOM Elements
const container = document.querySelector('section');
const form = document.querySelector('form');
const callToAction = document.querySelector('.call-to-action');

// Render Data
const renderMovies = (arr) => {
  const data = arr
    .map((movie) => {
      return `
        <div class="movies">
            <p class="movies-title">${movie[0]}</p>
            <p>${movie[1]}</p>
            <p>${movie[2]}</p>
            <p>${movie[3]}</p>
            ${movie[4].map((item) => `<p>${item}</p>`).join('')}
            <p>${movie[5]}</p>
        </div>
    `;
    })
    .join('');

  container.innerHTML = data;
};

// Show Search
const showSearch = (e) => {
  if (e.key !== ' ') return;

  form.style.display = 'inline-block';
  callToAction.style.display = 'none';
  container.innerHTML = '';
  document.querySelector('input[type="text"]').focus();
};

// Filter Movies
const filterMovies = (e) => {
  e.preventDefault();

  // Get User Input
  const userInput = document
    .querySelector('input[type="text"]')
    .value.toLowerCase();

  console.log(userInput);

  // Filter Movies
  const filteredMovies = movies.filter((movie) =>
    movie[0].toLowerCase().includes(userInput)
  );

  console.log(filteredMovies);

  // Styles
  form.style.display = 'none';
  document.querySelector('input[type="text"]').value = '';

  // Pass filtered Movies to Render Function
  renderMovies(filteredMovies);
};

// Event Listeners
window.addEventListener('keydown', showSearch);
form.addEventListener('submit', filterMovies);
