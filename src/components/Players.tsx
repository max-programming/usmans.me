import { Player } from '@lottiefiles/react-lottie-player';

export function YouTubePlayer() {
  return (
    <a href='https://youtube.com/@MaxProgramming' target='_blank'>
      <Player
        src='https://assets1.lottiefiles.com/packages/lf20_7ie89w61.json'
        autoplay
        loop
        className='h-16 w-16'
      />
    </a>
  );
}

export function PostsPlayer() {
  return (
    <a href='https://blog.usmans.me' target='_blank'>
      <Player src='/lotties/posts.json' autoplay loop className='h-16 w-16' />
    </a>
  );
}
