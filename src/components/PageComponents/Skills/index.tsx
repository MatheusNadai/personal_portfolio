/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slide from 'react-reveal/Slide';

import { Container } from './styles';
import Button from '../../Button';

export default function Skills(): JSX.Element {
  return (
    <Container id="skills">
      <div>
        <div className="my-skills">
          <p>MY SKILLS</p>
        </div>
        <span>Quais são as skills que utilizo para programar?</span>
        <p className="description-skills">
          Para desenvolver aplicações que atendam todas as necessidades do
          cliente, uso as seguintes técnologias
        </p>
        <Button style={{ width: '10rem' }}>Fale comigo</Button>
      </div>
      <div className="container-squares">
        <div className="square">
          <img
            src="/logos_javascript.svg"
            alt="Representação de logo da técnologia"
          />
        </div>
        <div className="square">
          <img
            src="/logos_typescript-icon.svg"
            alt="Representação de logo da técnologia"
          />
        </div>
        <div className="square">
          <img
            className="react"
            src="React-icon.svg"
            alt="Representação de logo da técnologia"
          />
        </div>
        <div className="square">
          <img src="/node-js.png" alt="Representação de logo da técnologia" />
        </div>
        <div className="square">
          <img
            src="/react-native-icon.svg"
            alt="Representação de logo da técnologia"
          />
        </div>
        <div className="square">
          <img
            src="/vscode-icons_file-type-html.svg"
            alt="Representação de logo da técnologia"
          />
        </div>
        <div className="square">
          <img
            src="/vscode-icons_file-type-css (1).svg"
            alt="Representação de logo da técnologia"
          />
        </div>
        <div className="square">
          <img
            className="next-js"
            src="/nextjs-logo.png"
            alt="Representação de logo da técnologia"
          />
        </div>
        <div className="square">
          <img src="/logo-git.svg" alt="Representação de logo da técnologia" />
        </div>
        <div className="square">
          <img
            src="/logo-github.svg"
            alt="Representação de logo da técnologia"
          />
        </div>
      </div>
    </Container>
  );
}
