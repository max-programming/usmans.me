import { Link } from '@chakra-ui/react';
import { motion, TargetAndTransition } from 'framer-motion';
import { ReactNode } from 'react';

const SocialLink = (props: { link: string; icon: ReactNode; name: string }) => {
  const sendMessage = async () => {
    await fetch(`/api/sendDiscordMessage?name=${props.name}`);
  };
  const linkHover: TargetAndTransition = {
    scale: 1.2,
  };
  return (
    <Link
      href={props.link}
      target="_blank"
      onClick={sendMessage}
      as={motion.a}
      whileHover={linkHover}
    >
      {props.icon}
    </Link>
  );
};

export { SocialLink };
