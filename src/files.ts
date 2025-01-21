import { readdir } from "fs/promises";

const dir = "public";

export default async function get_markdown_files() {
  const files = await readdir(dir, { recursive: true });
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => dir + "/" + file)
    .map((file) => Bun.file(file));
}
