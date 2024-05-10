// HAMBURGER NAV BAR 

function navFunction() {
    var hamNav = document.getElementById("links");
    if (hamNav.style.display === "block") {
      hamNav.style.display = "none";
    } else {
      hamNav.style.display = "block";
    }
  }
// END OF HAMBURGER

fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const booksContainer = document.getElementById('books-container');

    data.books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        bookDiv.innerHTML = `
        <div class="bookInfo">
        <img src="${book.image}" alt="${book.title}">
        <div class="text">
        <h2 class="title"> ${book.title}</h2>
        <p class="author">By: ${book.author}</p>
        <p class="genre">Genre: ${book.genre}</p>
        <p class="desc">Overview: ${book.description}<p>
        <p class="price">Price: ${book.price}</p>
        <button class="add">Add to Cart</button>
        </div>
        </div>
        `;

        booksContainer.appendChild(bookDiv);
    });
  })

  .catch(error => {
    console.error('Error fetching JSON:', error);
  });








// fetch('products.json')
// .then(response => response.json())
// .then(data => {
   
//     let productGrid = document.querySelector('.product-grid');

//     data.forEach(product => {
//         const productDiv = document.createElement('div');
//         productDiv.classList.add('product-div');

//         const bookImage = document.createElement('img');
//         bookImage.src = products.books.image;
//         bookImage.classList.add('book-image');
//         productDiv.appendChild(bookImage);

//         const productTitle = document.createElement('h4');
//         productTitle.textContent = products.books.title;
//         productTitle.classList.add('product-title');
//         productDiv.appendChild(productTitle);


//     productGrid.appendChild(productDiv);

//     })
// });