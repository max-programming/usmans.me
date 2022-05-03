import { Box, Container } from '@chakra-ui/react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Meta } from '@/layout/Meta';
import { SectionHeading } from '@/layout/SectionHeading';
import { Hero } from '@/templates/Hero';
import { Main } from '@/templates/Main';
import { Nav } from '@/templates/Nav';
import { PostsHome } from '@/templates/PostsHome';
import { getPosts, Post } from '@/utils/fetchPosts';

interface Props {
  posts: Post[];
}

const Index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Main
      meta={
        <Meta
          title="Usman Sabuwala - Web Developer in India."
          description="🌐 my online home"
        />
      }
    >
      <Nav />
      <Container maxW="container.lg">
        <Hero />
        <Box
          w={['xs', 'md', null, 'xl']}
          h="1px"
          my="7"
          mx="auto"
          bgColor="whiteAlpha.500"
        />
        <SectionHeading size="2xl" my="4">
          What do I do?
        </SectionHeading>
        <PostsHome posts={posts} />
      </Container>
    </Main>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPosts = await getPosts();

  const posts = allPosts.slice(0, 4);

  return {
    props: {
      posts,
    },
  };
};

export default Index;
