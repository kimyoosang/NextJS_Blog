import Head from 'next/head';
import { getPost } from '../../lib/posts';

//1.서버에서 먼저 렌더링
export async function getStaticProps() {
  const post = await getPost('first-post');
  return {
    props: { post },
  };
}
//2.클라이언트에서 렌더링
function FirstPostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
      </Head>
      <main>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
}

export default FirstPostPage;
