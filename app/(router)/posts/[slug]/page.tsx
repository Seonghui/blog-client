import { getMarkdownFileContent } from "@/app/lib/markdown";
import ReactMarkdown from "react-markdown";
import "github-markdown-css";

function Page({ params }: { params: { slug: string } }) {
  const data = getMarkdownFileContent(`${params.slug}.md`);
  return (
    <div className="markdown-body">
      <ReactMarkdown>{data?.content}</ReactMarkdown>
    </div>
  );
}

export default Page;
