"use client";
import React, { useState, useRef } from "react";
import { Bookmark, BookmarkFill } from "@/components/Icon";
import styles from "@/src/styles/BookmarkState.module.css";
import { Thread } from "@/src/interfaces";

interface Props {
  thread: Thread;
  bookmarks: Thread[];
  addBookmark: (thread: Thread) => void;
  deleteBookmark: (thread: Thread) => void;
}

const BookmarkState = (props: Props) => {
  const [hoveredState, setHoveredState] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // マウスオーバー時の処理
  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredState(true);
    }, 100);
  };
  const handleMouseLeave = (): void => {
    clearTimeout(timeoutRef.current!);
    setHoveredState(false);
  };
  // ブックマークボタンを押した時の処理
  const toggleBookmark = (
    props: Props,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    if (props.bookmarks.includes(props.thread)) {
      props.deleteBookmark(props.thread);
      return;
    }
    props.addBookmark(props.thread);
  };

  return (
    <button
      onClick={(e) => toggleBookmark(props, e)}
      className={styles.addButton}
      onMouseEnter={() => handleMouseEnter}
      onMouseLeave={() => handleMouseLeave}
    >
      {hoveredState || props.bookmarks.includes(props.thread) ? (
        <BookmarkFill className={styles.icon} />
      ) : (
        <Bookmark className={styles.icon} />
      )}
    </button>
  );
};

export default BookmarkState;
