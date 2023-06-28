import {NextRequest,NextResponse} from  "next/server"

type Thread = {
  id: string,
  title: string,
}
/**
 * 初期表示時に取得するスレッド
 * @returns
 */
async function getThreadInit(): Promise<NextResponse<Thread[]>> {
    const offsets = [0, 10, 20];
    const promises = offsets.map((offset) => {
      return fetch(`${process.env.Next_PUBLIC_API_URL}/threads?offset=${offset}`, {
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
      return NextResponse.json(res[0].concat(res[1], res[2]));
    } catch (error) {
      throw new Error("Threadの取得に失敗しました");
    }
}