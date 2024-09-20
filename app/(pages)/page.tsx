import Link from "next/link";
import { getMarkdownFiles } from "@/app/lib/markdown";
import PageWrapper from "../components/PageWrapper";

function Page() {
  const files = getMarkdownFiles();
  return (
    <PageWrapper>
      <ul>
        {files.map((file) => (
          <li key={file.slug}>
            <Link href={`/posts/${file.slug}`}>{file.data.title}</Link>
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
}

export default Page;
