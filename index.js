

const searchAPI = "https://newsapi.org/v2/everything?q=";
const apiKey = "&apiKey=c790204c3a4b4ee4a1d6a30d7f76e842";
const search = document.getElementById('query');

const form  = document.getElementById("form");

function getNews(url){
  fetch(url).then(response => response.json())
    .then(function (data) {
      console.log(data.articles);
      const card_group = document.querySelector('.card-group');
      card_group.innerHTML = '';
      data.articles.forEach((element) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const title = document.createElement("h2");
        title.setAttribute('class', 'title');

        const thumbnail = document.createElement('img');
        thumbnail.setAttribute('class', 'thumbnail');

        const container_info = document.createElement("div");
        container_info.setAttribute('class', 'container');

        const author = document.createElement("h4");
        author.setAttribute('class', 'author');

        const description = document.createElement("p");
        description.setAttribute('class', 'description');

        const default_image = document.createElement('div');
        default_image.setAttribute('class', 'default');

        const view_link_btn = document.createElement('a');
        view_link_btn.setAttribute('class', 'news-link');
        view_link_btn.innerHTML = 'View Link';
        view_link_btn.href = element.url;

        const published_date = document.createElement('h3');
        published_date.setAttribute('class', 'published-time');
        published_date.innerHTML = element.publishedAt.substring(0,10);

        let t = element.title;
        
        title.innerHTML = `${element.title}`;

        let i = element.urlToImage;

        thumbnail.src = `${element.urlToImage}`;

        let author_check = element.author;
        if (author_check === null) {
          author_check = "Author: N/A";
          author.innerHTML = `${author_check}`;
        }
        else {
          author.innerHTML = `Author: ${element.author}`;
        }
        description.innerHTML = `${element.description}`
  // 2000-00-00
  // 0123456789
        container_info.appendChild(author);
        container_info.appendChild(published_date)

        container_info.appendChild(description);

        container_info.appendChild(view_link_btn);

        card.appendChild(title);
        if (element.urlToImage) {
          card.appendChild(thumbnail);
        } else {
          card.appendChild(default_image);
        }
        card.appendChild(container_info);




        card_group.appendChild(card);



      });

    });
}


$(document).ready(function (){
  let url = 'https://newsapi.org/v2/top-headlines?language=en&apiKey=c790204c3a4b4ee4a1d6a30d7f76e842';



  getNews(url);
  
  $('.navbar a').on('click', function(e){
    e.preventDefault();
    
    const href = $(this).attr('href');
    if (href === "#sports"){
      url = 'https://newsapi.org/v2/top-headlines?category=sports&apiKey=c790204c3a4b4ee4a1d6a30d7f76e842';
    } 

    else if (href === "#politics"){
      url = 'https://newsapi.org/v2/top-headlines?category=politics&apiKey=c790204c3a4b4ee4a1d6a30d7f76e842'
    } 
    else{
        url = 'https://newsapi.org/v2/top-headlines?language=en&apiKey=c790204c3a4b4ee4a1d6a30d7f76e842';

    }

    getNews(url);
  });


})

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const card_group = document.querySelector('.card-group');
  card_group.innerHTML = '';
  const searchItem = search.value;

  if (searchItem){
    getNews(searchAPI + searchItem + apiKey);
    search.value;
  }
} );