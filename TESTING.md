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

## Manual Testing

(The website must contain a drop-down which lists five users)
Opened the site and confirmed the dropdown contains exactly 5 users: Elisabeth, Prakash, Leon, Shaif, Mirabelle.

(Selecting a user must display the list of bookmarks for the relevant user)
Selected each user in turn and confirmed that only their own bookmarks are displayed.

(If there are no bookmarks for the selected user, a message is displayed to explain this)
Selected a user with no bookmarks and confirmed the message "No bookmarks yet. Add one" appears.

(The list of bookmarks must be shown in reverse chronological order)
Added multiple bookmarks and confirmed the most recently added bookmark appears at the top. Also covered by unit tests in 'script.test.js'.

(Each bookmark has a title, description and created at timestamp displayed)
Added a bookmark and confirmed all three fields are visible on the bookmark card.

(Each bookmark's title is a link to the bookmark's URL)
Clicked the title of a bookmark and confirmed it opens the correct URL in the browser.

(Each bookmark's "Copy to clipboard" button must copy the URL of the bookmark)
Clicked the copy button and pasted into a text field. Confirmed the URL matches the bookmark.

(Each bookmark's like counter works independently, and persists data across sessions)
Clicked the like button on several bookmarks, then closed and reopened the browser. Confirmed the like counts were preserved.

(The website must contain a form with inputs for a URL, a title, and a description. The form should have a submit button.)
Confirmed the form contains all three input fields and a submit button.

(Submitting the form adds a new bookmark for the relevant user only)
Added a bookmark as one user, then switched to another user and confirmed the bookmark does not appear.

(After creating a new bookmark, the list of bookmarks for the current user is shown, including the new bookmark)
Submitted the form and confirmed the new bookmark immediately appears in the list without refreshing.

(The website must score 100 for accessibility in Lighthouse)
Ran Lighthouse in Chrome DevTools on all views and confirmed 100% accessibility score.

(Unit tests must be written for at least one non-trivial function)
Unit tests in `script.test.js`
