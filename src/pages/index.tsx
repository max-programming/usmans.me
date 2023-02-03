import { Box, Container, Text, Grid, Flex } from '@chakra-ui/react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import useSWR from 'swr';

import { Hero } from '@/components/Hero';
import { Main } from '@/components/Main';
import { Meta } from '@/components/Meta';
import { Nav } from '@/components/Nav';
import YouTubeCard from '@/components/YouTubeCard';
import { PostsHome } from '@/components/PostsHome';
import { SectionHeading } from '@/components/SectionHeading';
import { getPosts, LikesAndComments, Post } from '@/utils/fetchPosts';
import { getVideos, Video } from '@/utils/fetchVideos';
import { Player } from '@lottiefiles/react-lottie-player';

interface Props {
  posts: Post[];
  videos: Video[];
}

const Index = ({
  posts,
  videos,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data: likesAndComments } = useSWR<LikesAndComments[]>(
    '/api/likesAndComments',
    url => fetch(url).then(res => res.json())
  );

  return (
    <Main
      meta={
        <Meta
          title='Usman Sabuwala - Web Developer in India.'
          description='🌐 my online home'
        />
      }
    >
      <Nav />
      <Container overflow='hidden' maxW='container.lg'>
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
      </Container>
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
