import Link from 'next/link';
import Layout from '../components/Layout';
import Head from 'next/head';

const Index = () => (
  <Layout>
    <Head>
      <title>
        Hello!
      </title>
    </Head>
    <h1>
      Hello, Next.js
    </h1>
    <h2>
      <Link href="/about">
        <div style={{background: 'black', color: 'white'}}>소개</div>
      </Link>
    </h2>
  </Layout>
);

export default Index;
