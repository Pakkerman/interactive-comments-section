"use client";

import { useState } from "react";
import { MinusIcon, PlusIcon } from "~/svgs";
import type { Comment } from "~/_components/commentSection";

export default function Card({ comment }: { comment: Comment }) {
  const { id, content, createdAt, score, user, replies } = comment;
  const [currentScore, setCurrentScore] = useState(score);

  return (
    <div className="flex w-full items-center gap-4 rounded-md bg-neutral-white p-4">
      <div className="flex w-[20px] flex-col items-center justify-center gap-2 rounded-md bg-neutral-light-gray px-5 py-2 text-primary-moderate-blue ">
        <button
          className="group h-6 w-6 "
          onClick={() => {
            setCurrentScore(currentScore + 1);
          }}
        >
          <PlusIcon />
        </button>
        <div>{currentScore}</div>
        <button
          className="group h-6 w-6 "
          onClick={() => {
            setCurrentScore(currentScore - 1);
          }}
        >
          <MinusIcon />
        </button>
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
