import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 6rem 4rem;
  padding: 0 2rem;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    max-width: 560px;
    display: flex;
  }
  .my-works {
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
`;
