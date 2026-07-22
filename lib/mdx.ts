import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "content", "blogs");

export function getBlogs() {
  const files = fs.readdirSync(blogsDirectory);

  return files.map((file) => {
    const slug = file.replace(".mdx", "");

    const fileContent = fs.readFileSync(
      path.join(blogsDirectory, file),
      "utf8"
    );

    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title,
      description: data.description,
    };
  });
}

export function getBlog(slug: string) {
  const filePath = path.join(
    blogsDirectory,
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(
    filePath,
    "utf8"
  );

  return matter(fileContent);
}
