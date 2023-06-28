"use client";

import styles from "@/src/styles/Threads.module.css";
import Posts from "./Posts";
import DeleteConfirmModal from "./@modal/thread/DeleteConfirmModal";
import { EditNote } from "@/components/Icon";
import { Thread } from "@/src/interfaces";

interface Props {
  bookmarks: Thread[];
  deleteBookmark: (thread: Thread) => void;
}

export default function Threads(props: Props) {
  return (
    <article className={styles.article}>
      {props.bookmarks.map((thread, index) => (
        <section key={index} className={styles.section}>
          <div className={styles.titleContainer}>
            <h3 className={styles.h3}>{thread.title}の投稿一覧</h3>
            <button className={styles.modalBtn}>
              <EditNote className={styles.icon} />
              new
            </button>
            <DeleteConfirmModal
              thread={thread}
              deleteBookmark={props.deleteBookmark}
            />
          </div>
          <Posts threadId={thread.id} />
        </section>
      ))}
    </article>
  );
}
