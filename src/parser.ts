import MarkdownIt from "markdown-it";
import matter from "gray-matter";

const md = new MarkdownIt();

export default function parse(text: string) {
  const { data, content } = matter(text);
  const html = md.render(content);
  return { data, html };
}
