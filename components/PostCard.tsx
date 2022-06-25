import type { Post } from "../@types/contentful";
import { BsCaretRight } from "react-icons/bs";
import Link from "next/link";

type Props = {
  item: Post;
};

function PostCard({ item }: Props) {
  return (
    <div className="flex items-center w-full justify-between bg-[#1d1d1d] p-2 rounded-sm">
      <h3 className="font-mono">{item.fields.title}</h3>
      <button aria-label="view post" className="p-2">
        <Link href={"/post/" + item.fields.slug}>
          <a>
            <BsCaretRight />
          </a>
        </Link>
      </button>
    </div>
  );
}

export default PostCard;
