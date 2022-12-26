import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 3.5rem auto 5.5rem auto;
  padding: 2rem;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 8rem;
  span {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    max-width: 560px;
    display: flex;
  }
  p.description-skills {
    line-height: 2rem;
    margin-bottom: 2.5rem;
    display: flex;
    max-width: 620px;
  }
  .my-skills {
    height: 1rem;
    width: 10rem;
    padding: 0.8rem;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
    p {
      color: ${props => props.theme.colors.yellow};
      font-weight: 700;
      font-size: 0.9rem;
    }
  }
  .container-squares {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(auto, 100px);
    align-items: flex-start;
    gap: 1.5rem;
    .square {
      background: rgba(255, 255, 255, 0.08);
      padding: 1rem;
      display: flex;
      border-radius: 12px;
      position: relative;
      top: 0;
      transition: top ease 0.5s;
      img {
        width: 50px;
        height: 50px;
      }
    }
    .square:hover {
      top: -15px;
    }
    .next-js {
      background: #fff;
    }
  }
`;
