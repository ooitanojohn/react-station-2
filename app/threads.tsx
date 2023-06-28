"use client";

import styles from "@/src/styles/Threads.module.css";
import Posts from "./Posts";
import { EditNote, Delete, DeleteFill } from "@/components/Icon";
import { Thread } from "@/src/interfaces";

interface Props {
  bookmarks: Thread[];
}

export default function Threads(props: Props) {
  console.log("props.bookmarks", props.bookmarks);
  return (
    <article className={styles.section}>
      {props.bookmarks.map((threadId, index) => (
        <section key={index}>
          <div className={styles.titleContainer}>
            <h3 className={styles.h3}>{threadId.title}の投稿一覧</h3>
            <button type="submit" className={styles.modalBtn}>
              <EditNote className={styles.icon} />
              new
            </button>
            <button type="submit" className={styles.modalBtn}>
              <Delete className={styles.icon} />
            </button>
          </div>
          <Posts threadId={threadId.id} />
        </section>
      ))}
    </article>
  );
}
