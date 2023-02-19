import { Video } from '@/utils/fetchVideos';
import { Player } from '@lottiefiles/react-lottie-player';
import millify from 'millify';
import { FiThumbsUp } from 'react-icons/fi';
import { MdInsights } from 'react-icons/md';
import { SectionHeading } from './SectionHeading';

function YouTubeHome({ videos }: { videos: Video[] }) {
  return (
    <div>
      <SectionHeading>What do I do?</SectionHeading>
      <div className='mt-5 flex items-center gap-2'>
        <Player
          src='/lotties/youtube.json'
          autoplay
          loop
          className='h-16 w-16'
        />
        <h3 className='text-3xl font-semibold text-white'>
          I Make YouTube Videos
        </h3>
      </div>
      <div className='mt-4 mb-10 grid grid-cols-1 place-items-center gap-6 md:grid-cols-3'>
        {videos.map(video => (
          <YouTubeCard
            key={video.id}
            {...video}
            thumbnail={video.thumbnails.medium.url}
          />
        ))}
      </div>
    </div>
  );
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
export default YouTubeHome;
