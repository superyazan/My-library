var myLibrary = []
// constructor for books
function books(title,author,pages,cover){
    this.title = title
    this.author = author
    this.pages = pages
    this.cover = cover
  }
// books.prototype.read = function(){
//   document.addEventListener('click',toggle);
//   function toggle(e){
//       e.target.classList.toggle('completed')
//     }
//   }
//});

var btn = document.getElementById('btn')

// adding new books
function addBook(e){
    e.preventDefault();
    document.getElementById("default").style.display = "none";
    var title = document.getElementById('title').value
    var author = document.getElementById('author').value
    var pages = document.getElementById('pages').value
    var image = document.getElementById('cover').value
    var newBook = new books(title,author,pages,image);
    var checkbox = document.getElementById("check");
    myLibrary.push(newBook);
    var cont= document.querySelector('.content');
    var div = document.createElement('div');
    div.className = 'book';
    div.dataset.index = `${myLibrary.length-1}`
    div.classList
    div.innerHTML =`<img class="cover" src="${image}"/>
  <div class="description">
    <p class="title">
      ${title}<br />
      <span class="author">By: ${author}</span><br />
      <span class="pages">Pages: ${pages}</span>
    </p>
    <button class="book-btn remove" data-index="${myLibrary.length-1}">Remove</button>
    <button class="book-btn ${checkbox.checked ? "completed" : "uncompleted"}" data-index="${myLibrary.length-1}">${checkbox.checked ? "<span>Completed</span>" : "<span>Uncompleted</span>"}</button>
    </div>`;
    cont.appendChild(div)
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
  else if(e.target.classList.contains('completed')){
    e.target.classList.remove('completed')
    e.target.classList.add('uncompleted')
    e.target.innerText = "Uncompleted"
  }
  else if(e.target.classList.contains('uncompleted')){
    e.target.classList.remove('uncompleted')
    e.target.classList.add('completed')
    e.target.innerText = "Completed"

  }
  }
document.addEventListener('click',removeDiv)
