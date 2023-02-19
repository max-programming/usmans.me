import { Player } from '@lottiefiles/react-lottie-player';

export function YouTubePlayer() {
  return (
    <Player src='/lotties/youtube.json' autoplay loop className='h-16 w-16' />
  );
}

export function PostsPlayer() {
  return (
    <Player src='/lotties/posts.json' autoplay loop className='h-16 w-16' />
  );
}
