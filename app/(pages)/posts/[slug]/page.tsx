import { getMarkdownFileContent } from "@/app/lib/markdown";
import ReactMarkdown from "react-markdown";
import "github-markdown-css";
import PageWrapper from "@/app/components/PageWrapper";
import TOC from "@/app/components/TOC";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

function Page({ params }: { params: { slug: string } }) {
  const data = getMarkdownFileContent(`${params.slug}.md`);
  return (
    <>
      <TOC />
      <PageWrapper>
        <div className="py-12">
          <div className="markdown-body post-page-style *:scroll-mt-14">
            <ReactMarkdown rehypePlugins={[rehypeHighlight, rehypeSlug]}>
              {data?.content}
            </ReactMarkdown>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}

export default Page;
