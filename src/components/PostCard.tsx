import millify from 'millify';
import { Chat, ThumbsUp } from 'phosphor-react';
import type { Post } from '../types';

export default function PostCards({ posts }: { posts: Post[] }) {
  return posts.map(post => <PostCard key={post.cuid} post={post} />);
}

function PostCard({ post }: { post: Post }) {
  async function sendBlogClickMessage() {
    await fetch(`/api/sendDiscordMessage?name=Blog - ${post.title}`);
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
        <img
          src={
            'https://res.cloudinary.com/demo/image/fetch/f_auto/' +
            post.coverImage
          }
          alt={post.title}
          title={post.title}
          className='w-full'
        />
        <div className='h-full p-6 '>
          <h4 className='text-xl font-semibold text-white'>{post.title}</h4>
          <p className='mt-2 text-lg '>
            <p className='flex items-center gap-2 text-gray-300'>
              <Chat weight='duotone' />
              {post.replyCount + post.responseCount} Comments
            </p>

            <p className='flex items-center gap-2 text-gray-300'>
              <ThumbsUp weight='duotone' />
              {millify(post.totalReactions)} Likes
            </p>
          </p>
        </div>
      </div>
    </a>
  );
}
