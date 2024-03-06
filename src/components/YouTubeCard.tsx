import type { Video } from '../types';
import useMediaQuery from '../utils/useMediaQuery';
import { Activity, ThumbsUp } from 'phosphor-react';
import { useMemo } from 'react';
import CldImage from './CldImage';
// import { For, block } from 'million/react';
import unescapeHTML from '../utils/unescapeHTML';

const formatter = Intl.NumberFormat('en', { notation: 'compact' });

function YouTubeCards({ videos }: { videos: Video[] }) {
  const showAllContent = useMediaQuery('(min-width: 768px)');
  const filteredContent = useMemo(() => {
    if (showAllContent) return videos;
    else return videos.slice(0, 3);
  }, [showAllContent, videos]);

  return filteredContent.map(video => (
    <YouTubeCard {...video} thumbnail={video.thumbnailUrl} />
  ));
}

interface YouTubeCardProps {
  thumbnail: string;
  title: string;
  id: string;
  stats: Video['stats'];
  duration: string;
  isPremiere: boolean;
}

function YouTubeCard(props: YouTubeCardProps) {
  const title = unescapeHTML(props.title);

  return (
    <a
      href={
        props.duration.length < 4
          ? `https://youtube.com/shorts/${props.id}?ref=usmans.me`
          : `https://youtu.be/${props.id}?ref=usmans.me`
      }
      target='_blank'
      rel='noreferrer'
      className='h-full relative'
    >
      {props.isPremiere && (
        <span className='bg-blue-200 text-xs font-medium text-blue-800 text-center p-0.5 leading-none rounded-full px-2 dark:bg-blue-900 dark:text-blue-200 absolute -translate-y-1/2 translate-x-1/2 left-auto top-0 right-5'>
          Premiere
        </span>
      )}

      <div className='h-full max-w-sm cursor-pointer overflow-hidden rounded-lg bg-card-bg transition-colors hover:bg-opacity-50'>
        <CldImage src={props.thumbnail} title={title} />
        <div className='h-full p-6 pt-1'>
          <h4 className='text-xl font-semibold text-white'>
            {unescapeHTML(title)}
          </h4>
          {!props.isPremiere && (
            <div className='mt-2 text-lg text-gray-300'>
              <p className='flex items-center gap-2'>
                <Activity weight='duotone' />
                {formatter.format(+props.stats.viewCount!)}{' '}
                {/* {props.stats.viewCount}  */}
                Views
              </p>

              <p className='flex items-center gap-2'>
                <ThumbsUp weight='duotone' />
                {formatter.format(+props.stats.likeCount!)} Likes
              </p>
            </div>
          )}
        </div>
      </div>
    </a>
  );
}

export default YouTubeCards;
