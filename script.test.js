import { sortBookmarks, createBookmark } from "./script.js";

describe("Bookmark Sorting (Non-Trivial)", () => {
  test("sortBookmarks sorts bookmarks by time in descending order (newest first)", () => {
    const bookmark1 = {
      title: "First",
      url: "https://first.com",
      description: "First bookmark",
      likes: 0,
      time: "2024-01-01T10:00:00.000Z",
    };

    const bookmark2 = {
      title: "Second",
      url: "https://second.com",
      description: "Second bookmark",
      likes: 0,
      time: "2024-01-01T12:00:00.000Z",
    };

    const bookmark3 = {
      title: "Third",
      url: "https://third.com",
      description: "Third bookmark",
      likes: 0,
      time: "2024-01-01T14:00:00.000Z",
    };

    const unsortedBookmarks = [bookmark1, bookmark3, bookmark2];
    const sortedBookmarks = sortBookmarks(unsortedBookmarks);

    expect(sortedBookmarks[0].title).toBe("Third");
    expect(sortedBookmarks[1].title).toBe("Second");
    expect(sortedBookmarks[2].title).toBe("First");
  });

  test("bookmarks with same title but different URLs are kept distinct after sorting", () => {
    const bookmarks = [
      {
        title: "Google",
        url: "https://google.com",
        description: "Search engine",
        likes: 0,
        time: "2024-01-01T10:00:00.000Z",
      },
      {
        title: "Google",
        url: "https://google.co.uk",
        description: "Google UK",
        likes: 0,
        time: "2024-01-01T11:00:00.000Z",
      },
      {
        title: "Google",
        url: "https://google.com.au",
        description: "Google Australia",
        likes: 0,
        time: "2024-01-01T12:00:00.000Z",
      },
    ];

    const sorted = sortBookmarks(bookmarks);

    expect(sorted.length).toBe(3);

    expect(sorted[0].url).toBe("https://google.com.au");
    expect(sorted[1].url).toBe("https://google.co.uk");
    expect(sorted[2].url).toBe("https://google.com");
  });
});


describe("Bookmark Creating (Non-Trivial)", () => {
  test("createBookmark creates a bookmark object with correct properties", () => {
    const title = "Example";
    const url = "https://example.com";
    const description = "An example bookmark";

    const bookmark = createBookmark(title, url, description);

    expect(bookmark.title).toBe(title);
    expect(bookmark.url).toBe(url);
    expect(bookmark.description).toBe(description);
    expect(bookmark.likes).toBe(0);
    expect(bookmark.time).not.toBe("");
  });
});
