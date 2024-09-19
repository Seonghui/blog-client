import { getMarkdownFileContent } from "@/app/lib/markdown";
import ReactMarkdown from "react-markdown";

function Page({ params }: { params: { slug: string } }) {
  const data = getMarkdownFileContent(`${params.slug}.md`);
  return (
    <div>
      <ReactMarkdown>{data?.content}</ReactMarkdown>
    </div>
  );
}

export default Page;
