import { Box, Flex, Image, Text } from '@chakra-ui/react';

import { MyLink } from '@/layout/Link';
import { SectionHeading } from '@/layout/SectionHeading';

const Hero = () => {
  return (
    <Box mt="16">
      <Flex
        align="center"
        gap={3}
        justify="center"
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <Flex direction="column" gap={5}>
          <SectionHeading>
            Hi, I am{' '}
            <Text as="span" color="gradLeft">
              Usman
            </Text>
            !
          </SectionHeading>
          <Text fontSize="xl">
            Hey all! My name is Usman! I am 17 years old and learning web
            development and programming. I also have a{' '}
            <MyLink color="red.300" href="/youtube">
              YouTube channel
            </MyLink>{' '}
            on the subject of programming and mostly web development.
          </Text>
        </Flex>
        <Flex>
          <Image src="/profilePic.jpg" alt="Profile Pic" rounded="full" />
        </Flex>
      </Flex>
    </Box>
  );
};

export { Hero };
