import AboutMe from '@/components/AboutMe';
import Technologies from '@/components/Technologies';
import Layout from '@/components/Layout';
import type { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <>
      <Layout
        title='Usman Sabuwala - Web Developer'
        description='Web Developer, Content Creator and Learner'
      >
        <AboutMe />
        <Technologies />
      </Layout>
    </>
  );
};

export default About;
