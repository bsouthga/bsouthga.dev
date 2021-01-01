import fs from "fs";
import path from "path";
import getConfig from "next/config";
import sortBy from "lib/sortBy";

const { serverRuntimeConfig } = getConfig();
const POST_DIR = path.join(
  serverRuntimeConfig.PROJECT_ROOT,
  "./public/markdown/"
);

export type PostMetadata = {
  date: string;
  subtitle: string;
  title: string;
  filename: string;
  content: string;
  github?: string;
  metaImage?: string;
};

export async function getPostFiles(): Promise<string[]> {
  const files = await fs.promises.readdir(POST_DIR);
  return files.map((filename) => filename.replace(".md", ""));
}

export async function getPost(id: string): Promise<PostMetadata> {
  const file = (await fs.promises.readFile(`${POST_DIR}/${id}.md`)).toString();
  return await parsePostMetadata(id, file);
}

export async function getAllPosts(): Promise<PostMetadata[]> {
  const files = await getPostFiles();
  const posts = await Promise.all(files.map(getPost));
  return sortBy(posts, (post) => new Date(post.date).getTime());
}

function parsePostMetadata(filename: string, post: string): PostMetadata {
  const [__, metadataRaw, content] = post.split("---");
  const metadata = metadataRaw.split("\n").reduce((out, line) => {
    const [key, ...values] = line.split(":");
    out[key.replace(/\W/g, "").trim()] = values.join(":").trim();
    return out;
  }, {} as { [key: string]: string });

  return {
    date: metadata["date"],
    subtitle: metadata["subtitle"],
    title: metadata["title"],
    metaImage: metadata["metaImage"] ?? null,
    github: metadata["github"] ?? null,
    filename: filename.replace(/\.md$/, ""),
    content,
  };
}
