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
    <motion.a
      whileHover={linkHover}
      href={props.link}
      target='_blank'
      onClick={sendMessage}
      rel='noreferrer'
      className='text-4xl'
    >
      {props.icon}
    </motion.a>
  );
};

export { SocialLink };
