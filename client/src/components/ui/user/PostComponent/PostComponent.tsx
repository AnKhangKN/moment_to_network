"use client";

import { Post } from "@/types";
import { PiDotsThreeBold } from "react-icons/pi";
import RenderMedia from "./RenderMedia/RenderMedia";
import PostAction from "./PostAction/PostAction";
import PostAvatar from "./PostAvatar/PostAvatar";
import Link from "next/link";

interface PostComponentProps {
  post: Post;
}

function renderCaption(text: string) {
  const regex = /(@\w+|#\w+)/g;

  return text.split(regex).map((part, index) => {
    if (part.startsWith("@")) {
      return (
        <Link
          key={index}
          href={`/${part.slice(1)}`}
          className="text-indigo-500 hover:underline"
        >
          {part}
        </Link>
      );
    }

    if (part.startsWith("#")) {
      return (
        <Link
          key={index}
          href={`/hashtag/${part.slice(1)}`}
          className="text-indigo-500 hover:underline"
        >
          {part}
        </Link>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

export default function PostComponent({ post }: PostComponentProps) {
  return (
    <div className="bg-white">
      {post.post_type === "post" ? (
        <div className="flex p-4 space-x-4 shadow rounded-lg mt-4 border border-gray-100">
          <PostAvatar post={post} />

          <div className="flex flex-col w-full">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex gap-2 font-medium items-center">
                  <div>
                    <span>{post.author.last_name}</span>
                    <span>{post.author.first_name}</span>
                  </div>

                  <div className="w-1 h-1 rounded-full bg-gray-400"></div>

                  <span>{post?.group?.group_name}</span>
                </div>
                <div className="text-[12px] text-gray-400">22 giờ trước</div>
              </div>

              <PiDotsThreeBold size={20} />
            </div>

            <div className="flex flex-col">
              <div
                className={`flex items-center space-x-2 ${
                  post.caption_bg
                    ? `${post.caption_bg} py-32 px-8 rounded-lg text-2xl`
                    : ""
                }`}
              >
                <span className={`my-2 ${post.caption_bg ? "text-white" : ""}`}>
                  {renderCaption(post.caption)}
                </span>
              </div>

              <RenderMedia medias={post.medias} />
            </div>

            <PostAction post={post} />
          </div>
        </div>
      ) : post.post_type === "share" ? (
        <div className="flex p-4 space-x-3 shadow rounded-lg mt-4 border border-gray-100">
          <PostAvatar post={post} />

          <div className="flex flex-col w-full">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex space-x-1 font-medium">
                  <span>{post.author.last_name}</span>
                  <span>{post.author.first_name}</span>
                </div>
                <div className="text-[12px] text-gray-400">22 giờ trước</div>
              </div>

              <PiDotsThreeBold size={20} />
            </div>

            <div className="flex items-center space-x-2">
              <span className="my-2">{post?.caption}</span>
            </div>

            {/* Bài share */}
            <div className="flex space-x-3 shadow rounded-lg border border-gray-100 p-2">
              {post?.share && <PostAvatar post={post.share} />}

              <div className="flex flex-col w-full">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex space-x-1 font-medium">
                      <span>{post?.share?.author.last_name}</span>
                      <span>{post?.share?.author.first_name}</span>
                    </div>
                    <div className="text-[12px] text-gray-400">
                      22 giờ trước
                    </div>
                  </div>

                  <PiDotsThreeBold size={20} />
                </div>

                {post?.share && (
                  <div className="flex flex-col">
                    <div
                      className={`flex items-center space-x-2 ${
                        post?.share?.caption_bg
                          ? `${post?.share?.caption_bg} py-32 px-8 rounded-lg text-2xl`
                          : ""
                      }`}
                    >
                      <span
                        className={`my-2 ${
                          post?.share?.caption_bg ? "text-white" : ""
                        }`}
                      >
                        {renderCaption(post?.share?.caption)}
                      </span>
                    </div>

                    <RenderMedia medias={post?.share?.medias} />
                  </div>
                )}
              </div>
            </div>

            <PostAction post={post} />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
