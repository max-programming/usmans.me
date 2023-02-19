import { PropsWithChildren } from 'react';

function SectionHeading({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <h2
      className={'text-2xl font-semibold text-white md:text-4xl ' + className}
    >
      {children}
    </h2>
  );
}

// const SectionHeading = (props: HeadingProps) => {
//   return (
//     <Heading
//       fontWeight="semibold"
//       fontFamily="Sen"
//       fontSize={{ base: '2xl', md: '4xl' }}
//       {...props}
//     >
//       {props.children}
//     </Heading>
//   );
// };

export { SectionHeading };
