/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slide from 'react-reveal/Slide';

import { Container, ContainerAll } from './styles';
import Button from '../../Button';

export default function Skills(): JSX.Element {
  return (
    <ContainerAll>
      <Container id="skills">
        <div className="content-message">
          <div className="my-skills">
            <p>MY SKILLS</p>
          </div>
          <span>What skills do I use to program?</span>
          <p className="description-skills">
            To develop applications that meet all the needs of the customer, I
            use the following technologies
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
            <img
              src="/logo-git.svg"
              alt="Representação de logo da técnologia"
            />
          </div>
          <div className="square">
            <img
              src="/logo-github.svg"
              alt="Representação de logo da técnologia"
            />
          </div>
        </div>
      </Container>
      <div className="container-squares-mobile">
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
    </ContainerAll>
  );
}
