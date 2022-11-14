// Put code of task B here

function addArticle(){
    const main = document.querySelector('main');
    const article = document.createElement('article');
    const header = document.createElement('header');
    const h2 = document.createElement('h2');
    const figure = document.createElement('figure');
    const image = document.createElement('img');
    const caption = document.createElement('figcaption');
    const text = document.createElement('p');
    
    h2.textContent = "Article header";
    image.src = "http://placekitten.com/320/160";
    image.alt = "title";
    caption.textContent = "Caption";
    text.textContent = "Here is some text. Here is some text. Here is some text. Here is some text."

    header.append(h2);
    figure.append(image);
    figure.append(caption);

    article.append(header);
    article.append(figure);
    article.append(text);

    main.append(article);


 
 }
 addArticle();