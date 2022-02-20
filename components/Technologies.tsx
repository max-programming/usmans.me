/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

export default function Technologies() {
  return (
    <div className='container flex items-center justify-between w-full px-8 mx-auto mt-10 lg:mt-42 md:mt-12 md:px-14 lg:px-24'>
      <section className='w-full'>
        <h2 id='work' className='secondary-title'>
          Technologies I work with
        </h2>
        <p className='section-paragraph'>
          These are the latest and greatest technologies I excel in.
        </p>
        <div className='grid grid-cols-3 gap-6 mt-6 place-items-center'>
          <Icon name='javascript' href='https://www.javascript.com/' />
          <Icon name='typescript' href='https://www.typescriptlang.org/' />
          <Icon name='nodejs' href='https://www.nodejs.org/' />
          <Icon name='express' href='https://www.expressjs.com/' />
          <Icon name='react' href='https://www.reactjs.org/' />
          <Icon name='nextjs' href='https://www.nextjs.org/' />
          <Icon name='tailwindcss' href='https://www.tailwindcss.com/' />
          <Icon name='git' href='https://git-scm.com/' />
          <Icon name='github' href='https://github.com/' />
          <Icon name='mongo' href='https://www.mongodb.com/' />
          <Icon name='supabase' href='https://supabase.io/' />
          <Icon name='prisma' href='https://prisma.io/' />
        </div>
      </section>
    </div>
  );
}

const Icon = ({ name, href }: { name: string; href: string }) => (
  <a href={href} target='_blank' rel='noreferrer' title={name}>
    <img className='w-24 h-24 lg:w-48 lg:h-48' src={`/logos/${name}.svg`} />
  </a>
);
