'use client';
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Global-Errorは出るのか</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}