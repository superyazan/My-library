var library = [
  {title: 'Hobbit',
  author: 'me',
  pages: '220',
  cover:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTS1VqOgP7iJC44UcztFaTbvD0OzoRymEhXfMPlgq7FPY0OEvCj",
  read:'Completed',
  },
  {title: 'Hobbit',
  author: 'me',
  pages: '220',
  cover:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTS1VqOgP7iJC44UcztFaTbvD0OzoRymEhXfMPlgq7FPY0OEvCj",
  read:'Completed'
  },
  {title: 'Hobbit',
  author: 'me',
  pages: '220',
  cover:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTS1VqOgP7iJC44UcztFaTbvD0OzoRymEhXfMPlgq7FPY0OEvCj",
  read:'Uncompleted',
  },
  {title: 'Hobbit',
  author: 'me',
  pages: '220',
  cover:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTS1VqOgP7iJC44UcztFaTbvD0OzoRymEhXfMPlgq7FPY0OEvCj",
  read:'Completed',
  },
]
var myLibrary = JSON.parse(localStorage.getItem("library"));


// constructor for books
function books(title,author,pages,cover,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.cover = cover
    this.read = read
  }
var btn = document.getElementById('btn')
var checkbox;
var checking;
var cont= document.querySelector('.content');

function showBooks(arr){
  // document.getElementById("default").style.display = "none";

  for (let i = 0; i < arr.length ;i++){
    var div = document.createElement('div');
    div.className = 'book';
    div.innerHTML =`<img class="cover" src="${arr[i].cover}"/>
  <div class="description">
    <p class="title">
      ${arr[i].title}<br />
      <span class="author">By: ${arr[i].author}</span><br />
      <span class="pages">Pages: ${arr[i].pages}</span>
    </p>
    <button class="book-btn remove">Remove</button>
    <button class="book-btn ${arr[i].read}">${arr[i].read}</button>
    </div>`;
    cont.appendChild(div)
  }
}
showBooks(myLibrary)
// adding new books
function addBook(e){
    // e.preventDefault();
    var title = document.getElementById('title').value
    var author = document.getElementById('author').value
    var pages = document.getElementById('pages').value
    var cover = document.getElementById('cover').value
    checkbox = document.getElementById("check");
    checking = checkbox.checked ? "Completed" : "Uncompleted"
    var newBook = new books(title,author,pages,cover,checking);
    myLibrary.push(newBook);
    localStorage.setItem("library", JSON.stringify(myLibrary));
    document.getElementById("library").reset();

};
btn.addEventListener('click',addBook)


// adding book button and form
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

function removeDiv(e) {
  if(e.target.classList.contains('remove')){
    e.target.parentNode.parentNode.remove();
  }
  else if(e.target.classList.contains('Completed')){
    e.target.classList.remove('Completed')
    e.target.classList.add('Uncompleted')
    e.target.innerText = "Uncompleted"
  }
  else if(e.target.classList.contains('Uncompleted')){
    e.target.classList.remove('Uncompleted')
    e.target.classList.add('Completed')
    e.target.innerText = "Completed"

  }
  }
document.addEventListener('click',removeDiv)
