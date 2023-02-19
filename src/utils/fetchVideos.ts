import type { Video } from '../types';

export default async function fetchVideos() {
  const CHANNEL_ID = 'UC7LE4pbfb4e2voEASj3RscA';

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
        thumbnails: snippet.thumbnails,
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
