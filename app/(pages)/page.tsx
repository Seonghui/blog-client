import Link from "next/link";
import { getMarkdownFiles } from "@/app/lib/markdown";
import PageWrapper from "../components/PageWrapper";

function Page() {
  const files = getMarkdownFiles();
  return (
    <PageWrapper>
      <ul>
        {files.map((file) => (
          <li
            key={file.slug}
            className="border-b border-gray-200 last:border-0 py-5"
          >
            <div className="text-xs pb-2">{file.data.date}</div>
            <Link href={`/posts/${file.slug}`} className="block">
              <div className="text-xl truncate">{file.data.title}</div>
            </Link>
            <div className="text-xs pt-3">
              [
              {file.data.tags.map((tag: string, index: number) => {
                return (
                  <>
                    &quot;
                    <Link
                      href={`/tags/${tag}`}
                      key={tag}
                      className="hover:bg-slate-600 hover:text-gray-50"
                    >
                      {tag}
                    </Link>
                    &quot;{index < file.data.tags.length - 1 ? ", " : ""}
                  </>
                );
              })}
              ]
            </div>
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
}

export default Page;
