# RUBRIC Testing

Rubric: For this group work, we worked on a bookmark sharing platform and tested 2 non-trivial functionalities with the test

Test 1. Bookmarks are sorted correctly according to the exact time they were placed in
Test 22. that bookmarks with same title but different URLs are kept separately after sorting and not merged.

**how we tested:**

Bookmarks must have have required properties (title, description, likes and especially timestamps and different URLs that would differentiate them especially when they have the same title) and that they don't accidentally merge or lose bookmarks with identical titles

# Testing Method used:

Unit tests in `script.test.js`

**Why this is important:** so that bookmarks don't accidentally merge as one with identical titles. And that all bookmarks are sorted properly when they come in, from top to bottom, using exact timestamps.

## How to Run Tests

npm install
npm test

## Files Tested

- `script.js` — `createBookmark()` and `sortBookmarks()` functions
