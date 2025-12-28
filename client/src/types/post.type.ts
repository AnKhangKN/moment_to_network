export interface UserTag {
  user_id: string;
  first_name: string;
  last_name: string;
  user_name: string;
}

export interface Author {
  user_id: string;
  first_name: string;
  last_name: string;
  user_name: string;
  user_avatar: string;
}

export interface Group {
  group_id: string;
  group_name: string;
  group_avatar: string;
}

export interface Media {
  media_id: string;
  type: "image" | "video";
  media_link: string;
}

export interface File {
  file_id: string;
  type: "file";
  file_link: string;
}

export interface Share {
  post_id: string;
  caption: string;

  hashtag: string[];
  user_tag: UserTag[];

  caption_bg?: string;
  emotion?: string;

  medias: Media[];
  files: File[];

  author: Author;
  group?: Group | null;

  privacy: "public" | "friends" | "private";
  status: "active" | "hidden" | "deleted";
  post_type: "post" | "share" | "repost";

  createdAt: string;
  updatedAt: string;
}

export interface Heart {
  user_id: string;
}

export interface Post {
  post_id: string;
  caption: string;

  hashtag: string[];
  user_tag: UserTag[];

  caption_bg?: string;
  emotion?: string;

  medias: Media[];
  files: File[];

  author: Author;
  group?: Group | null;

  share: Share | null;

  hearts_count: number;
  comments_count: number;
  shares_count: number;

  hearts: Heart[];

  privacy: "public" | "friends" | "private";
  status: "active" | "hidden" | "deleted";
  post_type: "post" | "share" | "repost";

  createdAt: string;
  updatedAt: string;
}
