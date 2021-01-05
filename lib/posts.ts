import fs from "fs";
import path from "path";
import getConfig from "next/config";
import sortBy from "lib/sortBy";
import { Maybe } from "lib/types";
import compact from "lib/compact";

const { serverRuntimeConfig } = getConfig() ?? {
  serverRuntimeConfig: {
    PROJECT_ROOT: process.cwd(),
  },
};
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
  github?: Maybe<string>;
  metaImage?: Maybe<string>;
};

export async function getPostFiles(): Promise<string[]> {
  const files = await fs.promises.readdir(POST_DIR);
  return files.map((filename) => filename.replace(".md", ""));
}

export async function getPost(id: string): Promise<Maybe<PostMetadata>> {
  const file = (await fs.promises.readFile(`${POST_DIR}/${id}.md`)).toString();
  return parsePostMetadata(id, file);
}

export async function getAllPosts(): Promise<PostMetadata[]> {
  const files = await getPostFiles();
  const posts = await Promise.all(files.map(getPost));
  return sortBy(compact(posts), (post) => new Date(post.date).getTime());
}

function parsePostMetadata(
  filename: string,
  post: string
): Maybe<PostMetadata> {
  const [__, metadataRaw, content] = post.split("---");
  const metadata = metadataRaw.split("\n").reduce((out, line) => {
    const [key, ...values] = line.split(":");
    out[key.replace(/\W/g, "").trim()] = values.join(":").trim();
    return out;
  }, {} as { [key: string]: Maybe<string> });

  const { date, subtitle, title, metaImage, github } = metadata;
  if (date == null || subtitle == null || title == null) {
    return null;
  }

  return {
    date: date,
    subtitle: subtitle,
    title: title,
    metaImage: metaImage ?? null,
    github: github ?? null,
    filename: filename.replace(/\.md$/, ""),
    content,
  };
}
