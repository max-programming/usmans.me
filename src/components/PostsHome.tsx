import { Player } from '@lottiefiles/react-lottie-player';

import { LikesAndComments, Post } from '@/utils/fetchPosts';
import { MdComment } from 'react-icons/md';
import { FiThumbsUp } from 'react-icons/fi';
import millify from 'millify';

interface IPostsHomeProps {
  posts: Post[];
  likesAndComments?: LikesAndComments[];
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
        <div className='h-full p-6'>
          <h4 className='text-xl font-semibold text-white'>{post.title}</h4>
          <p className='mt-2 text-lg text-gray-300'>
            <p className='flex items-center gap-2'>
              <MdComment /> {post.replyCount + post.responseCount} Comments
            </p>

            <p className='flex items-center gap-2'>
              <FiThumbsUp /> {millify(post.totalReactions)} Likes
            </p>
          </p>
        </div>
      </div>
    </a>
  );
}

function PostsHome(props: IPostsHomeProps) {
  return (
    <div>
      <div className='flex items-center gap-2'>
        <div className='mt-5 flex items-center gap-2'>
          <Player
            src='https://assets3.lottiefiles.com/private_files/lf30_gqwdpikn.json'
            autoplay
            loop
            className='h-16 w-16'
          />
          <h3 className='text-3xl font-semibold text-white'>
            I Write Articles
          </h3>
        </div>
      </div>
      <div className='mt-4 mb-10 grid grid-cols-1 place-items-center gap-6 md:grid-cols-3'>
        {props.posts.map(post => (
          <PostCard key={post.cuid} post={post} />
        ))}
      </div>
    </div>
  );
}

export { PostsHome };
