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
  overflow-x: hidden;
  @media (max-width: 1120px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3.5rem auto 2rem auto;
  }
  gap: 8rem;
  .content-message {
    display: flex;
    flex-direction: column;
    @media (max-width: 1120px) {
      align-items: center;
      text-align: center;
    }
  }
  span {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    max-width: 560px;
    display: flex;
  }
  p.description-skills {
    line-height: 2rem;
    margin-bottom: 2rem;
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
    @media (max-width: 1120px) {
      display: none;
    }
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

export const ContainerAll = styled.div`
  .container-squares-mobile {
    max-width: 1120px;
    padding: 0 0 0 2rem;
    margin-bottom: 5.5rem;
    display: none;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(auto, 100px);
    align-items: flex-start;
    gap: 1.5rem;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      width: 0px;
    }
    @media (max-width: 1120px) {
      display: flex;
      overflow: scroll;
    }
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
