import type { ChannelStats, Video } from '../types';

const CHANNEL_ID = 'UC7LE4pbfb4e2voEASj3RscA';

export async function fetchChannelStats() {
  const URL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${
    import.meta.env.YOUTUBE_API_KEY
  }`;
  const res = await fetch(URL);
  const { items } = await res.json();
  console.log(items);
  const stats: ChannelStats = items[0].statistics;
  console.log(stats);
  return stats;
}

export default async function fetchVideos() {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${
      import.meta.env.YOUTUBE_API_KEY
    }&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6`
  );

  const { items } = await res.json();

  const videos: Array<Omit<Video, 'stats'>> = items.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ({ id, snippet }: any) => {
      return {
        id: id.videoId,
        title: snippet.title,
        description: snippet.description,
        thumbnailUrl: `https://i.ytimg.com/vi/${id.videoId}/mqdefault.jpg`,
        isPremiere: snippet.liveBroadcastContent === 'upcoming',
      } as Video;
    }
  );

  const finalVideos: Array<Video> = await Promise.all(
    videos.map(async video => {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?id=${video.id}&key=${
          import.meta.env.YOUTUBE_API_KEY
        }&part=statistics,contentDetails`
      );
      const { items } = await res.json();
      return {
        ...video,
        stats: items[0].statistics,
        duration: items[0].contentDetails.duration.slice(2),
      };
    })
  );
  return finalVideos;
}
