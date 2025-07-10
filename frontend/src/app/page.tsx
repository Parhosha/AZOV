import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Content from './components/Content';
// import { GetServerSideProps } from 'next';
// import { fetchStrapi } from '../lib/strapi';


export default function Home() {
  return (
    <div className='bg-[#101010]'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const articles = await fetchStrapi('posts?populate=*');
//   return { props: { articles } };
// };