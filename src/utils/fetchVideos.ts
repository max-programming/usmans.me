import { youtube } from "@googleapis/youtube";
import type { ChannelStats, Video } from "../types";

const CHANNEL_ID = "UC7LE4pbfb4e2voEASj3RscA";
const UPLOADS_PLAYLIST_ID = "UU7LE4pbfb4e2voEASj3RscA";

const ytClient = youtube({
	version: "v3",
	auth: import.meta.env.YOUTUBE_API_KEY,
});

export async function fetchChannelStats() {
	const res = await ytClient.channels.list({
		id: [CHANNEL_ID],
		part: ["statistics"],
	});
	const stats = res.data.items?.at(0)?.statistics;
	return stats as ChannelStats;
}

export default async function fetchVideos() {
	const playlistItemsResponse = await ytClient.playlistItems.list({
		playlistId: UPLOADS_PLAYLIST_ID,
		part: ["snippet", "id"],
		maxResults: 6,
	});
	const videoListResponse = await ytClient.videos.list({
		id: playlistItemsResponse.data.items?.map(
			(video) => video.snippet?.resourceId?.videoId!,
		),
		part: ["statistics", "contentDetails", "id", "snippet"],
	});
	const items = videoListResponse.data.items;

	if (!items) return [];

	const videos: Array<Video> = items.map(
		({ snippet, id, statistics, contentDetails }) => {
			return {
				id: id!,
				title: snippet!.title!,
				description: snippet!.description!,
				thumbnailUrl: `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
				stats: statistics!,
				duration: contentDetails!.duration!.slice(2),
				isPremiere: snippet!.liveBroadcastContent === "upcoming",
			} satisfies Video;
		},
	);

	return videos;
}
