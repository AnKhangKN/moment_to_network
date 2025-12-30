"use client";

import { Media } from "@/types";
import Image from "next/image";

interface RenderMediaProps {
  medias: Media[];
}

export default function RenderMedia({ medias }: RenderMediaProps) {
  return (
    <div className="my-2">
      {medias.length === 1 &&
        medias.map((media) => {
          if (media.type === "image") {
            return (
              <Image
                key={media.media_id}
                src={media.media_link}
                alt="post media"
                width={300}
                height={300}
                className="rounded-xl object-cover w-full h-full"
              />
            );
          }

          return (
            <video
              key={media.media_id}
              src={media.media_link}
              controls
              className="rounded-xl w-full h-full object-cover"
            />
          );
        })}

      {
        <div className="grid grid-cols-2 gap-2">
          {medias.length === 2 &&
            medias.map((media) => {
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
          {medias.length === 3 &&
            medias.map((media) => {
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
          {medias.length === 4 &&
            medias.map((media) => {
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

      {medias.length > 4 && (
        <div className="grid grid-cols-2 gap-2">
          {(() => {
            const visibleMedias = medias.slice(0, 4);
            const remainCount = medias.length - 4;
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
  );
}
