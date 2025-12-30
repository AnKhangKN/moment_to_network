"use client";

import Image from "next/image";

interface Author {
  user_avatar?: string;
}

interface Group {
  group_avatar?: string;
}

interface PostAvatarProps {
  post: {
    author: Author;
    group?: Group | null;
  };
}

export default function PostAvatar({ post }: PostAvatarProps) {
  return (
    <div className="relative">
      {/* Group avatar */}
      {post.group && (
        <div className="w-10 h-10 rounded-lg bg-amber-200 shrink-0 overflow-hidden border-2 border-gray-400">
          <Image
            src={
              post.group.group_avatar
                ? post.group.group_avatar
                : "/assets/images/group_avatar.webp"
            }
            alt="Group avatar"
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* User avatar */}
      <div
        className={`${
          post.group ? "w-8 h-8 absolute top-3 left-3" : "w-10 h-10"
        } rounded-full bg-gray-300 shrink-0 overflow-hidden border-white border-2`}
      >
        <Image
          src={
            post.author.user_avatar
              ? post.author.user_avatar
              : "/assets/images/user_avatar.webp"
          }
          alt="User avatar"
          width={post.group ? 32 : 40}
          height={post.group ? 32 : 40}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
