const CHANNEL_ID = 'UC7LE4pbfb4e2voEASj3RscA';

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
  };
}

export async function getVideos(): Promise<Array<Video>> {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`
  );
  const { items } = await res.json();
  const videos: Array<Video> = items.map(({ id, snippet }: any) => {
    return {
      id: id.videoId,
      title: snippet.title,
      description: snippet.description,
      thumbnails: snippet.thumbnails,
    } as Video;
  });
  return videos;
}
// import Youtube from 'youtube.ts';

// const CHANNEL_URL = 'https://www.youtube.com/c/MaxProgramming';

// export default async function fetchVideos() {
//   const yt = new Youtube(process.env.YOUTUBE_API_KEY!);
//   const channel = await yt.channels.get(CHANNEL_URL);
//   const videos = await yt.api.get()

//   return channel;
// }
