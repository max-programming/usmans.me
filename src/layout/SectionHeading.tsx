import { Heading, HeadingProps } from '@chakra-ui/react';

const SectionHeading = (props: HeadingProps) => {
  return (
    <Heading fontWeight="semibold" fontFamily="Sen" {...props}>
      {props.children}
    </Heading>
  );
};

export { SectionHeading };
