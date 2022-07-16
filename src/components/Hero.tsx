import { Box, Flex, Image, SlideFade, Text } from '@chakra-ui/react';
import { Player } from '@lottiefiles/react-lottie-player';

import { MyLink } from '@/components/Link';
import { SectionHeading } from '@/components/SectionHeading';
import { socialLinks } from '@/utils/socialLinks';

import { SocialLink } from './SocialLink';

const Hero = () => {
  return (
    <Box mt="16">
      <Flex
        align="center"
        gap={3}
        justify="center"
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <SlideFade offsetX={-1000} in transition={{ enter: { duration: 2 } }}>
          <Flex direction="column" gap={5}>
            <Flex>
              <Text
                as={Player}
                loop
                autoplay
                src="/lotties/waving_hand.json"
                w={{ base: '8', md: '10' }}
                h={{ base: '8', md: '10' }}
              />
              <SectionHeading ml="2">
                Hi, I am{' '}
                <Text as="span" color="gradLeft">
                  Usman
                </Text>
                !
              </SectionHeading>
            </Flex>
            <Text fontSize="xl">
              Hey all! My name is Usman! I am 17 years old and learning web
              development and programming. I also have a{' '}
              <MyLink color="red.300" href="/youtube">
                YouTube channel
              </MyLink>{' '}
              on the subject of programming and mostly web development.
            </Text>
            <SectionHeading display="flex" alignItems="center" gap={3}>
              Catch me at:
              <Flex gap={5}>
                {socialLinks.map((socialLink) => (
                  <SocialLink
                    key={socialLink.link}
                    link={socialLink.link}
                    icon={socialLink.icon}
                  />
                ))}
              </Flex>
            </SectionHeading>
          </Flex>
        </SlideFade>
        <SlideFade in offsetX={1000} transition={{ enter: { duration: 1 } }}>
          <Flex>
            <Image
              src="/profilePic.jpg"
              alt="Profile Pic"
              rounded="full"
              w={['xs', 'xs', 'xl', 'xl']}
            />
          </Flex>
        </SlideFade>
      </Flex>
    </Box>
  );
};

export { Hero };
