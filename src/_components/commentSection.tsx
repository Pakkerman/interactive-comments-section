import data from "data/data.json";
import Card from "~/components/Card";

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
    <div className="h-full w-full  ">
      <ul className="flex flex-col gap-4">
        {comments.map((item) => (
          <li key={item.id}>
            <Card comment={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
