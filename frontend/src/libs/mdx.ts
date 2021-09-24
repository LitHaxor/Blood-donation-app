import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";

const root = process.cwd();

export async function getFiles(type: string) {
  return fs.readdirSync(path.join(root, "data", type));
}

export async function getFileBySlug(type: string, slug: any) {
  const source: any = slug
    ? fs.readdirSync(path.join(root, "data", type, `${slug}.mdx`, "utf8"))
    : fs.readdirSync(path.join(root, "data", `${type}.mdx`, "utf8"));

  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
      
  })
}
