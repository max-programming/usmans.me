import React, { PropsWithChildren } from 'react';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

type Props = {
  title: string;
  description: string;
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ children, title, description }: PropsWithChildren<Props>) => (
  <div>
    <NextSeo
      title={title}
      description={description}
      openGraph={{ title, description }}
      additionalLinkTags={[
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap',
        },
      ]}
    />
    <Navbar />
    <motion.main
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ type: 'linear' }}
    >
      {children}
    </motion.main>
  </div>
);

export default Layout;
