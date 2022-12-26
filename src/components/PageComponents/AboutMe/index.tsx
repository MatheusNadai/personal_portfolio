/* eslint-disable react/no-unescaped-entities */
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
          <span>About me</span>
          <p className="description-about-me">
            Hey! I'm Matheus de Nadai, and I'm a developer who has a passion for
            build applications and web systems that transform the lives of
            people. I enjoy the process of turning ideas into reality using
            creative solutions. I'm always curious to learn new skills, tools
            and concepts. I really like helping I do so well in teamwork. I
            believe that the Communication is essential for self-development.
          </p>
          <Button
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/matheus-de-nadai-a63519211/',
                '_ blank',
              )
            }
            style={{ width: '10rem' }}
          >
            Talk to me
          </Button>
        </div>
      </Slide>
    </Container>
  );
}
