import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home({ data }) {
  const element = data
    .map(c =>
      <Image key={c.id} src={c.image} width="64" height="64"  />
    );
    
  return (
    <div>
      Привет, мир!
      {element}
    </div>
  );
};

Home.getInitialProps = async () => {
  const response = await fetch('http://localhost:3000/api/hello', {
    method: 'GET',
  });
  const data = await response.json();
  return {
    data
  }
};
