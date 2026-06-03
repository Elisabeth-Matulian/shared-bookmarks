import { getData, setData, getUserIds } from "./storage.js";

let currentUser = null;

// === DOM ELEMENTS ===

const bookmarkForm = document.getElementById("bookmarkForm");
const bookmarkTitle = document.getElementById("bookmarkTitle");
const bookmarkURL = document.getElementById("bookmarkURL");
const bookmarkDescription = document.getElementById("bookmarkDescription");
const bookmarksBox = document.getElementById("bookmarksBox");
const userSelect = document.getElementById("userSelect");
const bookmarkTemplate = document.querySelector("template");
const formFeedback = document.getElementById("formFeedback");

// === ENTRY POINT ===

function setup() {
  const userIds = getUserIds();
  userSelect.innerHTML = "<option value=''>Select a user</option>";
  for (const user of userIds) {
    const option = document.createElement("option");
    option.value = user;
    option.textContent = user;
    userSelect.append(option);
  }
}

// === A BOOKMARK BUILDER ===

function createBookmark(title, url, description) {
  return {
    title: title,
    url: url,
    description: description,
    likes: 0,
    time: new Date().toISOString(),
  };
}

function sortBookmarks(bookmarks) {
  return bookmarks.sort((a, b) =>
    a.time > b.time ? -1 : a.time < b.time ? 1 : 0,
  );
}

function addBookmark(userId, title, url, description) {
  let bookmarks = getData(userId);
  bookmarks ??= [];
  bookmarks.push(createBookmark(title, url, description));
  sortBookmarks(bookmarks);
  setData(userId, bookmarks);
  return bookmarks;
}

// === ADDITIONAL SUBMIT FORM DETAILS ===

function getCurrentBookmarks() {
  return currentUser ? (getData(currentUser) ?? []) : [];
}

function clearFeedback() {
  formFeedback.textContent = "";
  formFeedback.style.color = "";
}

function showFeedback(message, color = "red") {
  formFeedback.textContent = message;
  formFeedback.style.color = color;
}

userSelect.addEventListener("change", (event) => {
  currentUser = event.target.value;
  renderBookmarks();
});

bookmarkForm.addEventListener("submit", (event) => {
  event.preventDefault();

  clearFeedback();

  if (!currentUser) {
    showFeedback("Please select a user first, then add a bookmark.");
    return;
  }

  const title = bookmarkTitle.value;
  const url = bookmarkURL.value;
  const description = bookmarkDescription.value;

  addBookmark(currentUser, title, url, description);
  renderBookmarks();
  bookmarkForm.reset();
});

// === RENDER BOOKMARKS ===

function renderBookmarks() {
  bookmarksBox.innerHTML = "";

  if (!currentUser) {
    bookmarksBox.innerHTML =
      "<p style='color:  #4f4f4f;'>Select a user to see bookmarks.</p>";
    return;
  }

  const userBookmarks = getCurrentBookmarks();

  if (userBookmarks.length === 0) {
    bookmarksBox.innerHTML =
      "<p style='color:  #4f4f4f;'>No bookmarks yet. Add one!</p>";
    return;
  }

  const sortedBookmarks = sortBookmarks(userBookmarks);

  sortedBookmarks.forEach((bookmark) => {
    const card = bookmarkTemplate.content.cloneNode(true);

    card.querySelector(".userBookmarkTitleLink").href = bookmark.url;
    card.querySelector(".userBookmarkTitle").textContent = bookmark.title;
    card.querySelector(".userBookmarkDescription").textContent =
      "⸺ " + bookmark.description;
    card.querySelector(".userBookmarkTimestamp").textContent =
      "Created at: " + new Date(bookmark.time).toLocaleString();
    card.querySelector(".userBookmarkCounter").textContent =
      "Likes: " + bookmark.likes;

    card.querySelector(".copyClipboardButton").addEventListener("click", () => {
      navigator.clipboard.writeText(bookmark.url);
      alert("Copied!");
    });

    const likeButton = card.querySelector(".userBookmarkCounter");

    likeButton.addEventListener("click", () => {
      bookmark.likes += 1;
      likeButton.textContent = "Likes: " + bookmark.likes;
      setData(currentUser, userBookmarks);
    });

    bookmarksBox.appendChild(card);
  });
}

setup();
renderBookmarks();
