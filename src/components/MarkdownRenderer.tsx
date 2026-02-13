import Markdown from "react-markdown";

export function MarkdownRenderer({ content }: { content: string }) {
  return <Markdown>{content}</Markdown>;
}
