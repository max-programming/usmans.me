import { Box, Flex, Heading, useMediaQuery } from '@chakra-ui/react';

import { MyLink } from '@/layout/Link';

const Nav = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <Box w="100%" bgGradient="linear(to-l, #114357, #F29492)">
      <Box p="5">
        <Flex align="center" justify={{ base: 'center', md: 'space-between' }}>
          <Flex gap={5} hidden={isMobile}>
            <MyLink href="/" fontSize="xl">
              Home
            </MyLink>
            <MyLink href="/about" fontSize="xl">
              About
            </MyLink>
          </Flex>
          <Heading textAlign="center" fontSize="4xl">
            Usman Sabuwala
          </Heading>
          <Flex gap={5} hidden={isMobile}>
            <MyLink href="/blog" fontSize="xl">
              Blog
            </MyLink>
            <MyLink href="/contact" fontSize="xl">
              Contact
            </MyLink>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export { Nav };
