import React from "react";

// TODO api 연동 필요
export default function page({ params }: { params: { tag: string } }) {
  return <div>tag page {params.tag}</div>;
}
