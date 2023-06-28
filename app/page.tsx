"use client";
import ThreadTitles from "./ThreadTitles";
import Threads from "./Threads";
import { useState } from "react";
import { Thread } from "@/src/interfaces";

export default function Page() {
  const [bookmarks, setBookmarks] = useState<Thread[]>([]);
  const addBookmark = (thread: Thread): void => {
    setBookmarks([...bookmarks, thread]);
  };
  const deleteBookmark = (thread: Thread): void => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== thread.id));
  };
  return (
    <main>
      <ThreadTitles bookmarks={bookmarks} addBookmark={addBookmark} deleteBookmark={deleteBookmark}/>
      <Threads bookmarks={bookmarks} deleteBookmark={deleteBookmark}/>
    </main>
  );
}
