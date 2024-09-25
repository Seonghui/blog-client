"use client";
import React, { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TOC() {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const elements = document.querySelectorAll("h1, h2, h3");
    const headingElements: Heading[] = Array.from(elements).map((element) => {
      return {
        id: element.id,
        text: element.textContent || "",
        level: parseInt(element.tagName[1]),
      };
    });

    setHeadings(headingElements);
  }, []);

  return (
    <div className="text-xs fixed top-20 right-[max(0px,calc(50%-40rem))] w-60 overflow-y-auto hidden xl:block">
      <ul className="toc-list">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ marginLeft: `${(heading.level - 1) * 20}px` }}
          >
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
