import { useCallback, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './styles';

export default function Introduction(): JSX.Element {
  return (
    <Container>
      <span>
        Olá, eu sou o <b>Matheus de Nadai</b> 🤯
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
    </Container>
  );
}
