import { readdir } from "fs/promises";
import { join, parse } from "path";

const dir = "blog";
const res = "_site";

function change_name(path: string) {
  const parsed_path = parse(path);

  const html_name = parsed_path.name + ".html";

  if (html_name.endsWith("index.html")) return join(parsed_path.dir, "index.html");

  return join(parsed_path.dir, parsed_path.name, "index.html");
}

export default async function get_markdown_files() {
  const files = await readdir(dir, { recursive: true });
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      initial: Bun.file(join(dir, file)),
      result: Bun.file(join(res, change_name(file))),
    }));
}
