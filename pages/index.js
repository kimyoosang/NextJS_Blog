import Link from 'next/link';
import Navbar from '../components/NavBar';
import Head from 'next/head';

function HomePage() {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" vocab="This is my blog" />
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          <li>One</li>
          <li>two</li>
          <li>three</li>
        </ul>
      </main>
    </>
  );
}

export default HomePage;
