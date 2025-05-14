# Global News Network (GNN)

**GNN (Global News Network)** is a simple, responsive web application that fetches and displays the latest news articles using the [NewsAPI](https://newsapi.org/). The website allows users to explore top headlines across general, sports, and political categories.

## Features

- 📰 Fetches real-time news headlines using the NewsAPI.
- 🔎 Includes a static search bar UI (not yet functional).
- 🏀🚨 Browse news by categories (Sports and Politics).
- 📱 Responsive layout with modern design using HTML, CSS, and JavaScript.
- 🌐 Dynamic rendering of articles with author, publish date, description, and image.

## Files Overview

- `index.html`  
  Main HTML structure of the website. Contains a navigation bar and a section where news articles are dynamically loaded.

- `style.css`  
  Handles the visual styling, layout, and responsiveness. Includes styles for the navbar, cards, buttons, etc.

- `index.js`  
  JavaScript logic to fetch data from the NewsAPI and dynamically generate HTML elements for news articles. Handles category-based filtering.

## How It Works

1. On page load, the site fetches top headlines in English using a preset API key.
2. When users click on "Sports" or "Politics" in the navbar, the JavaScript updates the API endpoint to fetch relevant category-based news.
3. The fetched news is displayed in a card-based layout with title, image, description, author, publish date, and a link to the full article.

## Setup & Usage

### Prerequisites
- A web browser
- Internet connection (to fetch news and use fonts/CDNs)



## To Do / Improvements

- Implement the search functionality.
- Handle API errors and display fallback messages.
- Add support for more news categories.
- Improve accessibility (e.g., alt tags, semantic HTML).
- Paginate or lazy-load articles for better UX.

## License

This project is for educational purposes. Please check the NewsAPI usage terms before deploying or using in production.
