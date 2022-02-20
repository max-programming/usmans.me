export default function AboutMe() {
  return (
    <div className='container flex items-center justify-between mx-auto mt-16 md:px-24'>
      <section className='w-full'>
        <h2 id='work' className='secondary-title'>
          About me
        </h2>
        <p className='section-paragraph'>
          My name is <span className='font-bold'>Usman Sabuwala!</span> I am 17
          years old.
        </p>
        <p className='section-paragraph'>
          I make web apps with{' '}
          <span className='text-[#F7DF1E] font-bold'>JavaScript</span> and{' '}
          <span className='text-[#3c82cf] font-bold'>TypeScript</span>!
        </p>
        <p className='section-paragraph'>
          I make educational videos on{' '}
          <a
            target='_blank'
            href='/youtube'
            className='text-[#FF0000] font-bold'
          >
            YouTube
          </a>{' '}
          and write articles on my{' '}
          <a
            target='_blank'
            rel='noreferrer'
            href='https://blog.usman-s.me'
            className='text-[#2962FF] font-bold'
          >
            Blog
          </a>
        </p>
      </section>
    </div>
  );
}
