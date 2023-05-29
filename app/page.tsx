import Threads from "./threads";

interface Thread {
  id: string;
  title: string;
}

async function getThreadInit(): Promise<Thread[]> {
  const offsets = [0, 10, 20];
  const promises = offsets.map((offset) => {
    return fetch(`${process.env.BACKENDURL}/threads?offset=${offset}`, {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "force-cache",
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

export default async function Page() {
  const initThreads = await getThreadInit();
  return (
    <main>
      <article>
        <h2>最近作成されたスレッド</h2>
        <Threads initThreads={initThreads} />
      </article>
    </main>
  );
}
