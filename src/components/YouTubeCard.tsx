import { Video } from '@/utils/fetchVideos';
import { Box, Flex, GridItem, Image, Text } from '@chakra-ui/react';
import millify from 'millify';
import { MdInsights } from 'react-icons/md';
import { FiThumbsUp } from 'react-icons/fi';

interface Props {
  thumbnail: string;
  title: string;
  id: string;
  stats: Video['stats'];
}

function YouTubeCard({ thumbnail, title, id, stats }: Props) {
  return (
    <GridItem
      as='a'
      href={`https://youtube.com/watch?v=${id}`}
      target='_blank'
      h='full'
    >
      <Box
        maxW='sm'
        borderWidth='1px'
        h='full'
        rounded='lg'
        overflow='hidden'
        cursor='pointer'
        transition='200ms ease-in-out'
        _hover={{
          bg: 'whiteAlpha.100',
        }}
      >
        <Image src={thumbnail} alt={title} title={title} w='full' />
        <Box p='6'>
          <Text fontWeight='bold' fontSize='xl'>
            {title}
          </Text>
          <Text color='gray.500' fontSize={'lg'} mt='2'>
            <Flex align='center' gap={2}>
              <MdInsights /> {millify(+stats.viewCount)} Views
            </Flex>
            <Flex align='center' gap={2}>
              <FiThumbsUp /> {millify(+stats.likeCount)} Likes
            </Flex>
          </Text>
        </Box>
      </Box>
    </GridItem>
  );
}

export default YouTubeCard;
