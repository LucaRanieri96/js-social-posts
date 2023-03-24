/*
Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.*/
// Array che contiene le informazioni di tutti i post da stampare in pagina
const posts = [
  {
    id: 1,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=171",
    author: {
      name: "Phil Mangione",
      image: "https://unsplash.it/300/300?image=15",
    },
    likes: 80,
    created: "2021-06-25",
  },
  {
    id: 2,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=112",
    author: {
      name: "Sofia Perlari",
      image: "https://unsplash.it/300/300?image=10",
    },
    likes: 120,
    created: "2021-09-03",
  },
  {
    id: 3,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=234",
    author: {
      name: "Chiara Passaro",
      image: "https://unsplash.it/300/300?image=20",
    },
    likes: 78,
    created: "2021-05-15",
  },
  {
    id: 4,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=24",
    author: {
      name: "Luca Formicola",
      image: null,
    },
    likes: 56,
    created: "2021-04-03",
  },
  {
    id: 5,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=534",
    author: {
      name: "Alessandro Sainato",
      image: "https://unsplash.it/300/300?image=29",
    },
    likes: 95,
    created: "2021-03-05",
  },
];

/* 
Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed. 
*/

// mi creo una variabile per inserire all'interno dell'elemento della dom il markup del post in modo dinamico

const posts_dom_element = document.getElementById("container");

// ora ciclo all'iterno dell'array e per ogni oggetto di esso mi creo in dom un markup

posts.forEach((info) => {
  const markup = `
  <div class="post">
    <div class="post__header">
      <div class="post-meta">
        <div class="post-meta__icon">
          <img class="profile-pic" src="${info.author.image}" alt="${info.author.name}">
        </div>
        <div class="post-meta__data">
          <div class="post-meta__author">${info.author.name}</div>
          <div class="post-meta__time">${info.created}</div>
        </div>
      </div>
    </div>
    <div class="post__text">${info.content}</div>
    <div class="post__image">
      <img src="${info.media}" alt="">
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <a id="like_button" class="like-button  js-like-button" href="#" data-postid=""${info.id}"">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
          </a>
        </div>
        <div class="likes__counter">
          Piace a <b id="like-counter-1" class="js-likes-counter">"${info.likes}"</b> persone
        </div>
      </div>
    </div>
  </div>     
`;

  posts_dom_element.insertAdjacentHTML("beforeend", markup);
});
//BONUS 1 

// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

// mi creo un array vuoto dove salveremo gli ID dei post a cui abbiamo messo like
const postLiked = []
 
// mi creo un addeventlistener per il pulsante like
const like_dom_element = document.getElementById("like_button")
//console.log(like_dom_element);

// mi seleziono anche il numero di like che andrà incrementato
const likeCounter = document.getElementById("like-counter-1")


let numberOfLikes = Number.parseInt(likeCounter.textContent); //occhio qui! 👀👀👀👀

// prima della funzione mi dichiaro una variabile per contrassegnare lo stato dell'input e facilitarmi il lavoro con le condizioni
let isLiked = false

// mi scrivo la funzione del like button
function like() {
  if (!isLiked) {
    like_dom_element.classList.add('isLiked');
    numberOfLikes++;
    likeCounter.textContent = numberOfLikes;
    isLiked = !isLiked;
    console.log("hai cliccato sul tasto like");
  } else {
    like_dom_element.classList.remove('isLiked');
    numberOfLikes--;
    likeCounter.textContent = numberOfLikes;
    isLiked = !isLiked;
    console.log("hai annullato il tasto like");
  }
}

like_dom_element.addEventListener("click", like);

