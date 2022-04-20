import { CSSObject, Link, LinkProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const MyLink = ({
  href,
  children,
  ...rest
}: PropsWithChildren<{ href: string } & LinkProps>) => {
  const linkAfter: CSSObject = {
    content: '""',
    position: 'absolute',
    w: '100%',
    h: '2px',
    transform: 'scaleX(0)',
    bottom: 0,
    left: 0,
    background: 'linear-gradient(to left, #F29492, #1d7ca3)',
    transformOrigin: 'bottom right',
    transition: 'transform 0.25s ease-out',
  };
  return (
    <Link
      href={href}
      textDecor="none"
      position="relative"
      display="inline-block"
      _after={linkAfter}
      _hover={{
        _after: { transform: 'scaleX(1)', transformOrigin: 'bottom left' },
      }}
      {...rest}
    >
      {children}
    </Link>
  );
};

export { MyLink };
