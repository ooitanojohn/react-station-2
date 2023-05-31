"use client";
import React,{ useState } from "react";
import { Bookmark, BookmarkFill } from "@/components/Icon";
import styles from "@/src/styles/BookmarkState.module.css";

interface BookmarkProps {
  props: Thread;
}
interface Thread {
  id: string;
  title: string;
}

const BookmarkState: React.FC<BookmarkProps> = ({props}:BookmarkProps) => {
  const [hoveredIndexes, setHoveredIndexes] = useState<string[]>([]);

  // マウスオーバー時の処理
  const handleMouseEnter = (threadId: string) => {
    setHoveredIndexes((prevIndexes) => [...prevIndexes, threadId]);
  };
  const handleMouseLeave = (threadId: string) => {
    setHoveredIndexes((prevIndexes) =>
      prevIndexes.filter((i) => i !== threadId)
    );
  };
  const addThreadComponent = (e: any) => {
    e.preventDefault();
    const datatype = e.target.getAttribute("datatype");
    console.log(datatype);
    const postComponent = document.createElement("post-component");
    postComponent.textContent = datatype;
    document.body.appendChild(postComponent);
  };

  return (
    <button
      onClick={addThreadComponent}
      datatype={`/threads/${props.title}`}
      className={styles.addButton}
      onMouseEnter={() => handleMouseEnter(props.id)}
      onMouseLeave={() => handleMouseLeave(props.id)}
    >
      {hoveredIndexes.includes(props.id) ? (
        <BookmarkFill className={styles.icon} />
      ) : (
        <Bookmark className={styles.icon} />
      )}
    </button>
  );
};

export default BookmarkState;
