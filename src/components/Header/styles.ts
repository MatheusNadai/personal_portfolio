import styled from 'styled-components';

export const HeaderContainer = styled.header`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  div {
    display: flex;
    gap: 2rem;
    a {
      color: #fff;
      font-family: ${props => props.theme.font.primary};
      font-size: 1.1rem;
      font-weight: 700;
    }
  }
`;
