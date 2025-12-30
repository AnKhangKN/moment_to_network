"use client";

import { useState } from "react";

type User = {
  id: string;
  username: string;
};

type Hashtag = {
  tag: string;
};

// mock data (sau thay bằng API)
const mockUsers: User[] = [
  { id: "1", username: "khangphan" },
  { id: "2", username: "minhnguyen" },
  { id: "3", username: "anhtran" },
];

const mockHashtags: Hashtag[] = [
  { tag: "react" },
  { tag: "nextjs" },
  { tag: "javascript" },
];

export default function PostCreateComponent() {
  const [modalPostCreate, setModalPostCreate] = useState(false);
  const [caption, setCaption] = useState("");
  const [suggestions, setSuggestions] = useState<(User | Hashtag)[]>([]);
  const [type, setType] = useState<"user" | "hashtag" | null>(null);
  const [showSuggest, setShowSuggest] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const text = e.target.value;
    setCaption(text);

    const words = text.split(/\s/);
    const lastWord = words[words.length - 1];

    if (lastWord.startsWith("@")) {
      const query = lastWord.slice(1).toLowerCase();
      setSuggestions(
        mockUsers.filter((u) => u.username.toLowerCase().includes(query))
      );
      setType("user");
      setShowSuggest(true);
      return;
    }

    if (lastWord.startsWith("#")) {
      const query = lastWord.slice(1).toLowerCase();
      setSuggestions(
        mockHashtags.filter((h) => h.tag.toLowerCase().includes(query))
      );
      setType("hashtag");
      setShowSuggest(true);
      return;
    }

    setShowSuggest(false);
    setType(null);
  }

  function insertSuggestion(item: User | Hashtag) {
    const words = caption.split(/\s/);
    words.pop();

    if (type === "user" && "username" in item) {
      words.push(`@${item.username}`);
    }

    if (type === "hashtag" && "tag" in item) {
      words.push(`#${item.tag}`);
    }

    setCaption(words.join(" ") + " ");
    setShowSuggest(false);
  }

  return (
    <div>
      {/* Trigger */}
      <div className="bg-white border border-gray-50 shadow rounded-lg p-4 flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-gray-300 shrink-0"></div>

        <div className="flex items-center justify-between w-full">
          <div
            className="text-gray-400 cursor-text"
            onClick={() => setModalPostCreate(true)}
          >
            Bạn đang nghĩ gì?
          </div>
          <button
            onClick={() => setModalPostCreate(true)}
            className="text-blue-500 font-medium"
          >
            Đăng
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalPostCreate && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-2/3 h-[calc(100vh-80px)] flex flex-col justify-between">
            {/* Header */}
            <div className="p-4 flex justify-between items-center">
              <div className="font-medium">Tạo bài viết</div>
              <button
                onClick={() => setModalPostCreate(false)}
                className="text-gray-500"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="flex h-screen p-4">
              <div className="flex-1 border">ảnh</div>

              <div className="flex-1 border">
                <div className="relative">
                  <textarea
                    value={caption}
                    onChange={handleChange}
                    placeholder="Bạn đang nghĩ gì?"
                    rows={5}
                    className="w-full resize-none text-lg outline-none h-[calc(100vh-300px)] border"
                  />

                  {/* Suggest dropdown */}
                  {showSuggest && suggestions.length > 0 && (
                    <div className="absolute left-0 top-0 mt-1 w-64 bg-white border rounded-lg shadow z-10">
                      {suggestions.map((item, index) => (
                        <div
                          key={index}
                          onClick={() => insertSuggestion(item)}
                          className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                        >
                          {"username" in item
                            ? `@${item.username}`
                            : `#${item.tag}`}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>Thêm vào</div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4">
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium">
                Đăng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
