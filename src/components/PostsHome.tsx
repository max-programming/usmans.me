import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import { FaThumbsUp, FaComment } from 'react-icons/fa';

import { SectionHeading } from '@/components/SectionHeading';
import { LikesAndComments, Post } from '@/utils/fetchPosts';

interface IPostsHomeProps {
  posts: Post[];
  likesAndComments?: LikesAndComments[];
}

const PostCard = ({
  post,
  isEven,
  index,
  likesAndComments,
}: {
  post: Post;
  isEven: boolean;
  index: number;
  likesAndComments?: LikesAndComments[];
}) => {
  async function sendBlogClickMessage() {
    await fetch(`/api/sendDiscordMessage?name=Blog - ${post.title}`);
  }
  return (
    <GridItem h='full'>
      <Box
        as={motion.div}
        whileHover={{ scale: 1.05 }}
        boxShadow={'2xl'}
        borderWidth={1}
        rounded={'md'}
        p={6}
        h='full'
      >
        <Link
          onClick={sendBlogClickMessage}
          href={`https://blog.usmans.me/${post.slug}?ref=usmansme`}
          target='_blank'
          _hover={{ textDecoration: 'none' }}
          _focus={{ boxShadow: 'none' }}
        >
          <Flex
            gap={10}
            justify='center'
            rounded='md'
            align='center'
            p='4'
            direction='column'
          >
            <Image src={post.coverImage} alt={post.title} rounded='md' w='xs' />
            <Stack justify='space-between'>
              <Text fontWeight='bold' fontSize='2xl'>
                {post.title}
              </Text>
              <Flex gap={5} flex='2'>
                {likesAndComments && (
                  <>
                    <Text
                      fontSize='xl'
                      title={`${
                        likesAndComments[index]!.totalReactions
                      } Reactions`}
                      display='flex'
                      gap={1}
                      alignItems='center'
                    >
                      <FaThumbsUp />
                      {likesAndComments[index]!.totalReactions}
                    </Text>
                    <Text
                      fontSize='xl'
                      title={`${
                        likesAndComments[index]!.responseCount +
                        likesAndComments[index]!.replyCount
                      } Comments`}
                      display='flex'
                      gap={1}
                      alignItems='center'
                    >
                      <FaComment />
                      {likesAndComments[index]!.responseCount +
                        likesAndComments[index]!.replyCount}
                    </Text>
                  </>
                )}
                <Text
                  fontSize='xl'
                  title={`Published on ${new Date(
                    post.dateAdded
                  ).toDateString()}`}
                  display='flex'
                  gap={1}
                  alignItems='center'
                >
                  {new Date(post.dateAdded).toDateString()} <br />
                </Text>
              </Flex>
            </Stack>
          </Flex>
        </Link>
      </Box>
    </GridItem>
  );
};

const PostsHome = ({ posts, likesAndComments }: IPostsHomeProps) => {
  return (
    <Box>
      <Flex align='center' gap={2}>
        <Text
          as={Player}
          loop
          autoplay
          // src='lotties/point_down.json'
          src='https://assets3.lottiefiles.com/private_files/lf30_gqwdpikn.json'
          w={{ base: '10', md: '16' }}
          h={{ base: '10', md: '16' }}
        />
        <SectionHeading>My latest blog posts</SectionHeading>
      </Flex>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
        mt='4'
        mb='10'
        placeItems='center'
      >
        {posts.map((post, index) => (
          <PostCard
            key={post.cuid}
            post={post}
            isEven={index % 2 === 0}
            index={index}
            likesAndComments={likesAndComments}
          />
        ))}
      </Grid>
    </Box>
  );
};

export { PostsHome };
