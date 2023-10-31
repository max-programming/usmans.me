import { atom } from 'jotai';
import { useAtom } from 'jotai/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { type SkillItem, skills } from './skillIcons';

const currentTabAtom = atom('all');

const classes = {
  active: 'active text-primary-light bg-primary-dark',
  inactive: 'hover:text-primary-light hover:bg-primary-dark',
};

export default function Tabs() {
  const [currentTab, setCurrentTab] = useAtom(currentTabAtom);

  return (
    <div className='flex flex-col gap-10 items-center justify-center p-10'>
      <ul className='flex justify-center flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
        <li onClick={() => setCurrentTab('all')} className='mr-2'>
          <a
            className={`inline-block cursor-pointer px-4 py-3 rounded-lg transition-all text-xl ${
              currentTab === 'all' ? classes.active : classes.inactive
            }`}
            aria-current='page'
          >
            All
          </a>
        </li>
        <li onClick={() => setCurrentTab('languages')} className='mr-2'>
          <a
            className={`inline-block cursor-pointer px-4 py-3 rounded-lg transition-all text-xl ${
              currentTab === 'languages' ? classes.active : classes.inactive
            }`}
          >
            Languages
          </a>
        </li>
        <li onClick={() => setCurrentTab('frontend')} className='mr-2'>
          <a
            className={`inline-block cursor-pointer px-4 py-3 rounded-lg transition-all text-xl ${
              currentTab === 'frontend' ? classes.active : classes.inactive
            }`}
          >
            Frontend
          </a>
        </li>
        <li onClick={() => setCurrentTab('backend')} className='mr-2'>
          <a
            className={`inline-block cursor-pointer px-4 py-3 rounded-lg transition-all text-xl ${
              currentTab === 'backend' ? classes.active : classes.inactive
            }`}
          >
            Backend
          </a>
        </li>
        <li onClick={() => setCurrentTab('databases')} className='mr-2'>
          <a
            className={`inline-block cursor-pointer px-4 py-3 rounded-lg transition-all text-xl ${
              currentTab === 'databases' ? classes.active : classes.inactive
            }`}
          >
            Databases
          </a>
        </li>
        <li onClick={() => setCurrentTab('mobile')} className='mr-2'>
          <a
            className={`inline-block cursor-pointer px-4 py-3 rounded-lg transition-all text-xl ${
              currentTab === 'mobile' ? classes.active : classes.inactive
            }`}
          >
            Mobile
          </a>
        </li>
        <li onClick={() => setCurrentTab('others')} className='mr-2'>
          <a
            className={`inline-block cursor-pointer px-4 py-3 rounded-lg transition-all text-xl ${
              currentTab === 'others' ? classes.active : classes.inactive
            }`}
          >
            Others
          </a>
        </li>
      </ul>
      <motion.div
        key={currentTab}
        variants={{
          show: { opacity: 1, scale: 1 },
          hide: { opacity: 0, scale: 0.5 },
        }}
        animate='show'
        initial='hide'
        className='flex flex-wrap justify-center gap-12 w-full my-10'
      >
        {skills[currentTab].map(item => (
          <Skill key={item.name} {...item} />
        ))}
      </motion.div>
    </div>
  );
}

export function Skill({ name, color, icon, url }: SkillItem) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={url}
      className='flex flex-col justify-center items-center gap-5 relative'
      target='_blank'
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <img
        src={icon}
        title={name}
        className={`md:w-28 md:h-28 select-none h-10 w-10 md:m-2`}
        style={{
          filter: isHovered ? `drop-shadow(0 0 2em ${color})` : 'none',
          transition: 'all 0.3s ease',
        }}
      />
      <p className='text-white text-sm text-center font-mono tracking-widest'>
        {name}
      </p>
    </a>
  );
}
