"use client";

import { Post } from "@/types";
import Image from "next/image";
import {
  PiArrowsClockwiseLight,
  PiBookmarkSimpleLight,
  PiChatCircleTextLight,
  PiDotsThreeBold,
  PiHeartLight,
  PiShareFatLight,
} from "react-icons/pi";

interface PostComponentProps {
  post: Post;
}

export default function PostComponent({ post }: PostComponentProps) {
  return (
    <div>
      {post.post_type === "post" ? (
        <div className="flex p-4 space-x-3 shadow rounded-lg mt-4 border border-gray-100">
          <div className="w-10 h-10 rounded-full bg-gray-300 shrink-0"></div>

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

            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="my-2">{post.caption}</span>

                {post.hashtag.map((hashtag) => (
                  <span
                    key={hashtag}
                    className="text-indigo-500 text-sm cursor-pointer"
                  >
                    #{hashtag}
                  </span>
                ))}
              </div>

              <div className="mt-2">
                {post.medias.length === 1 &&
                  post.medias.map((media) => {
                    if (media.type === "image") {
                      return (
                        <Image
                          key={media.media_id}
                          src={media.media_link}
                          alt="post media"
                          width={300}
                          height={300}
                          className="rounded-xl object-cover w-80 h-72"
                        />
                      );
                    }

                    return (
                      <video
                        key={media.media_id}
                        src={media.media_link}
                        controls
                        className="rounded-xl w-80 h-60 object-cover"
                      />
                    );
                  })}

                {
                  <div className="grid grid-cols-2 gap-2">
                    {post.medias.length === 2 &&
                      post.medias.map((media) => {
                        if (media.type === "image") {
                          return (
                            <Image
                              key={media.media_id}
                              src={media.media_link}
                              alt="post media"
                              width={300}
                              height={300}
                              className="rounded-xl object-cover w-80 h-60"
                            />
                          );
                        }

                        return (
                          <video
                            key={media.media_id}
                            src={media.media_link}
                            controls
                            className="rounded-xl w-80 h-60 object-cover"
                          />
                        );
                      })}
                  </div>
                }

                {
                  <div className="grid grid-cols-2 gap-2">
                    {post.medias.length === 3 &&
                      post.medias.map((media) => {
                        if (media.type === "image") {
                          return (
                            <Image
                              key={media.media_id}
                              src={media.media_link}
                              alt="post media"
                              width={300}
                              height={300}
                              className="rounded-xl object-cover w-80 h-60"
                            />
                          );
                        }

                        return (
                          <video
                            key={media.media_id}
                            src={media.media_link}
                            controls
                            className="rounded-xl w-80 h-60 object-cover"
                          />
                        );
                      })}
                  </div>
                }

                {
                  <div className="grid grid-cols-2 gap-2">
                    {post.medias.length === 4 &&
                      post.medias.map((media) => {
                        if (media.type === "image") {
                          return (
                            <Image
                              key={media.media_id}
                              src={media.media_link}
                              alt="post media"
                              width={300}
                              height={300}
                              className="rounded-xl object-cover w-80 h-60"
                            />
                          );
                        }

                        return (
                          <video
                            key={media.media_id}
                            src={media.media_link}
                            controls
                            className="rounded-xl w-80 h-60 object-cover"
                          />
                        );
                      })}
                  </div>
                }

                {post.medias.length > 4 && (
                  <div className="grid grid-cols-2 gap-2">
                    {(() => {
                      const visibleMedias = post.medias.slice(0, 4);
                      const remainCount = post.medias.length - 4;

                      return visibleMedias.map((media, index) => {
                        const isLast = index === 3;

                        return (
                          <div key={media.media_id} className="relative">
                            {media.type === "image" ? (
                              <Image
                                src={media.media_link}
                                alt="post media"
                                width={300}
                                height={300}
                                className="rounded-xl object-cover w-80 h-60"
                              />
                            ) : (
                              <video
                                src={media.media_link}
                                controls
                                className="rounded-xl w-80 h-60 object-cover"
                              />
                            )}

                            {isLast && (
                              <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-xl">
                                <span className="text-white text-2xl font-semibold">
                                  +{remainCount}
                                </span>
                              </div>
                            )}
                          </div>
                        );
                      });
                    })()}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center space-x-1 cursor-pointer">
                <div className="hover:bg-red-50 hover:text-red-500 p-1 rounded-full">
                  <PiHeartLight size={22} />
                </div>
                <span className="text-sm">2</span>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer">
                <div className="hover:bg-blue-50 hover:text-blue-500 p-1 rounded-full">
                  <PiChatCircleTextLight size={22} />
                </div>
                <span className="text-sm">2</span>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer">
                <div className="hover:bg-green-50 hover:text-green-500 p-1 rounded-full">
                  <PiArrowsClockwiseLight size={22} />
                </div>
                <span className="text-sm">2</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="hover:bg-blue-50 hover:text-blue-500 p-1 rounded-full">
                  <PiBookmarkSimpleLight className="cursor-pointer" size={22} />
                </div>
                <div className="hover:bg-blue-50 hover:text-blue-500 p-1 rounded-full">
                  <PiShareFatLight className="cursor-pointer" size={22} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : post.post_type === "share" ? (
        <div className="flex p-4 space-x-3 shadow rounded-lg mt-4 border border-gray-100">
          <div className="w-10 h-10 rounded-full bg-gray-300 shrink-0"></div>

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

            {/* Bài share */}
            <div className="flex space-x-3 shadow rounded-lg mt-4 border border-gray-100 p-2">
              <div className="w-7 h-7 rounded-full bg-gray-300 shrink-0"></div>

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

                <div className="flex items-center space-x-2">
                  <span className="my-2">{post?.share?.caption}</span>

                  {post?.share?.hashtag.map((hashtag) => (
                    <span
                      key={hashtag}
                      className="text-indigo-500 text-sm cursor-pointer"
                    >
                      #{hashtag}
                    </span>
                  ))}
                </div>

                <div className="mt-2">
                  {post?.share?.medias.length === 1 &&
                    post?.share?.medias.map((media) => {
                      if (media.type === "image") {
                        return (
                          <Image
                            key={media.media_id}
                            src={media.media_link}
                            alt="post media"
                            width={300}
                            height={300}
                            className="rounded-xl object-cover w-80 h-72"
                          />
                        );
                      }

                      return (
                        <video
                          key={media.media_id}
                          src={media.media_link}
                          controls
                          className="rounded-xl w-80 h-60 object-cover"
                        />
                      );
                    })}

                  {
                    <div className="grid grid-cols-2 gap-2">
                      {post?.share?.medias.length === 2 &&
                        post?.share?.medias.map((media) => {
                          if (media.type === "image") {
                            return (
                              <Image
                                key={media.media_id}
                                src={media.media_link}
                                alt="post media"
                                width={300}
                                height={300}
                                className="rounded-xl object-cover w-80 h-60"
                              />
                            );
                          }

                          return (
                            <video
                              key={media.media_id}
                              src={media.media_link}
                              controls
                              className="rounded-xl w-80 h-60 object-cover"
                            />
                          );
                        })}
                    </div>
                  }

                  {
                    <div className="grid grid-cols-2 gap-2">
                      {post?.share?.medias.length === 3 &&
                        post?.share?.medias.map((media) => {
                          if (media.type === "image") {
                            return (
                              <Image
                                key={media.media_id}
                                src={media.media_link}
                                alt="post media"
                                width={300}
                                height={300}
                                className="rounded-xl object-cover w-80 h-60"
                              />
                            );
                          }

                          return (
                            <video
                              key={media.media_id}
                              src={media.media_link}
                              controls
                              className="rounded-xl w-80 h-60 object-cover"
                            />
                          );
                        })}
                    </div>
                  }

                  {
                    <div className="grid grid-cols-2 gap-2">
                      {post?.share?.medias.length === 4 &&
                        post?.share?.medias.map((media) => {
                          if (media.type === "image") {
                            return (
                              <Image
                                key={media.media_id}
                                src={media.media_link}
                                alt="post media"
                                width={300}
                                height={300}
                                className="rounded-xl object-cover w-80 h-60"
                              />
                            );
                          }

                          return (
                            <video
                              key={media.media_id}
                              src={media.media_link}
                              controls
                              className="rounded-xl w-80 h-60 object-cover"
                            />
                          );
                        })}
                    </div>
                  }

                  <div className="grid grid-cols-2 gap-2">
                    {post?.share?.medias &&
                      post.share.medias.length > 4 &&
                      (() => {
                        const visibleMedias = post.share.medias.slice(0, 4);
                        const remainCount = post.share.medias.length - 4;

                        return visibleMedias.map((media, index) => {
                          const isLast = index === 3;

                          return (
                            <div key={media.media_id} className="relative">
                              {media.type === "image" ? (
                                <Image
                                  src={media.media_link}
                                  alt="post media"
                                  width={300}
                                  height={300}
                                  className="rounded-xl object-cover w-80 h-60"
                                />
                              ) : (
                                <video
                                  src={media.media_link}
                                  controls
                                  className="rounded-xl w-80 h-60 object-cover"
                                />
                              )}

                              {isLast && (
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-xl">
                                  <span className="text-white text-2xl font-semibold">
                                    +{remainCount}
                                  </span>
                                </div>
                              )}
                            </div>
                          );
                        });
                      })()}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center space-x-1 cursor-pointer">
                <div className="hover:bg-red-50 hover:text-red-500 p-1 rounded-full">
                  <PiHeartLight size={22} />
                </div>
                <span className="text-sm">2</span>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer">
                <div className="hover:bg-blue-50 hover:text-blue-500 p-1 rounded-full">
                  <PiChatCircleTextLight size={22} />
                </div>
                <span className="text-sm">2</span>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer">
                <div className="hover:bg-green-50 hover:text-green-500 p-1 rounded-full">
                  <PiArrowsClockwiseLight size={22} />
                </div>
                <span className="text-sm">2</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="hover:bg-blue-50 hover:text-blue-500 p-1 rounded-full">
                  <PiBookmarkSimpleLight className="cursor-pointer" size={22} />
                </div>
                <div className="hover:bg-blue-50 hover:text-blue-500 p-1 rounded-full">
                  <PiShareFatLight className="cursor-pointer" size={22} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
