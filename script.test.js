import { createBookmark, sortBookmarks } from "./script.js";

test("createBookmark has the correct title", () => {
  const bm = createBookmark("My Site", "https://example.com", "A description");
  expect(bm.title).toBe("My Site");
});