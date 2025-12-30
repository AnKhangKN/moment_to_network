import PostComponent from "@/components/ui/user/PostComponent/PostComponent";
import PostCreateComponent from "@/components/ui/user/PostCreateComponent/PostCreateComponent";
import { Post } from "@/types";

export default function HomePage() {
  const postList: Post[] = [
    {
      post_id: "1",
      caption: "Hello @khang #react @haha",
      caption_bg: "bg-blue-400",

      emotion: "",

      medias: [],
      files: [],

      author: {
        user_id: "1",
        first_name: "Khang",
        last_name: "Phan",
        user_name: "khang phan",
        user_avatar: "/assets/images/user_avatar.webp",
      },

      group: null,

      share: null,
      hearts_count: 2,
      comments_count: 2,
      shares_count: 10,

      hearts: [{ user_id: "1" }, { user_id: "2" }],

      privacy: "public",
      status: "active",
      post_type: "post",

      createdAt: "2025-12-10T07:34:39.137+00:00",
      updatedAt: "2025-12-10T07:37:35.403+00:00",
    },
    {
      post_id: "2",
      caption: "Bài viết #react có 1 media @media",
      caption_bg: "",
      emotion: "",

      medias: [
        {
          media_id: "1",
          type: "image",
          media_link: "/assets/images/anh_doc.jpg",
        },
      ],
      files: [],

      author: {
        user_id: "1",
        first_name: "Khang",
        last_name: "Phan",
        user_name: "khang phan",
        user_avatar: "",
      },

      group: {
        group_id: "1",
        group_name: "Nhóm công nghệ",
        group_avatar: "/assets/images/group_avatar.webp",
      },
      share: null,
      hearts_count: 2,
      comments_count: 2,
      shares_count: 2,

      hearts: [{ user_id: "1" }, { user_id: "2" }],

      privacy: "public",
      status: "active",
      post_type: "post",

      createdAt: "2025-12-10T07:34:39.137+00:00",
      updatedAt: "2025-12-10T07:37:35.403+00:00",
    },
    {
      post_id: "3",
      caption: "Bài viết có 2 media",

      caption_bg: "",

      emotion: "",

      medias: [
        {
          media_id: "1",
          type: "image",
          media_link: "/assets/images/anh_doc.jpg",
        },
        {
          media_id: "2",
          type: "image",
          media_link: "/assets/images/anh_ngang.webp",
        },
      ],
      files: [],

      author: {
        user_id: "1",
        first_name: "Khang",
        last_name: "Phan",
        user_name: "khang phan",
        user_avatar: "/assets/images/user_avatar.webp",
      },

      group: {
        group_id: "1",
        group_name: "Nhóm công nghệ",
        group_avatar: "/assets/images/group_avatar.webp",
      },
      share: null,

      hearts_count: 2,
      comments_count: 2,
      shares_count: 2,

      hearts: [{ user_id: "1" }, { user_id: "2" }],

      privacy: "public",
      status: "active",
      post_type: "post",

      createdAt: "2025-12-10T07:34:39.137+00:00",
      updatedAt: "2025-12-10T07:37:35.403+00:00",
    },
    {
      post_id: "4",
      caption: "Bài viết có 2 media",

      caption_bg: "",

      emotion: "",

      medias: [
        {
          media_id: "1",
          type: "image",
          media_link: "/assets/images/anh_doc.jpg",
        },
        {
          media_id: "2",
          type: "image",
          media_link: "/assets/images/anh_ngang.webp",
        },
        {
          media_id: "3",
          type: "image",
          media_link: "/assets/images/anh_ngang.webp",
        },
      ],
      files: [],

      author: {
        user_id: "1",
        first_name: "Khang",
        last_name: "Phan",
        user_name: "khang phan",
        user_avatar: "/assets/images/user_avatar.webp",
      },

      group: {
        group_id: "1",
        group_name: "Nhóm công nghệ",
        group_avatar: "/assets/images/group_avatar.webp",
      },
      share: null,

      hearts_count: 2,
      comments_count: 2,
      shares_count: 2,

      hearts: [{ user_id: "1" }, { user_id: "2" }],

      privacy: "public",
      status: "active",
      post_type: "post",

      createdAt: "2025-12-10T07:34:39.137+00:00",
      updatedAt: "2025-12-10T07:37:35.403+00:00",
    },
    {
      post_id: "5",
      caption: "Bài viết có 2 media",

      caption_bg: "",

      emotion: "",

      medias: [
        {
          media_id: "1",
          type: "image",
          media_link: "/assets/images/anh_doc.jpg",
        },
        {
          media_id: "2",
          type: "image",
          media_link: "/assets/images/anh_ngang.webp",
        },
        {
          media_id: "3",
          type: "image",
          media_link: "/assets/images/anh_doc.jpg",
        },
        {
          media_id: "4",
          type: "image",
          media_link: "/assets/images/anh_ngang.webp",
        },
      ],
      files: [],

      author: {
        user_id: "1",
        first_name: "Khang",
        last_name: "Phan",
        user_name: "khang phan",
        user_avatar: "/assets/images/user_avatar.webp",
      },

      group: {
        group_id: "1",
        group_name: "Nhóm công nghệ",
        group_avatar: "/assets/images/group_avatar.webp",
      },

      share: null,

      hearts_count: 2,
      comments_count: 2,
      shares_count: 2,

      hearts: [{ user_id: "1" }, { user_id: "2" }],

      privacy: "public",
      status: "active",
      post_type: "post",

      createdAt: "2025-12-10T07:34:39.137+00:00",
      updatedAt: "2025-12-10T07:37:35.403+00:00",
    },
    {
      post_id: "6",
      caption: "Bài viết có 2 media",

      caption_bg: "",

      emotion: "",

      medias: [
        {
          media_id: "1",
          type: "image",
          media_link: "/assets/images/anh_doc.jpg",
        },
        {
          media_id: "2",
          type: "image",
          media_link: "/assets/images/anh_ngang.webp",
        },
        {
          media_id: "3",
          type: "image",
          media_link: "/assets/images/anh_doc.jpg",
        },
        {
          media_id: "4",
          type: "image",
          media_link: "/assets/images/anh_ngang.webp",
        },
        {
          media_id: "5",
          type: "image",
          media_link: "/assets/images/anh_doc.jpg",
        },
        {
          media_id: "6",
          type: "image",
          media_link: "/assets/images/anh_ngang.webp",
        },
      ],
      files: [],

      author: {
        user_id: "1",
        first_name: "Khang",
        last_name: "Phan",
        user_name: "khang phan",
        user_avatar: "/assets/images/user_avatar.webp",
      },

      group: {
        group_id: "1",
        group_name: "Nhóm công nghệ",
        group_avatar: "/assets/images/group_avatar.webp",
      },

      share: null,

      hearts_count: 2,
      comments_count: 2,
      shares_count: 2,

      hearts: [{ user_id: "1" }, { user_id: "2" }],

      privacy: "public",
      status: "active",
      post_type: "post",

      createdAt: "2025-12-10T07:34:39.137+00:00",
      updatedAt: "2025-12-10T07:37:35.403+00:00",
    },
    {
      post_id: "7",
      caption: "Bài viết có 2 media",

      caption_bg: "",

      emotion: "",

      medias: [],
      files: [],

      author: {
        user_id: "1",
        first_name: "Khang",
        last_name: "Phan",
        user_name: "khang phan",
        user_avatar: "/assets/images/user_avatar.webp",
      },

      group: {
        group_id: "1",
        group_name: "Nhóm công nghệ",
        group_avatar: "/assets/images/group_avatar.webp",
      },

      share: null,

      hearts_count: 2,
      comments_count: 2,
      shares_count: 2,

      hearts: [{ user_id: "1" }, { user_id: "2" }],

      privacy: "public",
      status: "active",
      post_type: "post",

      createdAt: "2025-12-10T07:34:39.137+00:00",
      updatedAt: "2025-12-10T07:37:35.403+00:00",
    },
    {
      post_id: "8",
      caption: "Bài viết có 2 media",

      caption_bg: "",

      emotion: "",

      medias: [
        {
          media_id: "1",
          type: "video",
          media_link: "/assets/videos/video_doc.mp4",
        },
      ],
      files: [],

      author: {
        user_id: "1",
        first_name: "Khang",
        last_name: "Phan",
        user_name: "khang phan",
        user_avatar: "/assets/images/user_avatar.webp",
      },

      group: {
        group_id: "1",
        group_name: "Nhóm công nghệ",
        group_avatar: "/assets/images/group_avatar.webp",
      },
      share: null,

      hearts_count: 2,
      comments_count: 2,
      shares_count: 2,

      hearts: [{ user_id: "1" }, { user_id: "2" }],

      privacy: "public",
      status: "active",
      post_type: "post",

      createdAt: "2025-12-10T07:34:39.137+00:00",
      updatedAt: "2025-12-10T07:37:35.403+00:00",
    },
    {
      post_id: "9",
      caption: "Bài viết có 2 media",

      caption_bg: "",

      emotion: "",

      medias: [],
      files: [],

      author: {
        user_id: "1",
        first_name: "Khang",
        last_name: "Phan",
        user_name: "khang phan",
        user_avatar: "/assets/images/user_avatar.webp",
      },

      group: null,

      share: {
        post_id: "1",
        caption: "hihi",

        caption_bg: "",
        emotion: "",

        medias: [
          {
            media_id: "1",
            type: "video",
            media_link: "/assets/videos/video_doc.mp4",
          },
          {
            media_id: "2",
            type: "video",
            media_link: "/assets/videos/video_doc.mp4",
          },
        ],
        files: [],

        author: {
          user_id: "1",
          first_name: "Khang",
          last_name: "Phan",
          user_name: "khang phan",
          user_avatar: "/assets/images/user_avatar.webp",
        },
        group: null,

        privacy: "public",
        status: "active",
        post_type: "post",

        createdAt: "2025-12-10T07:34:39.137+00:00",
        updatedAt: "2025-12-10T07:37:35.403+00:00",
      },

      hearts_count: 2,
      comments_count: 2,
      shares_count: 2,

      hearts: [{ user_id: "1" }, { user_id: "2" }],

      privacy: "public",
      status: "active",
      post_type: "share",

      createdAt: "2025-12-10T07:34:39.137+00:00",
      updatedAt: "2025-12-10T07:37:35.403+00:00",
    },
    {
      post_id: "10",
      caption: "Bài viết có 2 media",

      caption_bg: "",

      emotion: "",

      medias: [
        {
          media_id: "1",
          type: "video",
          media_link: "/assets/videos/video_doc.mp4",
        },
      ],
      files: [],

      author: {
        user_id: "1",
        first_name: "Khang",
        last_name: "Phan",
        user_name: "khang phan",
        user_avatar: "/assets/images/user_avatar.webp",
      },

      group: {
        group_id: "1",
        group_name: "Nhóm công nghệ",
        group_avatar: "/assets/images/group_avatar.webp",
      },
      share: null,

      hearts_count: 2,
      comments_count: 2,
      shares_count: 2,

      hearts: [{ user_id: "1" }, { user_id: "2" }],

      privacy: "public",
      status: "active",
      post_type: "post",

      createdAt: "2025-12-10T07:34:39.137+00:00",
      updatedAt: "2025-12-10T07:37:35.403+00:00",
    },
  ];

  return (
    <div>
      <PostCreateComponent />

      {postList.map((post) => (
        <PostComponent key={post.post_id} post={post} />
      ))}
    </div>
  );
}
