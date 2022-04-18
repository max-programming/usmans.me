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
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Nav />
      <Container maxW="4xl">
        <Hero />
        <Box w="full" h="1px" bgColor="white" my="6" />
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
