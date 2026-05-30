
import { getData, setData, getUserIds } from "./storage.js"

// === DATA ===
let cache = {};

// === DOM ELEMENTS ===
const bookmarkForm = document.getElementById("bookmarkForm");
const bookmarkTitle = document.getElementById("bookmarkTitle");
const bookmarkURL = document.getElementById("bookmarkURL");
const bookmarkDescription = document.getElementById("bookmarkDescription");
const bookmarksBox = document.getElementById("bookmarksBox");
const userSelect = document.getElementById("userSelect");

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

// === SORTING BOOKMARKS ===
function sortBookmarks(bookmarks) {
    return bookmarks.sort((a, b) => a.time > b.time ? -1 
    : a.time < b.time ? 1
    : 0)
}

// === RENDERING BOOKMARKS ===

// === A BOOKMARK BUILDER ===
function createBookmark(title, url, description) {
    return {
        title: title,
        url: url,
        description: description,
        likes: 0,
        time: new Date().toISOString()
    }
}

window.onload = setup;