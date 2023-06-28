"use client";
import ThreadTitles from "./ThreadTitles";
import Threads from "./Threads";
import { useState } from "react";
import { Thread } from "@/src/interfaces";

export default function Page() {
  const [bookmarks, setBookmarks] = useState<Thread[]>([]);
  const reactiveBookmark = (thread: Thread): void => {
    setBookmarks([...bookmarks, thread]);
  };
  return (
    <main>
      <ThreadTitles reactiveBookmark={reactiveBookmark}/>
      <Threads bookmarks={bookmarks}/>
    </main>
  );
}
