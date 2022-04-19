import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import { motion, TargetAndTransition } from 'framer-motion';
import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';

import { MyLink } from '@/layout/Link';
import { SectionHeading } from '@/layout/SectionHeading';

const Hero = () => {
  const linkHover: TargetAndTransition = {
    scale: 1.2,
  };
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
          <SectionHeading display="flex" alignItems="center" gap={3}>
            Catch me at:
            <Flex gap={5}>
              <Link
                href="https://github.com/max-programming"
                target="_blank"
                as={motion.a}
                initial={{ translateY: 1000 }}
                animate={{ translateY: 0 }}
                whileHover={linkHover}
              >
                <FaGithub />
              </Link>
              <Link
                href="https://youtube.com/max-programming"
                target="_blank"
                as={motion.a}
                initial={{ translateY: 1000 }}
                animate={{ translateY: 0 }}
                whileHover={linkHover}
              >
                <FaYoutube color="#FF0000" />
              </Link>
              <Link
                href="https://twitter.com/MaxProgramming1"
                target="_blank"
                as={motion.a}
                initial={{ translateY: 1000 }}
                animate={{ translateY: 0 }}
                whileHover={linkHover}
              >
                <FaTwitter color="#1DA1F2" />
              </Link>
            </Flex>
          </SectionHeading>
        </Flex>
        <Flex>
          <Image src="/profilePic.jpg" alt="Profile Pic" rounded="full" />
        </Flex>
      </Flex>
    </Box>
  );
};

export { Hero };
