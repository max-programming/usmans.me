import type { ChannelStats, Video } from '../types';
import { youtube } from '@googleapis/youtube';

const CHANNEL_ID = 'UC7LE4pbfb4e2voEASj3RscA';

const ytClient = youtube({
  version: 'v3',
  auth: import.meta.env.YOUTUBE_API_KEY,
});

export async function fetchChannelStats() {
  const res = await ytClient.channels.list({
    id: [CHANNEL_ID],
    part: ['statistics'],
  });
  const stats = res.data.items?.at(0)?.statistics;
  return stats as ChannelStats;
}

export default async function fetchVideos() {
  const res = await ytClient.search.list({
    channelId: CHANNEL_ID,
    part: ['snippet', 'id'],
    order: 'date',
    maxResults: 6,
  });

  const videos: Array<Omit<Video, 'stats'>> = res.data.items!.map(
    ({ id, snippet }) => {
      return {
        id: id!.videoId,
        title: snippet!.title,
        description: snippet!.description,
        thumbnailUrl: `https://i.ytimg.com/vi/${id!.videoId}/mqdefault.jpg`,
        isPremiere: snippet!.liveBroadcastContent === 'upcoming',
      } as Video;
    }
  );

  const finalVideos: Array<Video> = await Promise.all(
    videos.map(async video => {
      const res = await ytClient.videos.list({
        id: [video.id],
        part: ['statistics', 'contentDetails'],
      });
      const items = res.data.items;
      return {
        ...video,
        stats: items![0].statistics!,
        duration: items![0].contentDetails!.duration!.slice(2),
      };
    })
  );
  return finalVideos;
}
