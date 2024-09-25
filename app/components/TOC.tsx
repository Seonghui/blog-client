"use client";
import React, { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
  offsetTop: number;
}

export default function TOC() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeHeadingId, setActiveHeadingId] = useState<string>("");

  useEffect(() => {
    const elements = document.querySelectorAll("h1, h2, h3");
    const headingElements: Heading[] = Array.from(elements).map((element) => {
      const htmlElement = element as HTMLElement;
      return {
        id: htmlElement.id,
        text: htmlElement.textContent || "",
        level: parseInt(htmlElement.tagName[1]),
        offsetTop: htmlElement.offsetTop,
      };
    });

    setHeadings(headingElements);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const closestHeading = headings.reduce((closest, current) => {
        if (
          Math.abs(current.offsetTop - scrollPosition) <
          Math.abs(closest.offsetTop - scrollPosition)
        ) {
          return current;
        }
        return closest;
      }, headings[0]);

      if (closestHeading) {
        setActiveHeadingId(closestHeading.id);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  return (
    <div className="text-xs text-gray-500 fixed top-24 right-[max(0px,calc(50%-40rem))] w-60 overflow-y-auto hidden xl:block">
      <ul className="toc-list">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{
              marginLeft: `${(heading.level - 1) * 20}px`,
              fontWeight: activeHeadingId === heading.id ? "bold" : "normal",
            }}
          >
            <a
              href={`#${heading.id}`}
              className={activeHeadingId === heading.id ? "text-black" : ""}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
