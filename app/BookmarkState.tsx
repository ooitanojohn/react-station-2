"use client";
import React, { useState, useRef } from "react";
import { Bookmark, BookmarkFill } from "@/components/Icon";
import styles from "@/src/styles/BookmarkState.module.css";
import { Thread } from "@/src/interfaces";

interface Props {
  thread: Thread;
  reactiveBookmark: (thread: Thread) => void;
}

const BookmarkState = (props: Props) => {
  const [hoveredState, setHoveredState] = useState(false);
  const [clickState,setClickState] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // マウスオーバー時の処理
  const handleMouseEnter = (threadId: string) => {
    timeoutRef.current = setTimeout(() => {
      setHoveredState(true);
    }, 100);
  };
  const handleMouseLeave = (threadId: string): void => {
    clearTimeout(timeoutRef.current!);
    setHoveredState(false);
  };
  // ブックマークボタンを押した時の処理,DBに保存する → 未実装
  const addThreadComponent = (
    props: Props,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setClickState(true);
    props.reactiveBookmark(props.thread);
  };

  return (
    <button
      onClick={(e) => addThreadComponent(props, e)}
      className={styles.addButton}
      onMouseEnter={() => handleMouseEnter(props.thread.id)}
      onMouseLeave={() => handleMouseLeave(props.thread.id)}
    >
      {hoveredState || clickState ? (
        <BookmarkFill className={styles.icon} />
      ) : (
        <Bookmark className={styles.icon} />
      )}
    </button>
  );
};

export default BookmarkState;
