import { getPost, getPostFiles, getAllPosts } from "lib/posts";
import compact from "lib/compact";
import sortBy from "lib/sortBy";

const POSTS = ["pca-image-classification", "color-gradients-with-python"];

describe("posts", () => {
  test.each(POSTS)("snapshot metadata", async (postID) => {
    const post = await getPost(postID);
    expect(post).toBeTruthy();
    const { content, ...rest } = post!;
    expect(content).toBeTruthy();
    expect(rest).toMatchSnapshot(postID);
  });

  test("getPostFiles retrieves only valid posts ", async () => {
    const postIDs = await getPostFiles();
    postIDs.every((id) => expect(typeof id).toBe("string"));
    const posts = await Promise.all(postIDs.map(getPost));
    expect(compact(posts).length).toEqual(posts.length);
  });

  test("getAllPosts", async () => {
    const [allPosts, postIDs] = await Promise.all([
      getAllPosts(),
      getPostFiles(),
    ]);

    const postDates = allPosts.map((p) => p.date);
    expect(JSON.stringify(postDates)).toEqual(
      JSON.stringify(sortBy(postDates, (d) => new Date(d).getTime()))
    );

    const idSet = new Set(allPosts.map((p) => p.filename));
    expect(idSet.size).toEqual(postIDs.length);
    postIDs.forEach((id) => expect(idSet.has(id)).toEqual(true));
  });
});
