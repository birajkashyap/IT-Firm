"use client";
import { useEffect, useState } from "react";
import { fetchSheetContent } from "@/utils/fetchSheet";
import { TypewriterEffect } from "./ui/typewriter-effect";

export default function Spreadsheet() {
  const [content, setContent] = useState<Record<string, string>>({});

  useEffect(() => {
    async function loadData() {
      const data = await fetchSheetContent();
      setContent(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 dark:bg-black rounded-lg shadow-md text-center">
      {Object.entries(content).map(
        ([key, value]: [string, string], i: number) => (
          <div key={i} className="mb-6">
            <div className="flex justify-center">
              <TypewriterEffect
                words={key.split(" ").map((word) => ({ text: word }))}
              />
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
              {value}
            </p>
          </div>
        )
      )}
    </div>
  );
}
