import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaThumbsUp } from 'react-icons/fa';

import { SectionHeading } from '@/layout/SectionHeading';
import { Post } from '@/utils/fetchPosts';

interface IPostsHomeProps {
  posts: Post[];
}

const PostsHome = ({ posts }: IPostsHomeProps) => {
  return (
    <Box>
      <SectionHeading>My recent blog posts 👇</SectionHeading>
      <Flex gap={5} direction="column" mt="5">
        {posts.map((post, index) => (
          <Link
            key={post.cuid}
            as={motion.a}
            href={`https://blog.usman-s.me/${post.slug}`}
            target="_blank"
            initial={{ textDecoration: 'none' }}
            whileHover={{
              translateX: 20,
              textDecoration: 'none',
            }}
          >
            <Flex
              gap={10}
              justify="center"
              rounded="md"
              align="center"
              p="4"
              direction={{
                base: 'column',
                md: index % 2 === 0 ? 'row' : 'row-reverse',
              }}
            >
              <Image
                src={post.coverImage}
                alt={post.title}
                w="sm"
                h="full"
                rounded="md"
              />
              <Flex direction="column" gap={3}>
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
                    title={`Published on ${new Date(
                      post.dateAdded
                    ).toDateString()}`}
                    display="flex"
                    gap={1}
                    alignItems="center"
                  >
                    {new Date(post.dateAdded).toDateString()} <br />
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export { PostsHome };
