import { Link } from '@chakra-ui/react';
import { motion, TargetAndTransition } from 'framer-motion';
import { ReactNode } from 'react';

const SocialLink = (props: { link: string; icon: ReactNode }) => {
  const linkHover: TargetAndTransition = {
    scale: 1.2,
  };
  return (
    <Link
      href={props.link}
      target="_blank"
      as={motion.a}
      initial={{ translateY: 1000 }}
      animate={{ translateY: 0 }}
      whileHover={linkHover}
    >
      {props.icon}
    </Link>
  );
};

export { SocialLink };
