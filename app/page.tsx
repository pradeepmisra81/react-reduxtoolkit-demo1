import Image from "next/image";
import React from 'react';
import Head from 'next/head';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         React Redux Toolkit
//       </div>
//     </main>
//   );
// }

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Post App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-2xl font-bold">Posts</h1>
      <PostForm />
      <PostList />
    </div>
  );
};

export default Home;