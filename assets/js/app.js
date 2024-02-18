// Import Movies Array
import movies from './movies.js';

// DOM Elements
const container = document.querySelector('section');

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

// renderMovies(movies);
