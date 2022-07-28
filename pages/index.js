import Head from 'next/head';
import { useState } from 'react';
import { FooterInterface } from '../components/InterfaceElement/FooterInterface';
import { HeaderMobile } from '../components/InterfaceElement/HeaderMobile';
import { InterfaceElements } from '../components/InterfaceElement/InterfaceElements';
import { RadiostantionEement } from '../components/InterfaceElement/RadiostantionEement';
import { MainLayout } from '../components/MainLayout';
import styles from '../styles/Home.module.css';

export default function Home({ data }) {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [tickerRadioName, setTickerRadioName] = useState(null);
  const [currentSearchValue, setCurrentSearchValue] = useState([]);
  
  return (
    <MainLayout>
      <HeaderMobile />
      <InterfaceElements
        isActiveMenu={isActiveMenu}
        tickerRadioName={tickerRadioName}
        data={data}
        setCurrentSearchValue={setCurrentSearchValue}
      />
      <RadiostantionEement
        data={data}
        setIsActiveMenu={setIsActiveMenu}
        setTickerRadioName={setTickerRadioName}
        currentSearchValue={currentSearchValue}
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
