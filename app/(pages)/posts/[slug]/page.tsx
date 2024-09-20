import { getMarkdownFileContent } from "@/app/lib/markdown";
import ReactMarkdown from "react-markdown";
import "github-markdown-css";
import PageWrapper from "@/app/components/PageWrapper";

function Page({ params }: { params: { slug: string } }) {
  const data = getMarkdownFileContent(`${params.slug}.md`);
  return (
    <PageWrapper>
      <div className="markdown-body">
        <ReactMarkdown>{data?.content}</ReactMarkdown>
      </div>
    </PageWrapper>
  );
}

export default Page;
