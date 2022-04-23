/* eslint-disable react/jsx-no-useless-fragment */
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import AboutMe from '../components/PageComponents/AboutMe';
import Introduction from '../components/PageComponents/Introduction';
import Skills from '../components/PageComponents/Skills';

const Home: NextPage = () => (
  <>
    <Introduction />
    <AboutMe />
    <Skills />
  </>
);

export default Home;
