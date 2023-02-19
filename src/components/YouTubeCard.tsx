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
  duration: string;
}

function YouTubeCard({ thumbnail, title, id, stats, duration }: Props) {
  async function sendYouTubeClickMessage() {
    // console.log('Removing because of so much spam');
    await fetch(`/api/sendDiscordMessage?name=YouTube - ${title}`);
  }
  return (
    <GridItem
      as='a'
      href={
        duration.length < 4
          ? `https://youtube.com/shorts/${id}`
          : `https://youtu.be/${id}`
      }
      target='_blank'
      h='full'
      onClick={sendYouTubeClickMessage}
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
        <Image
          src={
            'https://res.cloudinary.com/demo/image/fetch/w_1280,h_720,c_fill,e_fill_light:0,f_auto/' +
            thumbnail
          }
          alt={title}
          title={title}
          w='full'
        />
        <Box p='6'>
          <Text
            fontWeight='bold'
            fontSize='xl'
            dangerouslySetInnerHTML={{ __html: title }}
          />

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
