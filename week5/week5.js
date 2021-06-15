
// Books class is responsible for creating title and author objects

class Books {
  constructor() {}

  createTitle(title) {
    this.title = title;
  }
  createAuthor(author) {
    this.author = author;
  }
}

//Menu class creates user interface for user to create a list of authors, book titles, or a combined
// list of author with their books. The list properties of author and title can be updated or deleted by user. 
// Lastly the Menu class has a method to view the list after each iteration of change etc.
class Menu {
  constructor() {
    this.bookSelection = [];
  }

  begin() {
    let selection = this.menuSelection();
    while (selection != 0) {
      switch (selection) {
        case "0":
          break;
        case "1":
          this.createAuthorSelection();
          break;
        case "2":
          this.createBookSelection();
          break;
        case "3":
          this.createBookObj();
          break;
        case "4":
          this.deleteBookTitle();
          break;
        case "5":
          this.deleteAuthorName();
          break;
        case "6":
          this.updateBookTitle();
          break;
        case "8":
          console.log(
            this.bookSelection.map((item) => {
              return item;
            })
          );
      }
      selection = this.menuSelection();
    }
  }

  menuSelection() {
    return prompt(`
    0) Exit Application
    1) Input a authors name into the list.
    2) Input book title to save for later.
    3) Input a book title and author.
    4) Delete one of your titles.
    5) Delete one of your authors.
    6) Update one of your titles.
    7) Update one of your authors.
    8) Show your list.
    
    `);
  }

  createAuthorSelection() {
    let authorSelection = prompt("Enter your authors name");
    let newAuthor = new Books();
    newAuthor.createAuthor(authorSelection);
    this.bookSelection.push(newAuthor);
  }

  createBookSelection() {
    let bookSelection = prompt("Enter your book title");
    let newBook = new Books();
    newBook.createTitle(bookSelection);
    this.bookSelection.push(newBook);
  }

  createBookObj() {
    let author = prompt("Please enter author name");
    let authorObj = new Books();
    authorObj.createAuthor(author);
    let bookTitle = prompt("Please enter the book title");
    let titleObj = new Books();
    titleObj.createTitle(bookTitle);
    this.bookSelection.push([authorObj, titleObj]);
  }

  updateBookTitle() {
    let updateTitle = prompt("Please Enter the title for updating");
    let newTitle = prompt("Enter the title you desire for updating");
    let valuesArray = this.bookSelection;
    valuesArray.filter((item) => {
      if (item.title === updateTitle) {
        item.title = newTitle;
      } else {
        console.log("Title could not be found.");
      }
    });
  }

  deleteBookTitle() {
    let deleteTitle = prompt("Please enter the Book Title for deletion");
    let valuesArray = this.bookSelection;
    valuesArray.filter((item) => {
      if (item.title === deleteTitle) {
        delete item.title;
      } else {
        console.log("No such Title");
      }
    });
  }

  deleteAuthorName() {
    let deleteAuthor = prompt("Please enter the authors name for deletion");
    let valuesArray = this.bookSelection;
    valuesArray.filter((item) => {
      if (item.author === deleteAuthor) {
        delete item.author;
      } else {
        console.log("No Such Author");
      }
    });
  }
}

let currentMenu = new Menu();
currentMenu.begin();
