import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuIcon } from './Icons';

export default function Navbar() {
  const router = useRouter();
  return (
    <header className='pt-6'>
      <div className='container flex items-center justify-between w-full px-8 pb-12 mx-auto md:px-14 lg:px-24'>
        <div className='text-lg font-bold'>
          <Link href='/'>
            <a>Usman Sabuwala</a>
          </Link>
        </div>
        <div className='items-center hidden space-x-12 md:flex'>
          <Link href='/'>
            <a className={router.pathname === '/' ? 'text-selected-text' : ''}>
              Home
            </a>
          </Link>
          <Link href='/about'>
            <a
              className={
                router.pathname === '/about' ? 'text-selected-text' : ''
              }
            >
              About
            </a>
          </Link>
          <a href='https://blog.usman-s.me' target='_blank' rel='noreferrer'>
            Blog
          </a>
          {/* <a href='#hire'>
            <button className='px-6 py-2 font-bold bg-theme'>Hire me</button>
          </a> */}
        </div>
        <div className='md:hidden'>
          <MenuIcon />
        </div>
      </div>
    </header>
  );
}
