
import { getData, setData } from "./storage.js"

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

// === SORTING BOOKMARKS ===
function sortBookmarks(userId) {
    let bookmarks = getData(userId);
    return bookmarks.sort((a, b) => b.time - a.time);
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
