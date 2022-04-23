import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 6rem 4rem;
  padding: 0 2rem;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  gap: 10rem;
  span {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    max-width: 560px;
    display: flex;
  }
  p.description-skills {
    line-height: 2rem;
    margin-bottom: 5.8rem;
    display: flex;
    max-width: 580px;
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
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    .square {
      background: rgba(255, 255, 255, 0.08);
      padding: 1rem;
      display: flex;
      border-radius: 12px;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`;
