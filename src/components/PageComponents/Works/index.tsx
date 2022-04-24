/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Container } from './styles';

export default function Works(): JSX.Element {
  return (
    <Container>
      <div className="my-works">
        <p>MY WORKS</p>
      </div>
      <span>Trabalhos em destaque</span>
      <div className="menu">
        <button type="button">All</button>
        <button type="button">Mobile App</button>
        <button type="button">Website development</button>
      </div>
    </Container>
  );
}
