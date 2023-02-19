import { motion, TargetAndTransition } from 'framer-motion';
import type { ReactNode } from 'react';
import { socialLinks } from '../utils/socialLinks';

function SocialLinks() {
  return socialLinks.map(socialLink => (
    <SocialLink
      key={socialLink.link}
      link={socialLink.link}
      icon={socialLink.icon}
      name={socialLink.name}
    />
  ));
}

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
      {/* <img src={'/icons/' + props.name.toLowerCase() + '.svg'} alt='' /> */}
      {props.icon}
    </motion.a>
  );
};

export { SocialLinks };
