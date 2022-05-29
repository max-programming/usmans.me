import { Box, Flex, Heading } from '@chakra-ui/react';

import { MyLink } from '@/components/Link';

const Nav = () => {
  return (
    <Box w="100%" bgGradient="linear(to-l, #114357, #F29492)">
      <Box p="5">
        <Flex align="center" justify={{ base: 'center', md: 'space-between' }}>
          <Heading textAlign="center" fontSize="4xl">
            Usman Sabuwala
          </Heading>
          <Flex gap={5} display={{ base: 'none', md: 'flex' }}>
            <MyLink
              href="https://blog.usman-s.me"
              target="_blank"
              fontSize="xl"
            >
              Blog
            </MyLink>
            {/* <MyLink href="/contact" fontSize="xl">
              Contact
            </MyLink> */}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export { Nav };
