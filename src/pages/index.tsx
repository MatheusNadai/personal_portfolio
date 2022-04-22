/* eslint-disable react/jsx-no-useless-fragment */
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Introduction from '../components/PageComponents/Introduction';

const Home: NextPage = () => (
  <>
    <Introduction />
  </>
);

export default Home;
