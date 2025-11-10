import Toast from "./Toast"
import { useState } from "react"
import { TwSection } from "@/utils/types";
import { CaretUpDown, Tailwindcss } from "./Icons";

interface Props {
  idx: number;
  title: string;
  children: TwSection[];
}

export default function TwCard({ idx, title, children }: Props) {
  const [copied, setCopied] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  return (
    <>
      <section key={idx} className="border border-black/20 bg-gray-100 dark:bg-gray-900 rounded-md break-inside-avoid">
        <h2 className="font-bold p-2 px-4">{title}</h2>
        {children.map((b, i) =>
          <details key={i+b.title}
            className="group border-t border-sky-500/20"
            onToggle={(e) => {
              const detailsEl = e.target as HTMLDetailsElement;
              const twLink = detailsEl.querySelector(".tw-link");
              detailsEl.open ? twLink?.classList.replace("hidden", "flex") : twLink?.classList.replace("flex", "hidden");
            }}
          >
            <summary className="cursor-pointer flex justify-between py-2 px-4 hover:bg-white dark:hover:bg-black group-open:bg-white dark:group-open:bg-black">
              <h3 className="searchable text-xs font-semibold">{b.title}</h3>

              <div className="flex gap-2">
                <a
                  href={b.url}
                  target="_blank"
                  className="tw-link hidden items-center gap-1 text-xs font-semibold not-italic text-sky-500 border border-sky-500 px-1 rounded"
                >
                  <Tailwindcss />
                  Docs
                </a>
                <CaretUpDown />
              </div>
            </summary>

            <div className="px-4 pb-2 bg-white dark:bg-black">
              <p className="text-sm italic mb-2">{b.description}</p>
              <div className="max-h-80 overflow-y-auto scrollbar">
                <table className="w-full">
                  <tbody>
                    {b.table.map((c, j) =>
                      <tr key={j+c.class} className="text-xs cursor-copy font-mono hover:bg-gray-100 dark:hover:bg-gray-900 group/tr" onClick={() => {
                        navigator.clipboard.writeText(c.class)
                        setCopied(c.class)
                        setToastVisible(true)
                        setTimeout(() => {
                          setToastVisible(false)
                        }, 1500);
                      }}>
                        <td className="searchable pt-1 pb-1 text-sky-500 "><code>.{c.class}</code></td>
                        <td className="searchable p-1 text-sky-500 "><code>{c.properties}</code></td>
                        <td className="pt-1 pb-1 pr-1 italic">{c.value}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </details>
        )}
      </section>
      <Toast copied={copied} toastVisible={toastVisible} />
    </>
  )
}