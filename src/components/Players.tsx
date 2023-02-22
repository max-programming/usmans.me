import { Player } from '@lottiefiles/react-lottie-player';

export function YouTubePlayer() {
  return (
    <Player
      src='https://assets1.lottiefiles.com/packages/lf20_7ie89w61.json'
      autoplay
      loop
      className='h-16 w-16'
    />
  );
}

export function PostsPlayer() {
  return (
    <Player src='/lotties/posts.json' autoplay loop className='h-16 w-16' />
  );
}
