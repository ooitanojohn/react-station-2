"use client";
import { useState, useEffect } from "react";
import styles from "@/src/styles/Posts.module.css";
import { MoreVert } from "@/components/Icon";

interface Post {
  id: string;
  post: string;
}

interface Props {
  threadId: string;
}

export default function Thread(props: Props) {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    async function fetch() {
      const posts: Post[] = await getThreadInit(props.threadId);
      setPosts(posts);
    }
    fetch();
  }, [props.threadId]);

  return (
    <ul className={styles.ul}>
      {posts.length != 0 ? (
        posts.map((post, index) => {
          return (
            <>
              <li key={index} className={styles.id}>
                ID: {index + 1}
              </li>
              <li className={styles.post}>{post.post}</li>
            </>
          );
        })
      ) : (
        <li>投稿はまだありません</li>
      )}
      <MoreVert className={styles.moreVert} />
    </ul>
  );
}

/**
 * 初期表示時に取得する投稿
 * @returns
 */
async function getThreadInit(threadId: string): Promise<Post[]> {
  const offsets = [0, 10, 20];
  const promises = offsets.map((offset) => {
    return fetch(
      `${process.env.Next_PUBLIC_API_URL}/threads/${threadId}/posts?offset=${offset}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      }
    ).then((res) => {
      return res.json();
    });
  });
  const res = await Promise.all(promises);
  const mapRes = res.map((res) => res.posts);

  if (mapRes[0].length == 0 && mapRes[1].length == 0 && mapRes[2].length == 0) {
    return []; // 投稿はまだありません
  }
  if (mapRes[0].length != 0 && mapRes[1].length == 0 && mapRes[2].length == 0) {
    return mapRes[0]; // 10件以下
  }
  if (mapRes[0].length != 0 && mapRes[1].length != 0 && mapRes[2].length == 0) {
    return mapRes[0].concat(mapRes[1]); // 20件以下
  }
  return mapRes[0].concat(mapRes[1], mapRes[2]);
}
