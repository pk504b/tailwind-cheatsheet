"use client"

import { useState, useEffect } from "react";
import MasonryLayout from "@/components/MasonryLayout";
import { loadTwJson, twVersions } from "@/utils";
import Toast from "@/components/Toast";
import { TwJson } from "@/utils/types";
import Footer from "@/components/Footer";

export default function Home() {
  const [currTw, setCurrTw] = useState(twVersions[0]);
  const [jsonData, setJsonData] = useState<TwJson[]>([]);

  useEffect(() => {
    (async () => {
      const data = await loadTwJson(currTw);
      setJsonData(data);
    })();
  }, [currTw]);

  return (
    <>
      <div className="min-h-dvh flex flex-col max-w-screen-2xl mx-auto p-4">
        <div className="flex-1 h-full">
          <MasonryLayout currTw={currTw} setCurrTw={setCurrTw} twJson={jsonData} />
        </div>
        <Footer />
      </div>
      <Toast copied={""} toastVisible={false} />
    </>
  );
}
