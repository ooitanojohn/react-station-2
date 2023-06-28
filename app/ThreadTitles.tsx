"use client";
import { Suspense, useEffect, useState } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import FetchError from "@/components/FetchError";
import styles from "@/src/styles/ThreadTitles.module.css";
import { PostAdd, MoreVert } from "@/components/Icon";
import BookmarkState from "./BookmarkState";
import { Thread } from "@/src/interfaces";

interface Props {
  reactiveBookmark: (thread: Thread) => void;
}
/**
 * 初期表示時に取得するスレッド
 * @returns
 */
async function getThreadInit(): Promise<Thread[]> {
  const offsets = [0, 10, 20];
  const promises = offsets.map((offset) => {
    return fetch(
      `${process.env.BACKENDURL}/threads?offset=${offset}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      }
    ).then((res) => {
      if (!res.ok) {
        throw new Error("Threadの取得に失敗しました");
      }
      return res.json();
    });
  });
  try {
    const res = await Promise.all(promises);
    return res[0].concat(res[1], res[2]);
  } catch (error) {
    throw new Error("Threadの取得に失敗しました");
  }
}

export default function ThreadTitles(props: Props) {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    async function fetch() {
      try {
        const threads: Thread[] = await getThreadInit();
        setThreads(threads);
      } catch (error) {
        throw new Error("Threadの取得に失敗しました");
      }
    }
    fetch();
  }, []);

  const createThread = async (e: any) => {
    e.preventDefault();
    const thread = {
      title: e.target.title.value,
    };
    const data: Thread = await fetch(
      `${process.env.BACKENDURL}/threads`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(thread),
      }
    ).then((res) => {
      if (!res.ok) {
        throw new Error("Threadの作成に失敗しました");
      }
      return res.json();
    });
    console.log(data);
    setThreads([...threads, data]);
  };
  return (
    <>
      <article className={styles.articleTitle}>
        <div className={styles.titleContainer}>
          <h2 className={styles.h2}>最近作成されたスレッド</h2>
          <button type="submit" className={styles.modalBtn}>
            <PostAdd className={styles.icon} />
            new
          </button>
        </div>
        {/* <form onSubmit={createThread}>
          <input type="text" name="title" />
        </form> */}
        <ul className={styles.ul}>
          <ErrorBoundary fallback={<FetchError />}>
            <Suspense fallback={<p>title取得中...</p>}>
              {threads.map((thread: Thread, index: number) => (
                <li key={index} className={styles.li}>
                  <p className={styles.threadTitle}>
                    Title :{" "}
                    <span className={styles.threadTitleText}>
                      {thread.title}
                    </span>
                  </p>
                  <BookmarkState
                    thread={thread}
                    reactiveBookmark={props.reactiveBookmark}
                  />
                </li>
              ))}
            </Suspense>
          </ErrorBoundary>
          <MoreVert className={styles.moreVert} />
        </ul>
      </article>
    </>
  );
}
