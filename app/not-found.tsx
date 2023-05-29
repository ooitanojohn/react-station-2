import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div>
      <h2>404</h2>
      <p>お探しのページが見つかりません。</p>
      <p>
        <Link href="/">ホームに戻る</Link>
      </p>
    </div>
  );
}