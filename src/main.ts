import parse from "./parser";
import get_markdown_files from "./files";

const template = await Bun.file("template.html").text();
const files = await get_markdown_files();

for (const file of files) {
  const parsed = parse(await file.initial.text());
  const result = template.replace("%here%", parsed.html);
  await Bun.write(file.result, result);
}
