/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slide from 'react-reveal/Slide';

import { Container } from './styles';
import Button from '../../Button';

export default function AboutMe(): JSX.Element {
  return (
    <Container id="about">
      <Slide left>
        <img src="/animation_1.png" alt="Imagens" />
        <div>
          <div className="whoiam">
            <p>WHO I AM</p>
          </div>
          <span>Sobre Mim</span>
          <p className="description-about-me">
            Oi! Eu sou Matheus de Nadai, e sou desenvolvedor que tem paixão por
            construir aplicativos e sistemas web que transforme a vida das
            pessoas. Gosto do processo de transformar ideias em realidade usando
            soluções criativas. Estou sempre curioso em aprender novas
            habilidades, ferramentas e conceitos. Gosto muito de ajudar, por
            isso me dou tão bem em trabalho em equipe. Acredito que a
            comunicação é algo essencial para o auto-desenvolvimento.
          </p>
          <Button style={{ width: '10rem' }}>Fale comigo</Button>
        </div>
      </Slide>
    </Container>
  );
}
