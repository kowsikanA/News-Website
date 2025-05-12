
const content_url = 'https://newsapi.org/v2/top-headlines?language=en&apiKey=c790204c3a4b4ee4a1d6a30d7f76e842';


  const index = parseInt(localStorage.getItem('articleIndex'));

  fetch(content_url).then(response => response.json())
    .then(function(data){
      const left_column = document.querySelector(".left-col");

      // const article_author = document.querySelector(".article-author");
      // const article_date = document.querySelector(".article-date");

      const article_author = document.createElement("h4");
      article_author.setAttribute('class', 'article_author');

      const article_date = document.createElement("h4");
      article_date.setAttribute('class', 'article_date');

      const article_card = document.createElement('div');
      article_card.setAttribute('class', 'article-card');

      const article_title = document.createElement('h2');
      article_title.setAttribute('class', 'article-title');
      article_title.innerHTML = `${data.articles[index].title}`

      const article_img = document.createElement('img');
      article_img.setAttribute('class', 'article-img');
      article_img.src = `${data.articles[index].urlToImage}`


      const article_info = document.createElement('p');
      article_info.setAttribute('class', 'article-information');
      article_info.innerHTML = `${data.articles[index].content}`
      article_author.innerHTML = `Author: ${data.articles[index].author}`
      article_date.innerHTML = `Date: ${data.articles[index].publishedAt}`
      // article_author.appendChild(bold_type);

      
      article_card.appendChild(article_title);
      article_card.appendChild(article_author);
      article_card.appendChild(article_date);
      article_card.appendChild(article_img);
      article_card.appendChild(article_info);
      
      
      left_column.appendChild(article_card);

      
    });

