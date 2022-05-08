import { useCallback, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FooterContainer } from './styles';
import Button from '../Button';

export default function Footer(): JSX.Element {
  return (
    <FooterContainer>
      <section>
        <div className="container_one">
          <span>
            <b>Matheus de Nadai</b>
          </span>
          <p className="role">FullStack Web Developer & Mobile Developer</p>
        </div>
        <div className="container_links">
          <span>Useful links</span>
          <a href="#introduction">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Portfólio</a>
        </div>
        <div className="container_links">
          <span>Redes sociais</span>
          <a>Git Hub</a>
          <a>Linkedin</a>
          <a>Instagram</a>
          <a>Facebook</a>
        </div>
      </section>
    </FooterContainer>
  );
}
