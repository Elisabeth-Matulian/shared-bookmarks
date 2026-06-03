# RUBRIC 

## The website must contain a drop-down which lists five users


## Selecting a user must display the list of bookmarks for the relevant user


## If there are no bookmarks for the selected user, a message is displayed to explain this


## The list of bookmarks must be shown in reverse chronological order


## Each bookmark has a title, description and created at timestamp displayed


## Each bookmark’s title is a link to the bookmark’s URL


## Each bookmark's "Copy to clipboard" button must copy the URL of the bookmark


## Each bookmark's like counter works independently, and persists data across sessions


## The website must contain a form with inputs for a URL, a title, and a description. The form should have a submit button.


## Submitting the form adds a new bookmark for the relevant user only


## After creating a new bookmark, the list of bookmarks for the current user is shown, including the new bookmark


## The website must score 100 for accessibility in Lighthouse


## Unit tests must be written for at least one non-trivial function


# Testing
Rubric: For this group work, we worked on a bookmark sharing platform and tested 1 non-trivial functionality with the test that bookmarks with same title but different URLs are kept separately after sorting and not merged. 

**What we tested:** Bookmark must have have required properties (title, description, likes and especially timestamps and different URLs that would differentiate them espeically when they have the same title) doesn't accidentally merge or lose bookmarks with identical titles

# Testing Method used: Unit tests in script.test.js

**Why this is important:** so that bookmarks don't accidentally merge or lose bookmarks with identical titles.

## How to Run Tests

```bash
npm install
npm test
```

## Files Tested

- `script.js` — `createBookmark()` and `sortBookmarks()` functions
