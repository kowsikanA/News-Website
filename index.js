
var url = 'https://newsapi.org/v2/top-headlines?language=en&apiKey=c790204c3a4b4ee4a1d6a30d7f76e842'
var sample_url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c790204c3a4b4ee4a1d6a30d7f76e842'


fetch(url).then(response => response.json())
  .then(function (data) {
    console.log(data.articles);
    const card_group = document.querySelector('.card-group');

    data.articles.slice(0, 7).forEach((element, index) => {
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

      let t = element.title;
      
      title.innerHTML = `${element.title}`;

      let i = element.urlToImage;

      thumbnail.src = `${element.urlToImage}`;

      let author_check = element.author;
      if (author_check === null) {
        author_check = "";
        author.innerHTML = `${author_check}`;
      }
      else {
        author.innerHTML = `${element.author}`;
      }
      description.innerHTML = `${element.description} ${index}`

      container_info.appendChild(author);
      container_info.appendChild(description);
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

$(document).ready(function () {
  $(document).on("click", ".card", function () {
    const index = $(this).index();

    localStorage.setItem('articleIndex', index);
    window.location.href = 'article.html';
  });
});

 