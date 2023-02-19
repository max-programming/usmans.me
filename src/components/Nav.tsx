function Nav() {
  return (
    <div className='w-full bg-primary-dark'>
      <div className='p-5'>
        <div className='flex items-center justify-center md:justify-between'>
          <h1 className='text-center text-4xl font-semibold text-primary-light'>
            Usman Sabuwala
          </h1>
          <div className='hidden gap-5 md:flex'>
            <a
              className='text-xl text-primary-light no-underline'
              href='https://blog.usmans.me'
            >
              Blog
            </a>

            <a
              className='text-xl text-primary-light no-underline'
              href='/gists'
            >
              Gists
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Nav };
