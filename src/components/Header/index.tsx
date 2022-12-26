/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderContainer } from './styles';
import Button from '../Button';

export default function Header(): JSX.Element {
  const [selected, setSelected] = useState('home');
  useLayoutEffect(() => {
    console.log('oi');
  }, []);
  return (
    <HeaderContainer id="introduction">
      <Image src="/fragment.svg" alt="Vercel Logo" width={80} height={80} />
      <div>
        <a
          onClick={() => setSelected('home')}
          style={{ color: selected === 'home' ? '#FFB742' : '#fff' }}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setSelected('about')}
          style={{ color: selected === 'about' ? '#FFB742' : '#fff' }}
        >
          About
        </a>
        <a
          href="#skills"
          onClick={() => setSelected('skills')}
          style={{ color: selected === 'skills' ? '#FFB742' : '#fff' }}
        >
          Skills
        </a>
        {/* <a
          href="#portfolio"
          onClick={() => setSelected('portfolio')}
          style={{ color: selected === 'portfolio' ? '#FFB742' : '#fff' }}
        >
          Portfólio
        </a> */}
      </div>
      <Button
        onClick={() =>
          window.open(
            'https://www.linkedin.com/in/matheus-de-nadai-a63519211/',
            '_ blank',
          )
        }
      >
        Talk to me
      </Button>
    </HeaderContainer>
  );
}
