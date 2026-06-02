// all comments MUST be deleted before final submission. I just added these here to explain my thought process.

import { getData, setData } from "./storage.js";

let currentUser = null; // this holds the user that is currently selected in the dropdown.
let allBookmarks = {}; // this variable will hold all the bookmarks for all users.

const bookmarkForm = document.getElementById("bookmarkForm"); // new form submissions
const bookmarksBox = document.getElementById("bookmarksBox"); // grab and append the bookmark cards to this element.
const userSelect = document.getElementById("userSelect"); // grab user changes (from dropdown) and to know which user's bookmarks to display
const bookmarkTemplate = document.querySelector("template"); // clone the bookmark template in HTML and replace the details (title, url, description, timestamp) with what was submitted in the form

userSelect.addEventListener("change", (event) => {
  currentUser = event.target.value; // 1. listen for and pick up the user that was selected and set it as the currentUser.
  allBookmarks[currentUser] = getData(currentUser) || []; // 2. now load the current user's saved bookmarks from the imported getData OR from empty array
  renderBookmarks(); // 3. call renderBookmarks to show the selected user's bookmarks on the page.
});

bookmarkForm.addEventListener("submit", (event) => {
  event.preventDefault(); // 1. prevent refresh on submit

  const title = document.getElementById("bookmarkTitle").value; // 2. save and grab submitted bookmark title
  const url = document.getElementById("bookmarkURL").value; // 3. save and grab submitted URL
  const description = document.getElementById("bookmarkDescription").value; // 4. save and grab submitted description

  const bookmark = {
    title: title,
    url: url,
    description: description,
    timestamp: new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }),
    likes: 0,
    id: Date.now(),
  };

  if (!allBookmarks[currentUser]) {
    allBookmarks[currentUser] = [];
  } // if the current user doesn't have any bookmarks yet, create an empty array for them in allBookmarks

  allBookmarks[currentUser].unshift(bookmark);
  setData(currentUser, allBookmarks[currentUser]);
  renderBookmarks();
  bookmarkForm.reset();
});

function renderBookmarks() {
  bookmarksBox.innerHTML = "";

  const userBookmarks = allBookmarks[currentUser] || [];

  if (userBookmarks.length === 0) {
    bookmarksBox.innerHTML =
      "<p style='color: rgb(169, 169, 169);'>No bookmarks yet. Add one!</p>";
    return;
  }

  userBookmarks.forEach((bookmark) => {
    const card = bookmarkTemplate.content.cloneNode(true);

    card.querySelector(".userBookmarkTitleLink").href = bookmark.url;
    card.querySelector(".userBookmarkTitle").textContent = bookmark.title;
    card.querySelector(".userBookmarkDescription").textContent =
      "⸺ " + bookmark.description;
    card.querySelector(".userBookmarkTimestamp").textContent =
      "Created at: " + bookmark.timestamp;
    card.querySelector(".userBookmarkCounter").textContent =
      "Likes: " + bookmark.likes;

    card.querySelector(".copyClipboardButton").addEventListener("click", () => {
      navigator.clipboard.writeText(bookmark.url);
      alert("Copied!");
    });

    bookmarksBox.appendChild(card);
  });
}
