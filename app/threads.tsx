"use client";
import { useState, useEffect } from "react";

import styles from "@/src/styles/Threads.module.css";
import Posts from "./Posts";
import { Suspense } from "react";
import { EditNote, Delete, DeleteFill } from "@/components/Icon";

export default function Threads() {
  // const [threadId, setPosts] = useState<Post[]>([]);
  const threadIds = [
    "04d6823a-c9bd-4ab8-b3b9-a2f68a4baebd",
    "4f617b39-5082-45b3-8fdf-79384da0d3b6",
  ];
  return (
    <article className={styles.section}>
      <Suspense fallback={<p>投稿取得中...</p>}>
        {threadIds.map((threadId, index) => (
          <section key={index}>
            <div className={styles.titleContainer}>
              <h3 className={styles.h3}>の投稿一覧</h3>
              <button type="submit" className={styles.modalBtn}>
                <EditNote className={styles.icon} />
                new
              </button>
              <button type="submit" className={styles.modalBtn}>
                <Delete className={styles.icon} />
              </button>
            </div>
            <Posts threadId={threadId} />
          </section>
        ))}
      </Suspense>
    </article>
  );
}
