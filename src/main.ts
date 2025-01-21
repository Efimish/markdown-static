import parse from "./parser";
import get_markdown_files from "./files";

const files = await get_markdown_files();

for (const file of files) {
  const text = await file.text();
  console.log(file.name, parse(text));
}
