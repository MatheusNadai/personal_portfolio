/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { Container } from './styles';

export default function Works(): JSX.Element {
  const [works, setWorks] = useState<string>('all');
  return (
    <Container id="portfolio">
      <div className="my-works">
        <p>MY WORKS</p>
      </div>
      <span>Alguns Trabalhos em destaque</span>
      <div className="menu">
        <button type="button" onClick={() => setWorks('all')}>
          All
        </button>
        <button type="button" onClick={() => setWorks('app')}>
          Mobile App
        </button>
        <button type="button" onClick={() => setWorks('web')}>
          Website development
        </button>
      </div>
      {works === 'all' && (
        <Masonry
          breakpointCols={1}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <img src="/Capa.png" alt="Imagens" />
          <img
            className="gifs"
            src="https://camo.githubusercontent.com/80f7adf14d9606c5c6e02b54ca67fe25191b9e82b302970d2fd0a21f9bc529e5/68747470733a2f2f692e696d6775722e636f6d2f5275365772325a2e676966"
            alt="Imagens"
          />
          <img
            className="gifs"
            src="https://camo.githubusercontent.com/1032595ecf18af8cb43f0a04b57b1014701caa1bc96bbac488968e019daf8bcb/68747470733a2f2f692e696d6775722e636f6d2f46764b46614f442e676966"
            alt="Imagens"
          />

          <img
            src="https://raw.githubusercontent.com/rocketseat-education/nlw-06-react-native/master/.github/cover.png"
            alt="Imagens"
          />
          <img src="/geaff.png" alt="Imagens" />
        </Masonry>
      )}
      {works === 'app' && (
        <>
          <img src="/Capa.png" alt="Imagens" />
          <div>
            <img
              className="gifs"
              src="https://camo.githubusercontent.com/80f7adf14d9606c5c6e02b54ca67fe25191b9e82b302970d2fd0a21f9bc529e5/68747470733a2f2f692e696d6775722e636f6d2f5275365772325a2e676966"
              alt="Imagens"
            />
            <img
              className="gifs"
              src="https://camo.githubusercontent.com/1032595ecf18af8cb43f0a04b57b1014701caa1bc96bbac488968e019daf8bcb/68747470733a2f2f692e696d6775722e636f6d2f46764b46614f442e676966"
              alt="Imagens"
            />
          </div>
          <img
            src="https://raw.githubusercontent.com/rocketseat-education/nlw-06-react-native/master/.github/cover.png"
            alt="Imagens"
          />
        </>
      )}
      {works === 'web' && (
        <>
          {/* <img src="/Capa.png" alt="Imagens" /> */}

          <img src="/geaff.png" alt="Imagens" />
        </>
      )}
    </Container>
  );
}
