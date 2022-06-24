import React from "react";
import { BsCaretRight } from "react-icons/bs";
import { Post } from "../@types/contentful";

type Props = {
  item: Post;
};

function PostCard({ item }: Props) {
  return (
    <div className="flex items-center w-full justify-between bg-[#1d1d1d] p-2 rounded-sm">
      <h3 className="font-mono">{item.fields.title}</h3>
      <button aria-label="view post" className="p-2">
        <BsCaretRight />
      </button>
    </div>
  );
}

export default PostCard;
