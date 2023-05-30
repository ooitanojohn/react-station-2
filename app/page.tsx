import Threads from "./threads";

export default function Page() {
  return (
    <main>
      <article>
        <h2>最近作成されたスレッド</h2>
        <Threads />
      </article>
    </main>
  );
}
