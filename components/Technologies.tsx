/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

export default function Technologies() {
  return (
    <div className='container flex items-center justify-between w-full px-8 mx-auto mt-10 lg:mt-42 md:mt-12 md:px-14 lg:px-24'>
      <section className='w-full mb-10'>
        <h2 id='work' className='secondary-title'>
          Technologies I work with
        </h2>
        <p className='section-paragraph'>
          These are the latest and greatest technologies I excel in.
        </p>
        <div className='grid grid-cols-3 gap-6 mt-6 place-items-center'>
          <Icon
            name='javascript'
            className='javascript-plain colored'
            href='https://www.javascript.com/'
          />
          <Icon
            name='typescript'
            className='typescript-plain colored'
            href='https://www.typescriptlang.org/'
          />
          <Icon
            name='nodejs'
            className='nodejs-plain colored'
            href='https://www.nodejs.org/'
          />
          <Icon
            name='express'
            className='express-original'
            href='https://www.expressjs.com/'
          />
          <Icon
            name='react'
            className='react-original colored'
            href='https://www.reactjs.org/'
          />
          <Icon
            name='nextjs'
            className='nextjs-original'
            href='https://www.nextjs.org/'
          />
          <Icon
            name='tailwindcss'
            className='tailwindcss-plain colored'
            href='https://www.tailwindcss.com/'
          />
          <Icon
            name='git'
            className='git-plain colored'
            href='https://git-scm.com/'
          />
          <Icon
            name='github'
            className='github-original'
            href='https://github.com/'
          />
          <Icon
            name='mongo'
            className='mongodb-plain colored'
            href='https://www.mongodb.com/'
          />
          <Icon
            name='supabase'
            className='supabase'
            href='https://supabase.io/'
            isSimpleicon
          />
          <Icon
            name='prisma'
            className='prisma'
            href='https://prisma.io/'
            isSimpleicon
          />
        </div>
      </section>
    </div>
  );
}

const Icon = ({
  name,
  className,
  href,
  isSimpleicon,
}: {
  name: string;
  className: string;
  href: string;
  isSimpleicon?: boolean;
}) => (
  <a href={href} target='_blank' rel='noreferrer' title={name}>
    {isSimpleicon ? (
      <img className='w-14 h-14 lg:w-24 lg:h-24' src={`/logos/${name}.svg`} />
    ) : (
      <i className={`text-5xl lg:text-9xl devicon-${className}`}></i>
    )}
  </a>
);
