import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 7.5rem auto 7rem auto;
  padding: 0 2rem;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    font-size: 1.7rem;
    font-weight: 700;
    b {
      color: ${props => props.theme.colors.yellow};
      text-decoration: underline;
    }
  }
  .role {
    font-size: 2.2rem;
    font-weight: 700;
    margin-top: 1.5rem;
  }
  .description {
    font-size: 1rem;
    margin: 1.5rem 0 2rem 0;
    font-weight: 0;
  }

  .awards {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    gap: 2rem;
    margin: 4rem 0;
    .information {
      display: flex;
      flex: 1;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      padding: 1.5rem;
      div {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      p {
        font-size: 1.3rem;
        font-weight: 700;
        color: ${props => props.theme.colors.yellow};
      }
      span {
        margin-top: 0.5rem;
        font-size: 0.9rem;
      }
    }
  }
`;
