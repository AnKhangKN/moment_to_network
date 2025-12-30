import {
  PiArrowsClockwiseLight,
  PiBookmarkSimpleLight,
  PiChatCircleTextLight,
  PiHeartLight,
  PiShareFatLight,
} from "react-icons/pi";

interface PostActionProps {
  post: {
    hearts_count: number;
    comments_count: number;
    shares_count: number;
  };
}

export default function PostAction({ post }: PostActionProps) {
  return (
    <div className="flex items-center justify-between mt-8">
      <div className="flex items-center space-x-1">
        <button className="hover:bg-red-50 hover:text-red-500 p-1 rounded-full cursor-pointer">
          <PiHeartLight size={22} />
        </button>
        <span className="text-sm">{post.hearts_count}</span>
      </div>
      <div className="flex items-center space-x-1">
        <button className="hover:bg-blue-50 hover:text-blue-500 p-1 rounded-full cursor-pointer">
          <PiChatCircleTextLight size={22} />
        </button>
        <span className="text-sm">{post.comments_count}</span>
      </div>
      <div className="flex items-center space-x-1">
        <button className="hover:bg-green-50 hover:text-green-500 p-1 rounded-full cursor-pointer">
          <PiArrowsClockwiseLight size={22} />
        </button>
        <span className="text-sm">{post.shares_count}</span>
      </div>
      <div className="flex items-center space-x-2">
        <button className="hover:bg-blue-50 hover:text-blue-500 p-1 rounded-full cursor-pointer">
          <PiBookmarkSimpleLight size={22} />
        </button>
        <button className="hover:bg-blue-50 hover:text-blue-500 p-1 rounded-full cursor-pointer">
          <PiShareFatLight size={22} />
        </button>
      </div>
    </div>
  );
}
