"use client";

import { useEffect, useRef, useState } from "react";

export default function SearchInput() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const kbdRef = useRef<HTMLSpanElement>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        searchInputRef.current?.focus();
        searchInputRef.current?.select();
      }

      if (event.key === "Escape") {
        event.preventDefault();
        setQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown); // Cleanup
    };
  }, []);

  useEffect(() => {
    const details = document.querySelectorAll("details");
    details.forEach((el) => {
      const searchables = el.querySelectorAll(".searchable");

      // Remove previous highlights
      searchables.forEach((node) => {
        const originalText = node.getAttribute("data-original-text");
        originalText
          ? (node.innerHTML = originalText)
          : node.setAttribute("data-original-text", node.innerHTML);
      });

      if (query === "") {
        el.classList.remove("hidden");
        el.open = false;
      } else if (query.length >= 3) {
        const searchableText = Array.from(searchables)
          .map((node) => node.textContent || "")
          .join(" ")
          .toLowerCase();

        const matches = searchableText.includes(query.toLowerCase());
        matches ? el.classList.remove("hidden") : el.classList.add("hidden");
        el.open = matches;

        // Apply highlighting only to visible elements
        if (matches) {
          searchables.forEach((node) => {
            const text = node.textContent;
            const regex = new RegExp(`(${query})`, "gi");
            const highlighted = text.replace(regex, `<mark>$1</mark>`);
            node.innerHTML = highlighted;
          });
        }
      }
    });
  }, [query]);

  return (
    <div className="w-full relative">
      <input
        ref={searchInputRef}
        onFocus={() => {
          kbdRef.current?.classList.replace("opacity-100", "opacity-0");
          searchInputRef.current?.select();
        }}
        onBlur={() =>
          kbdRef.current?.classList.replace("opacity-0", "opacity-100")
        }
        type="text"
        className="w-full bg-transparent focus:outline-none text-sm border-2 border-sky-500 px-2 py-2 rounded-md flex justify-center items-center gap-2"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <kbd
        ref={kbdRef}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-sky-500 text-white px-1 rounded text-xs opacity-100 transition p-1"
      >
        ⌘ K
      </kbd>
    </div>
  );
}
