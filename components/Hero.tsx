/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { EyeIcon } from './Icons';

export default function Hero() {
  return (
    <div className='container flex flex-row items-center justify-between mx-auto mt-2 md:mt-16 md:px-22 w-full px-8'>
      <div className='flex justify-center flex-1 flex-col-reverse items-center md:flex-row md:justify-start'>
        <div className='flex flex-wrap justify-center flex-[3] max-w-xl mt-0 lg:ml-20 md:justify-start md:my-36'>
          <h1 className='w-full text-5xl mt-3 md:mt-0 font-bold text-center md:text-6xl lg:text-7xl md:text-left'>
            Building <br /> amazing websites.
          </h1>
          <div className='flex justify-center w-full md:justify-start'>
            <Link href='/about'>
              <a>
                <button className='flex items-center px-8 py-4 mt-12 space-x-3 font-bold text-white bg-theme'>
                  <div>
                    <EyeIcon />
                  </div>
                  <span>About me</span>
                </button>
              </a>
            </Link>
          </div>
        </div>
        <img
          src='/usman.png'
          alt='man'
          className='w-2xl mt-6 md:w-[33%] right-[10%] md:absolute md:mt-0'
        />
      </div>
    </div>
  );
}
