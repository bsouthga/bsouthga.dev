import { getPost } from "lib/posts";

const POSTS = ["pca-image-classification", "color-gradients-with-python"];

describe("posts", () => {
  test.each(POSTS)("snapshot metadata", async (postID) => {
    const post = await getPost(postID);
    expect(post).toBeTruthy();
    const { content, ...rest } = post!;
    expect(content).toBeTruthy();
    expect(rest).toMatchSnapshot(postID);
  });
});
