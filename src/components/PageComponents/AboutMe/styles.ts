import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  @media (max-width: 1120px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  gap: 10rem;
  div {
    display: flex;
    flex-direction: column;
    @media (max-width: 1120px) {
      align-items: center;
      text-align: center;
    }
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
      margin-bottom: 2rem;
    }
  }
  img {
    width: 360px;
    height: 480px;
  }
`;
