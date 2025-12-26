"use client";

import { useEffect, useRef, useState } from "react";

export default function SearchInput() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const kbdRef = useRef<HTMLSpanElement>(null);
  const [query, setQuery] = useState("");

  // Handle Ctrl+K
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

  // Highlight search results (Debounced Imperative)
  useEffect(() => {
    const timer = setTimeout(() => {
      const details = document.querySelectorAll("details");

      // Hoist regex creation for performance
      let regex: RegExp | null = null;
      if (query.length >= 3) {
        const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        regex = new RegExp(`(${escapedQuery})`, "gi");
      }

      details.forEach((el) => {
        const searchables = el.querySelectorAll(".searchable");

        // Remove previous highlights and restore original HTML
        searchables.forEach((node) => {
          const originalHtml = node.getAttribute("data-original-html");
          if (originalHtml) {
            node.innerHTML = originalHtml;
          } else {
            node.setAttribute("data-original-html", node.innerHTML);
          }
        });

        if (query === "") {
          el.classList.remove("hidden");
          el.open = false;
        } else if (query.length >= 3 && regex) {
          const searchableText = Array.from(searchables)
            .map((node) => node.textContent || "")
            .join(" ")
            .toLowerCase();

          const matches = searchableText.includes(query.toLowerCase());
          matches ? el.classList.remove("hidden") : el.classList.add("hidden");
          const h3Text = el.querySelector("h3")?.textContent?.toLowerCase() || "";
          el.open = matches && !h3Text.includes("color");

          // Apply highlighting only to visible elements
          if (matches) {
            searchables.forEach((node) => {
              const text = node.textContent || "";

              // Escape HTML in the source text before applying highlights
              const escapedText = text
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");

              node.innerHTML = escapedText.replace(regex!, `<mark>$1</mark>`);
            });
          }
        }
      });
    }, 200);

    return () => clearTimeout(timer);
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
