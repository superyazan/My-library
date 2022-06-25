function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = () => isRead;
}
Book.prototype.info = function () {
  `${this.title} written by ${this.author} and has ${this.pages} Pages. ${
    this.isRead ? "You have alread read it." : "You have not read it yet."
  }`;
};
