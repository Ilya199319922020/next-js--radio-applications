import Head from 'next/head';
import { FooterInterface } from '../components/InterfaceElement/FooterInterface';
import { HeaderMobile } from '../components/InterfaceElement/HeaderMobile';
import { InterfaceElements } from '../components/InterfaceElement/InterfaceElements';
import { RadiostantionEement } from '../components/InterfaceElement/RadiostantionEement';
import { MainLayout } from '../components/MainLayout';
import styles from '../styles/Home.module.css';

export default function Home({ data }) {

  return (
    <MainLayout>
          <HeaderMobile />
          <InterfaceElements />
          <RadiostantionEement
            data={data}
          />
          <FooterInterface />
    </MainLayout>
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
