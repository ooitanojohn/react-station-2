"use client";
import { useState, useEffect } from "react";

interface Post {
  threadId: string;
  posts: [{ id: string; post: string }];
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
    <div>
      <ul>
        {posts.length == 0 ? (
          <li>投稿はまだありません</li>
        ) : (
          posts.map((post, index) => {
            return (
              <div key={post.posts[index].id}>
                {post.posts.map((post) => {
                  return <li key={post.id}>{post.post}</li>;
                })}
              </div>
            );
          })
        )}
      </ul>
    </div>
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
      `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${threadId}/posts?offset=${offset}`,
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
  if (
    res[0].posts.length == 0 &&
    res[1].posts.length == 0 &&
    res[2].posts.length == 0
  ) {
    return []; // 投稿はまだありません
  }
  if (
    res[0].posts.length != 0 &&
    res[1].posts.length == 0 &&
    res[2].posts.length == 0
  ) {
    return [res[0]]; // 10件以下
  }
  if (
    res[0].posts.length != 0 &&
    res[1].posts.length != 0 &&
    res[2].posts.length == 0
  ) {
    return res[0].concat(res[1]); // 20件以下
  }
  return res[0].concat(res[1], res[2]);
}
