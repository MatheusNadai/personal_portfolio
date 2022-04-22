/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slide from 'react-reveal/Slide';
import Typewriter from 'typewriter-effect/dist/core';
import { Container } from './styles';

export default function Introduction(): JSX.Element {
  useEffect(() => {
    const typing = document.getElementById('typing');

    const typewriter = new Typewriter(typing, { loop: true });

    typewriter
      .typeString('Matheus de Nadai')
      .pauseFor(1000)
      .deleteAll()
      .start();
  }, []);

  return (
    <Container>
      <span>
        Olá, eu sou o <b id="typing">Matheus de Nadai</b>
      </span>
      <p className="role">FullStack Web Developer & Mobile Developer</p>
      <p className="description">
        Eu projeto e codifico sonhos, transformando-os em realidade,
        simplesmente amo o que faço
      </p>
      <Image
        src="/profile.svg"
        alt="Representação em forma de avatar"
        width={230}
        height={230}
      />
      <Slide left>
        <div className="awards">
          <div className="information">
            <Image src="/award.svg" alt="icone" width={60} height={60} />
            <div>
              <p>2+</p>
              <span>Anos de experiência</span>
            </div>
          </div>
          <div className="information">
            <Image src="/check.svg" alt="icone" width={60} height={60} />
            <div>
              <p>20+</p>
              <span>Projetos concluidos</span>
            </div>
          </div>
          <div className="information">
            <Image src="/clients.svg" alt="icone" width={60} height={60} />
            <div>
              <p>50+</p>
              <span>Clientes satisfeitos</span>
            </div>
          </div>
        </div>
      </Slide>
    </Container>
  );
}
