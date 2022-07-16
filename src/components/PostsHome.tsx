import { Box, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import { FaThumbsUp } from 'react-icons/fa';

import { SectionHeading } from '@/components/SectionHeading';
import { Post } from '@/utils/fetchPosts';

interface IPostsHomeProps {
  posts: Post[];
}

const PostCard = ({ post, isEven }: { post: Post; isEven: boolean }) => (
  <Box
    as={motion.div}
    whileHover={{ scale: 1.05 }}
    boxShadow={'2xl'}
    borderWidth={1}
    rounded={'md'}
    p={6}
  >
    <Link
      href={`https://blog.usman-s.me/${post.slug}`}
      target="_blank"
      _hover={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        gap={10}
        justify="center"
        rounded="md"
        align="center"
        p="4"
        direction={{
          base: 'column',
          md: isEven ? 'row' : 'row-reverse',
        }}
      >
        <Image src={post.coverImage} alt={post.title} rounded="md" w="xs" />
        <Stack>
          <SectionHeading size="lg">{post.title}</SectionHeading>
          <Flex gap={5}>
            <Text
              fontSize="xl"
              title={`${post.totalReactions} Reactions`}
              display="flex"
              gap={1}
              alignItems="center"
            >
              <FaThumbsUp />
              {post.totalReactions}
            </Text>
            <Text
              fontSize="xl"
              title={`Published on ${new Date(post.dateAdded).toDateString()}`}
              display="flex"
              gap={1}
              alignItems="center"
            >
              {new Date(post.dateAdded).toDateString()} <br />
            </Text>
          </Flex>
        </Stack>
      </Flex>
    </Link>
  </Box>
);

const PostsHome = ({ posts }: IPostsHomeProps) => {
  return (
    <Box>
      <Flex>
        <Text
          as={Player}
          loop
          autoplay
          src="lotties/point_down.json"
          w={{ base: '10', md: '16' }}
          h={{ base: '10', md: '16' }}
        />
        <SectionHeading>My recent blog posts</SectionHeading>
      </Flex>
      <Flex gap={5} direction="column" mt="5">
        {posts.map((post, index) => (
          <PostCard key={post.cuid} post={post} isEven={index % 2 === 0} />
        ))}
      </Flex>
    </Box>
  );
};

export { PostsHome };
