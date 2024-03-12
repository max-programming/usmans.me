import type { youtube_v3 } from "@googleapis/youtube/build/v3";

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
	stats: youtube_v3.Schema$VideoStatistics;
	duration: string;
	isPremiere: boolean;
	thumbnailUrl: string;
}

export interface Post {
	reactionCount: number;
	coverImage: {
		url: string;
	};
	cuid: string;
	publishedAt: string;
	slug: string;
	title: string;
	responseCount: number;
	replyCount: number;
}
