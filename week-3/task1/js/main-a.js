// Put code of task A here

function addArticle(){
   const main = document.querySelector('main');
   main.innerHTML+= ` <article>
   <header>
       <h2>Article header</h2>
   </header>
   <figure>
       <img src="http://placekitten.com/320/160" alt="title">
       <figcaption>Caption</figcaption>
   </figure>
   <p>Here is some text. Here is some text. Here is some text. Here is some text.</p>
</article> ` ;

}
addArticle();