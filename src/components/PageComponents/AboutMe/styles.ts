import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 4rem;
  padding: 4rem 2rem;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  gap: 10rem;
  div {
    /* flex: 1; */
    display: flex;
    flex-direction: column;
    span {
      font-size: 1.7rem;
      font-weight: 700;
      margin-bottom: 2rem;
    }
    .whoiam {
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
    p.description-about-me {
      line-height: 2rem;
      margin-bottom: 5.8rem;
    }
  }
  img {
    width: 360px;
    height: 480px;
  }
`;
