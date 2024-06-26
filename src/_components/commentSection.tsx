import data from "data/data.json";

export type Comment = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  replies: Array<{
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: {
      image: {
        png: string;
        webp: string;
      };
      username: string;
    };
  }>;
};

export default function CommentSection() {
  const { comments } = data;
  return (
    <div className="h-full w-full border border-black">
      {comments.map((item) => (
        <Card key={item.id} comment={item} />
      ))}
    </div>
  );
}

export function Card({ comment }: { comment: Comment }) {
  const { id, content, createdAt, score, user, replies } = comment;

  return (
    <div className="flex w-full items-center gap-4 p-4">
      <div className="flex w-[20px] flex-col items-center justify-center gap-2">
        <div>+</div>
        <div>{score}</div>
        <div>-</div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex items-center justify-center gap-4">
            <img
              src={user.image.webp}
              alt="user profile thumbnail"
              className="h-10 w-10"
            />
            <div>{user?.username}</div>
            <div>{createdAt}</div>
          </div>
          <button>reply</button>
        </div>
        <p className="">{content}</p>
      </div>
    </div>
  );
}
