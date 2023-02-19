import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Hero } from '@/components/Hero';
import { Main } from '@/components/Main';
import { Meta } from '@/components/Meta';
import { Nav } from '@/components/Nav';
import { getPosts, Post } from '@/utils/fetchPosts';
import { getVideos, Video } from '@/utils/fetchVideos';
import { Separator } from '@/components/Separator';
import YouTubeHome from '@/components/YouTubeHome';
import { PostsHome } from '@/components/PostsHome';

interface Props {
  posts: Post[];
  videos: Video[];
}

const Index = ({
  posts,
  videos,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Main
      meta={
        <Meta
          title='Usman Sabuwala - Full Stack Web Developer in India.'
          description='🌐 my online home'
        />
      }
    >
      <div className='flex flex-col'>
        <Nav />
        <div className='flex-1 bg-primary-darker'>
          <div className='container mx-auto max-w-screen-lg overflow-hidden'>
            <Hero />
            <Separator />
            <YouTubeHome videos={videos} />
            <PostsHome posts={posts} />
          </div>
        </div>
      </div>
      {/* <Container overflow='hidden' maxW='container.lg'>
        <Hero />
        <Box
          w={['xs', 'md', null, 'xl']}
          h='1px'
          my='7'
          mx='auto'
          bgColor='whiteAlpha.500'
        />
        <SectionHeading size='2xl' my='2'>
          What do I do?
        </SectionHeading>
        <Flex align='center'>
          <Text
            as={Player}
            loop
            autoplay
            src='/lotties/youtube.json'
            w={{ base: '20', md: '20' }}
            h={{ base: '20', md: '20' }}
          />
          <SectionHeading>My latest YouTube videos</SectionHeading>
        </Flex>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={6}
          mt='4'
          mb='10'
          placeItems='center'
        >
          {videos.map(video => (
            <YouTubeCard
              thumbnail={video.thumbnails.medium.url}
              title={video.title}
              key={video.id}
              id={video.id}
              stats={video.stats}
              duration={video.duration}
            />
          ))}
        </Grid>
        <PostsHome posts={posts} likesAndComments={likesAndComments} />
      </Container> */}
    </Main>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const SECONDS_IN_ONE_HOUR = 3600;
  const allPosts = await getPosts();
  const videos = await getVideos();

  const posts = allPosts.slice(0, 6);

  return {
    props: {
      posts,
      videos,
    },
    revalidate: SECONDS_IN_ONE_HOUR,
  };
};

export default Index;
