import { Chat, ThumbsUp } from 'phosphor-react';
import { useMemo } from 'react';
import useMediaQuery from '../utils/useMediaQuery';
import type { Post } from '../types';
import { sendMessage } from '../utils/sendMessage';
import CldImage from './CldImage';
// import { For, block } from 'million/react';

const formatter = Intl.NumberFormat('en', { notation: 'compact' });

function PostCards({ posts }: { posts: Post[] }) {
  const showAllContent = useMediaQuery('(min-width: 768px)');

  const filteredContent = useMemo(
    () => (showAllContent ? posts : posts.slice(0, 3)),
    [showAllContent, posts]
  );

  return filteredContent.map(post => <PostCard post={post} />);
}

function PostCard({ post }: { post: Post }) {
  async function sendBlogClickMessage() {
    await sendMessage(post.title);
  }

  return (
    <a
      onClick={sendBlogClickMessage}
      href={'https://blog.usmans.me/' + post.slug}
      target='_blank'
      rel='noreferrer'
      className='h-full'
    >
      <div className='h-full max-w-sm cursor-pointer overflow-hidden rounded-lg bg-card-bg transition-colors hover:bg-opacity-50'>
        <CldImage src={post.coverImage.url} title={post.title} />
        <div className='h-full p-6 pt-1'>
          <h4 className='text-xl font-semibold text-white'>{post.title}</h4>
          <div className='mt-2 text-lg '>
            <p className='flex items-center gap-2 text-gray-300'>
              <Chat weight='duotone' />
              {post.replyCount + post.responseCount} Comments
            </p>

            <p className='flex items-center gap-2 text-gray-300'>
              <ThumbsUp weight='duotone' />
              {formatter.format(post.reactionCount)} Likes
              {/* {post.totalReactions} Likes */}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default PostCards;
