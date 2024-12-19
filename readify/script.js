// Selecting popup box and overlay
var popupOverlay = document.querySelector(".popup-overlay");
var popupBox = document.querySelector(".popup-box");
var addPopupButton = document.getElementById("add-popup-button");

addPopupButton.addEventListener("click", function() {
    popupOverlay.style.display = "block";
    popupBox.style.display = "block";
});

// Selecting cancel button
var cancelButton = document.getElementById("cancel-popup");
cancelButton.addEventListener("click", function(event) {
    event.preventDefault();
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
});

// Selecting container, addbook, book-title-input, book-author-input, book-description-input
var container = document.querySelector(".container");
var addBook = document.getElementById("add-book");
var bookTitleInput = document.getElementById("book-title-input");
var bookAuthorInput = document.getElementById("book-author-input");
var bookDescriptionInput = document.getElementById("book-description-input");

addBook.addEventListener("click", function(event) {
    event.preventDefault();

    // Create a new book container div
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");

    // Set the HTML content for the new book
    div.innerHTML = `
        <h2>${bookTitleInput.value}</h2>
        <h5>${bookAuthorInput.value}</h5>
        <p>${bookDescriptionInput.value}</p>
        <button onclick="deleteBook(event)">Delete</button>
    `;

    // Append the new book to the container
    container.appendChild(div);

    // Clear the input fields and close the popup
    bookTitleInput.value = "";
    bookAuthorInput.value = "";
    bookDescriptionInput.value = "";
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
});

// Delete book function
function deleteBook(event) {
    event.target.parentElement.remove();
}
