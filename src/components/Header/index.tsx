/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  HeaderContainer,
  HeaderContainerMobile,
  ScreenMenuMobile,
} from './styles';
import Button from '../Button';

export default function Header(): JSX.Element {
  const [selected, setSelected] = useState('home');
  const [showScreen, setShowScreen] = useState(false);

  useEffect(() => {
    if (showScreen) {
      document.body.style.overflowY = 'hidden';
      document.body.style.overflowX = 'hidden';
    } else {
      document.body.style.overflowY = 'visible';
      document.body.style.overflowX = 'visible';
    }
  }, [showScreen]);
  return (
    <>
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

      <HeaderContainerMobile id="introduction">
        <button
          type="button"
          className="button-action-header-mobile"
          onClick={() => setShowScreen(state => !state)}
        >
          {!showScreen ? (
            <img
              className="menu-hamburguer"
              src="/menu-alt-05.svg"
              alt="Vercel Logo"
            />
          ) : (
            <img className="menu-hamburguer" src="x.svg" alt="icon-menu" />
          )}
        </button>
        <div className="content-logo">
          <Image src="/fragment.svg" alt="Vercel Logo" width={80} height={80} />
        </div>
      </HeaderContainerMobile>
      {showScreen && (
        <ScreenMenuMobile>
          <div>
            <a
              onClick={() => {
                setShowScreen(false);
                setSelected('home');
              }}
              style={{ color: selected === 'home' ? '#FFB742' : '#fff' }}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => {
                setShowScreen(false);
                setSelected('about');
              }}
              style={{ color: selected === 'about' ? '#FFB742' : '#fff' }}
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => {
                setShowScreen(false);
                setSelected('skills');
              }}
              style={{ color: selected === 'skills' ? '#FFB742' : '#fff' }}
            >
              Skills
            </a>
          </div>
        </ScreenMenuMobile>
      )}
    </>
  );
}
