import { env } from '@/env/server.mjs';

const CHANNEL_ID = 'UC7LE4pbfb4e2voEASj3RscA';

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

export interface Video {
  id: string;
  title: string;
  description: string;
  stats: Stats;
  duration: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
  };
}

export async function getVideos(): Promise<Array<Video>> {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${env.YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6`
  );
  const { items } = await res.json();
  const videos: Array<Omit<Video, 'stats'>> = items.map(
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
        `https://www.googleapis.com/youtube/v3/videos?id=${video.id}&key=${env.YOUTUBE_API_KEY}&part=statistics,contentDetails`
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
// import Youtube from 'youtube.ts';

// const CHANNEL_URL = 'https://www.youtube.com/c/MaxProgramming';

// export default async function fetchVideos() {
//   const yt = new Youtube(process.env.YOUTUBE_API_KEY!);
//   const channel = await yt.channels.get(CHANNEL_URL);
//   const videos = await yt.api.get()

//   return channel;
// }
