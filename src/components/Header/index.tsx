import { useCallback, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderContainer } from './styles';
import Button from '../Button';

export default function Header(): JSX.Element {
  return (
    <HeaderContainer id="introduction">
      <Image src="/fragment.svg" alt="Vercel Logo" width={80} height={80} />
      <div>
        <a>Home</a>
        <a>About</a>
        <a>Skills</a>
        <a>Portfólio</a>
        <a>Contact</a>
      </div>
      <Button>Fale comigo</Button>
    </HeaderContainer>
  );
}
