import Link from "next/link";
import { getMarkdownFiles } from "@/app/lib/markdown";

function Page() {
  const files = getMarkdownFiles();
  return (
    <div>
      <h1>Markdown Files</h1>
      <ul>
        {files.map((file) => (
          <li key={file.slug}>
            <Link href={`/posts/${file.slug}`}>{file.data.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
