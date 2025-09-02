import { motion } from 'framer-motion';
import { socialLinks } from '../utils/socialLinks';
import type { TargetAndTransition } from 'framer-motion';

function SocialLinks() {
  return (
    <div className='flex gap-3 md:gap-5'>
      {socialLinks.map(socialLink => (
        <SocialLink
          key={socialLink.link}
          link={socialLink.link}
          icon={socialLink.icon}
          name={socialLink.name}
        />
      ))}
    </div>
  );
}

const SocialLink = (props: {
  link: string;
  icon: JSX.Element;
  name: string;
}) => {
  const linkHover: TargetAndTransition = {
    scale: 1.2,
  };

  return (
    <motion.a
      whileHover={linkHover}
      href={props.link}
      target='_blank'
      rel='noreferrer'
      className='text-4xl'
    >
      {props.icon}
    </motion.a>
  );
};

export { SocialLinks };
