import { SectionHeading } from '@/components/SectionHeading';
import { socialLinks } from '@/utils/socialLinks';

import { SocialLink } from './SocialLink';

function Hero() {
  return (
    <div className='mt-8'>
      <div className='flex flex-col-reverse items-center justify-center gap-3 md:flex-row'>
        <div className='flex flex-col gap-5'>
          <SectionHeading>Hi, I am Usman!</SectionHeading>
          <p className='text-lg text-white'>
            Hey all! My name is Usman! I am 17 years old and learning web
            development and programming. I also have a YouTube channel on the
            subject of programming and mostly web development.
          </p>
          <div className='flex gap-3'>
            <SectionHeading>Catch me at</SectionHeading>
            {socialLinks.map(socialLink => (
              <SocialLink
                key={socialLink.link}
                link={socialLink.link}
                icon={socialLink.icon}
                name={socialLink.name}
              />
            ))}
          </div>
        </div>
        <img
          src='/profilePic.jpg'
          alt='Usman'
          className='max-w-xs rounded-full'
        />
      </div>
    </div>
  );
}

export { Hero };
