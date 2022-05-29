import { Heading, HeadingProps } from '@chakra-ui/react';

const SectionHeading = (props: HeadingProps) => {
  return (
    <Heading
      fontWeight="semibold"
      fontFamily="Sen"
      fontSize={{ base: '2xl', md: '4xl' }}
      {...props}
    >
      {props.children}
    </Heading>
  );
};

export { SectionHeading };
