import fs from "fs";
import matter from "gray-matter";
import path from "path";

const markdownDirectory = path.join(process.cwd(), "public/markdown");

export function getMarkdownFileContent(fileName: string) {
  try {
    const fullPath = path.join(markdownDirectory, fileName);
    const rawContent = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(rawContent);
    return {
      slug: fileName.replace(/\.md$/, ""),
      data,
      content,
    };
  } catch (error) {
    console.error(`Failed to read file ${fileName}:`, error);
    return null;
  }
}

export function getMarkdownFiles() {
  try {
    const fileNames = fs.readdirSync(markdownDirectory);

    return fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => getMarkdownFileContent(fileName))
      .filter((file) => file !== null);
  } catch (error) {
    console.error("Failed to read markdown directory:", error);
    return [];
  }
}
