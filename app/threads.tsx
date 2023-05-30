"use client"
import {Suspense, useEffect, useState} from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import Loading from "@/components/Loading";
import FetchError from "@/components/FetchError";

interface Thread{
    id: string;
    title: string;
}

/**
 * 初期表示時に取得するスレッド
 * @returns
 */
async function getThreadInit(): Promise<Thread[]> {
    const offsets = [0, 10, 20];
    const promises = offsets.map((offset) => {
      return fetch(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=${offset}`, {
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }).then((res) => {
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

export default function Threads() {
    const [threads, setThreads] = useState<Thread[]>([]);
    useEffect(() => {
        async function fetch() {
            try {
                const threads:Thread[] = await getThreadInit();
                console.log(threads);
                setThreads(threads);
            }catch(error){
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
        const data:Thread = await fetch(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(thread),
        }).then((res) => {
            if (!res.ok) {
                throw new Error("Threadの作成に失敗しました");
            }
            return res.json();
        })
        console.log(data)
        setThreads([...threads, data]);
    }
    const addThreadComponent = (e: any) => {
        e.preventDefault();
        const datatype = e.target.getAttribute("datatype");
        console.log(datatype);
        const postComponent = document.createElement("post-component");
        postComponent.textContent = datatype;
        document.body.appendChild(postComponent);
    };
    return (
        <ul>
        <li>
            <form onSubmit={createThread}>
                <input type="text" name="title" />
                <button type="submit">スレッド作成</button>
            </form>
        </li>
        <ErrorBoundary fallback={<FetchError />}>
        <Suspense fallback={<Loading />}>
        {threads.map((thread: Thread) => (
          <li key={thread.id}>
            <p>Title:<span>{thread.title}</span></p>
            <button onClick={addThreadComponent}  datatype={`/threads/${thread.title}`}>読む</button>
          </li>
        ))}
        </Suspense>
        </ErrorBoundary>
      </ul>
    );
}

