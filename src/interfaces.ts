export interface Thread {
  id: string;
  title: string;
}

export interface Post {
  threadId: string;
  posts: [{ id: string; post: string }];
}
