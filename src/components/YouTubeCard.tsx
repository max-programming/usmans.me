import type { Video } from '../types';
import { FiThumbsUp } from 'react-icons/fi';
import { MdInsights } from 'react-icons/md';
import millify from 'millify';

export default function YouTubeCards({ videos }: { videos: Video[] }) {
  return videos.map(video => (
    <YouTubeCard
      key={video.id}
      {...video}
      thumbnail={video.thumbnails.medium.url}
    />
  ));
}

interface YouTubeCardProps {
  thumbnail: string;
  title: string;
  id: string;
  stats: Video['stats'];
  duration: string;
}

function YouTubeCard(props: YouTubeCardProps) {
  async function sendYouTubeClickMessage() {
    await fetch(`/api/sendDiscordMessage?name=YouTube - ${props.title}`);
  }
  return (
    <a
      onClick={sendYouTubeClickMessage}
      href={
        props.duration.length < 4
          ? `https://youtube.com/shorts/${props.id}`
          : `https://youtu.be/${props.id}`
      }
      target='_blank'
      rel='noreferrer'
      className='h-full'
    >
      <div className='h-full max-w-sm cursor-pointer overflow-hidden rounded-lg bg-card-bg transition-colors hover:bg-opacity-50'>
        <img
          src={props.thumbnail}
          alt={props.title}
          title={props.title}
          className='w-full'
        />
        <div className='h-full p-6'>
          <h4
            dangerouslySetInnerHTML={{ __html: props.title }}
            className='text-xl font-semibold text-white'
          />
          <p className='mt-2 text-lg text-gray-300'>
            <p className='flex items-center gap-2'>
              <MdInsights /> {millify(+props.stats.viewCount)} Views
            </p>

            <p className='flex items-center gap-2'>
              <FiThumbsUp /> {millify(+props.stats.likeCount)} Likes
            </p>
          </p>
        </div>
      </div>
    </a>
  );
}
