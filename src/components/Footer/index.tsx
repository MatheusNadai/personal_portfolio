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
          <p className="role">Tech Lead & FullStack Developer</p>
        </div>
        <div className="container_links">
          <span>Useful links</span>
          <a href="#introduction">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
        </div>
        <div className="container_links">
          <span>Redes sociais</span>
          <a
            href="https://github.com/MatheusNadai"
            target="_blank"
            rel="noreferrer"
          >
            Git Hub
          </a>
          <a
            href="https://www.linkedin.com/in/matheus-de-nadai-a63519211/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://www.instagram.com/matheus_nadai/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </section>
    </FooterContainer>
  );
}
