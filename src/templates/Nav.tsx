import { Box, Flex, Heading } from '@chakra-ui/react';

import { MyLink } from '@/layout/Link';

const Nav = () => {
  return (
    <Box w="100%" bgGradient="linear(to-l, #114357, #F29492)">
      <Box p="5">
        <Flex align="center" justify="space-between">
          <Flex gap={5}>
            <MyLink href="/" fontSize="xl">
              Home
            </MyLink>
            <MyLink href="/about" fontSize="xl">
              About
            </MyLink>
          </Flex>
          <Heading fontSize="4xl">Usman Sabuwala</Heading>
          <Flex gap={5}>
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
