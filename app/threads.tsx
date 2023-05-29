"use client";
import React, {Suspense} from "react";
import Loading from "./loading";

interface Thread{
    id: string;
    title: string;
}
export default function Threads(Props:{initThreads: Thread[]}) {
    const test = (e: any) => {
        console.log("test");
    }
    const addPostComponent = (e: any) => {
        e.preventDefault();
        const datatype = e.target.getAttribute("datatype");
        console.log(datatype);
        const postComponent = document.createElement("post-component");
        postComponent.textContent = datatype;
        document.body.appendChild(postComponent);
      };
    return (
        <ul>
        <li><button onClick={test}>スレッドを新しく作成する</button></li>
        <Suspense fallback={<Loading />}>
        {Props.initThreads.map((thread: any) => (
          <li key={thread.id}>
            <p>Title:<span>{thread.title}</span></p>
            <button onClick={test} datatype={`/threads/${thread.title}`}>読む</button>
          </li>
        ))}
        </Suspense>
      </ul>
    );
}