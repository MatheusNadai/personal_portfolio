/* eslint-disable react/jsx-no-useless-fragment */
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AboutMe from '../components/PageComponents/AboutMe';
import Introduction from '../components/PageComponents/Introduction';
import Skills from '../components/PageComponents/Skills';
import Works from '../components/PageComponents/Works';

const Home: NextPage = () => (
  <>
    <Introduction />
    <AboutMe />
    <Skills />
    {/* <Works /> */}
    <Footer />
  </>
);

export default Home;
