// @ts-check
/* run the build with this set to skip validation */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}

export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
  /** Next.js i18n docs:
   * @see https://nextjs.org/docs/advanced-features/i18n-routing
   * Reference repo for i18n:
   * @see https://github.com/juliusmarminge/t3-i18n
   **/
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: '/youtube',
        destination: 'https://youtube.com/MaxProgramming',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.com/users/691360911440609290',
        permanent: true,
      },
      {
        source: '/gists',
        destination: 'https://gist.github.com/max-programming',
        permanent: true,
      },
      {
        source: '/gists/dfs',
        destination: 'https://gist.github.com/max-programming/bcb5151c0241f83c14ada9ff555afa7c',
        permanent: true,
      },
      {
        source: '/gists/java',
        destination: 'https://gist.github.com/max-programming/03aeb57468f0aee8dffb077da8c77382',
        permanent: true,
      },
      {
        source: '/gists/wd',
        destination: 'https://gist.github.com/max-programming/1c90d04b22d2aa2f90ec2b9ea3ae0057',
        permanent: true,
      },
      {
        source: '/gists/mi',
        destination: 'https://gist.github.com/max-programming/f30691fe784542ebad4f7eaf47cfa78d',
        permanent: true,
      },
    ];
  },
});
