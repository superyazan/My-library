var btn = document.getElementById('btn');
var cont= document.querySelector('.content');
var dbRef = firebase.database().ref('books');

////// Function declarations

// empty message func
function populateStorage(){
  cont.innerHTML = "<h1>You still have not added any books yet</h1>"
}

// ifee to show the books
(function showBooks(){
  dbRef.on('value',(snapshot) => {
    if(!snapshot.exists()){
      populateStorage();
    } else {
      cont.innerHTML = ""
    Object.keys(snapshot.val()).forEach((key) => {
      var div = document.createElement('div');
      div.className = 'book';
      div.innerHTML =`<img class="cover" src="${snapshot.val()[key].cover}"/>
    <div class="description">
      <p class="title">
      ${snapshot.val()[key].title}<br />
        <span class="author">By: ${snapshot.val()[key].author}</span><br />
        <span class="pages">Pages: ${snapshot.val()[key].pages}</span>
      </p>
      <button class="book-btn remove" data-index="${key}" >Remove</button>
      <button class="book-btn ${snapshot.val()[key].read}">${snapshot.val()[key].read}</button>
      </div>`;
      cont.appendChild(div)
    });
  }
});

})()

// adding book button and form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// adding new books
function addBook(e){
  e.preventDefault();
  var checkbox = document.getElementById("check");
  var fireLib = dbRef.push();
  fireLib.set({
    title : document.getElementById('title').value,
    author : document.getElementById('author').value,
    pages : document.getElementById('pages').value,
    cover : document.getElementById('cover').value,
    read : checkbox.checked ? "Completed" : "Uncompleted",
  })
  document.getElementById("library").reset();
}

// removing and completing books
function handleCard(e) {
  var indi = e.target.dataset.index;
  if(e.target.classList.contains('remove')){
    var ref = firebase.database().ref(`books/${indi}`);
    ref.remove()
    .then(function() {
      console.log("Remove succeeded.")
    })
    .catch(function(error) {
      console.log("Remove failed: " + error.message)
    });

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


/////// event listeners
btn.addEventListener('click',addBook)
cont.addEventListener('click',handleCard)
