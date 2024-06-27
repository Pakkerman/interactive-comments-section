"use client";

import { useState } from "react";
import { MinusIcon, PlusIcon, ReplyIcon } from "~/svgs";
import type { Comment } from "~/_components/commentSection";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Reply, ReplyCard } from "./Reply";
import ReplyForm from "./ReplyInput";

export default function Comment({ comment }: { comment: Comment }) {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [animationParent] = useAutoAnimate();

  return (
    <div
      ref={animationParent}
      className="flex flex-col items-center justify-center gap-2 transition-all  "
    >
      <CommentCard
        comment={comment}
        toggleReply={() => {
          setShowReplyInput(!showReplyInput);
        }}
      />
      <Reply replies={comment.replies} />
      <ReplyForm show={showReplyInput} to={comment.user.username} />
    </div>
  );
}

function CommentCard({
  comment,
  toggleReply,
}: {
  comment: Comment;
  toggleReply: () => void;
}) {
  const { content, createdAt, score, user } = comment;
  const [currentScore, setCurrentScore] = useState(score);

  return (
    <div className="flex w-full items-center gap-4 rounded-md bg-neutral-white p-4">
      <div className="flex w-[20px] flex-col items-center justify-center gap-2 rounded-md bg-neutral-light-gray px-5 py-2 text-primary-moderate-blue ">
        <button
          key="plus"
          className="group h-6 w-6 "
          onClick={() => {
            setCurrentScore(currentScore + 1);
          }}
        >
          <PlusIcon />
        </button>
        <div>{currentScore}</div>
        <button
          key="minus"
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
              className="h-8 w-8"
            />
            <div className="text-neutral-dark-blue">{user?.username}</div>
            <div className="text-neutral-grayish-blue">{createdAt}</div>
          </div>
          <button
            className="group flex items-center gap-2 px-4 text-primary-moderate-blue hover:text-primary-light-grayish-blue"
            onClick={toggleReply}
          >
            <ReplyIcon />
            Reply
          </button>
        </div>
        <p className="">{content}</p>
      </div>
    </div>
  );
}
