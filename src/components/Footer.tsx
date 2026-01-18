import { Tailwindcss } from "./Icons";

export default function Footer() {
  return (
    <footer className="mt-4 text-xs opacity-70 flex flex-col gap-2 md:flex-row justify-between">
      <a
        href="https://taillens.io/?aff=zmn621"
        target="_blank"
        className="italic"
      >
        Need Tailwind CSS in your browser?
      </a>

      <a
        href="https://x.com/pk504b"
        target="_blank"
        className="flex items-center gap-1"
      >
        Made with <Tailwindcss /> by{" "}
        <span className="font-semibold">Prince(@pk504b)</span>
      </a>
    </footer>
  );
}
