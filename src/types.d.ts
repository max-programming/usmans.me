interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface Stats {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface ChannelStats {
  viewCount: string;
  subscriberCount: string;
  videoCount: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  stats: Stats;
  duration: string;
  isPremiere: boolean;
  thumbnailUrl: string;
}

export interface Post {
  totalReactions: number;
  coverImage: string;
  cuid: string;
  dateAdded: string;
  slug: string;
  title: string;
  responseCount: number;
  replyCount: number;
}
