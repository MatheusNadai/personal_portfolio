import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  background-color: #000;
  section {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 18rem;
    padding: 4rem 2rem;
    margin: 0 auto;
    max-width: 1120px;
    span {
      font-size: 1.5rem;
      font-weight: 700;
      b {
        color: ${props => props.theme.colors.yellow};
      }
    }
    .container_links {
      display: flex;
      flex-direction: column;
      span {
        font-size: 1rem;
        margin-bottom: 1rem;
      }
      a {
        margin-bottom: 12px;
        color: #7b7b7b;
      }
    }
    .role {
      font-size: 0.8rem;
      margin-top: 1.5rem;
    }
  }
`;
