
var library = []
var myLibrary = JSON.parse(localStorage.getItem("library")) || [];
var btn = document.getElementById('btn')
var cont= document.querySelector('.content');

function populateStorage(){
  cont.innerHTML = "<h1>You still have not added any books yet</h1>"
}

// constructor for books
function books(title,author,pages,cover,read){
  this.title = title
  this.author = author
  this.pages = pages
  this.cover = cover
  this.read = read
}

function showBooks(arr){
  cont.innerHTML = ""
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
    <button class="book-btn remove" data-index="${i}" >Remove</button>
    <button class="book-btn ${arr[i].read}" data-index="${i}">${arr[i].read}</button>
    </div>`;
    cont.appendChild(div)
  }
}

// adding book button and form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// adding new books
function addBook(){
  var title = document.getElementById('title').value
  var author = document.getElementById('author').value
  var pages = document.getElementById('pages').value
  var cover = document.getElementById('cover').value
  var checkbox = document.getElementById("check");
  var checking = checkbox.checked ? "Completed" : "Uncompleted"
  var newBook = new books(title,author,pages,cover,checking);
  myLibrary.push(newBook);
  localStorage.setItem("library", JSON.stringify(myLibrary));
  document.getElementById("library").reset();

}


function handleCard(e) {
  var ind = e.target.dataset.index
  if(e.target.classList.contains('remove')){
    myLibrary.splice(ind,1)
    localStorage.setItem("library", JSON.stringify(myLibrary));
    e.target.parentNode.parentNode.remove();
  }
  else if(e.target.classList.contains('Completed')){
    myLibrary[ind].read = 'Uncompleted'
    localStorage.setItem("library", JSON.stringify(myLibrary));
    showBooks(myLibrary)
  }
  else if(e.target.classList.contains('Uncompleted')){
    myLibrary[ind].read = 'Completed'
    localStorage.setItem("library", JSON.stringify(myLibrary));
    showBooks(myLibrary)
  }
}

if(!myLibrary.length) {
  populateStorage();
} else {
  showBooks(myLibrary)
}


btn.addEventListener('click',addBook)



cont.addEventListener('click',handleCard)
