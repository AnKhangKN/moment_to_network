export interface MentionEntity {
  user_id: string;
  start: number;
  length: number;
}

export interface HashtagEntity {
  tag: string;
  start: number;
  length: number;
}

export interface CaptionEntities {
  mentions: MentionEntity[];
  hashtags: HashtagEntity[];
}

export interface Media {
  media_id: string;
  type: "image" | "video";
  media_link: string;
}

export interface File {
  file_id: string;
  file_link: string;
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

export interface Share {
  post_id: string;
  caption: string;

  caption_bg?: string;
  emotion?: string;

  medias: Media[];
  files: File[];

  author: Author;
  group?: Group | null;

  privacy: "public" | "friends" | "private";
  status: "active" | "hidden" | "deleted";
  post_type: "post" | "share" | "report";

  createdAt: string;
  updatedAt: string;
}

export interface Post {
  post_id: string;
  caption: string;

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

  hearts: { user_id: string }[];

  privacy: "public" | "friends" | "private";
  status: "active" | "hidden" | "deleted";
  post_type: "post" | "share" | "report";

  createdAt: string;
  updatedAt: string;
}
