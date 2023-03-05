import { atom } from 'jotai';
import { useAtom } from 'jotai/react';
// import { useRef } from 'react';
// import { useHover } from 'usehooks-ts';
import { SkillItem, skills } from './skillIcons';

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
            href='#'
            className={`inline-block px-4 py-3 rounded-lg transition-all text-xl ${
              currentTab === 'all' ? classes.active : classes.inactive
            }`}
            aria-current='page'
          >
            All
          </a>
        </li>
        <li onClick={() => setCurrentTab('languages')} className='mr-2'>
          <a
            href='#'
            className={`inline-block px-4 py-3 rounded-lg transition-all text-xl ${
              currentTab === 'languages' ? classes.active : classes.inactive
            }`}
          >
            Languages
          </a>
        </li>
        <li onClick={() => setCurrentTab('frontend')} className='mr-2'>
          <a
            href='#'
            className={`inline-block px-4 py-3 rounded-lg transition-all text-xl ${
              currentTab === 'frontend' ? classes.active : classes.inactive
            }`}
          >
            Frontend
          </a>
        </li>
        <li onClick={() => setCurrentTab('backend')} className='mr-2'>
          <a
            href='#'
            className={`inline-block px-4 py-3 rounded-lg transition-all text-xl ${
              currentTab === 'backend' ? classes.active : classes.inactive
            }`}
          >
            Backend
          </a>
        </li>
        <li onClick={() => setCurrentTab('databases')} className='mr-2'>
          <a
            href='#'
            className={`inline-block px-4 py-3 rounded-lg transition-all text-xl ${
              currentTab === 'databases' ? classes.active : classes.inactive
            }`}
          >
            Databases
          </a>
        </li>
        <li onClick={() => setCurrentTab('mobile')} className='mr-2'>
          <a
            href='#'
            className={`inline-block px-4 py-3 rounded-lg transition-all text-xl ${
              currentTab === 'mobile' ? classes.active : classes.inactive
            }`}
          >
            Mobile
          </a>
        </li>
        <li onClick={() => setCurrentTab('others')} className='mr-2'>
          <a
            href='#'
            className={`inline-block px-4 py-3 rounded-lg transition-all text-xl ${
              currentTab === 'others' ? classes.active : classes.inactive
            }`}
          >
            Others
          </a>
        </li>
      </ul>
      <div className='flex flex-wrap justify-center gap-12 w-full my-10'>
        {skills[currentTab].map(item => (
          <Skill key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

export function Skill({ name, color, icon, url }: SkillItem) {
  // const hoverRef = useRef<HTMLImageElement>(null);
  // const isHover = useHover(hoverRef);

  return (
    <a href={url} target='_blank'>
      <img
        // ref={hoverRef}
        src={icon}
        title={name}
        className={`md:w-28 md:h-28 select-none h-10 w-10 md:m-2 transition-all`}
        style={{ filter: `drop-shadow(0 0 2em ${color})` }}
        // style={{ filter: isHover ? `drop-shadow(0 0 2em ${color})` : 'none' }}
      />
    </a>
  );
}
