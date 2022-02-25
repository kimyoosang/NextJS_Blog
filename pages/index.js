import Link from 'next/link';
import Navbar from '../components/Navbar';

function HomePage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h1>My Blog</h1>
      </main>
    </>
  );
}

export default HomePage;
