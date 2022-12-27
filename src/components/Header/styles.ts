import styled from 'styled-components';

export const HeaderContainer = styled.header`
  max-width: 1120px;
  margin: 0 auto;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  @media (max-width: 1120px) {
    display: none;
  }
  div {
    display: flex;
    gap: 4rem;
    a {
      color: #fff;
      font-family: ${props => props.theme.font.primary};
      font-size: 1.1rem;
      font-weight: 700;
      cursor: pointer;
      &:hover {
        color: #ffb742 !important;
      }
    }
  }
`;

export const HeaderContainerMobile = styled.header`
  max-width: 1120px;
  margin: 0 auto;
  height: 100px;
  display: flex;
  padding: 0 2rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;
  display: none;
  @media (max-width: 1120px) {
    display: flex;
  }
  .content-logo {
    width: 100%;
    justify-content: center;
  }
  .button-action-header-mobile {
    position: absolute !important;
    left: 0;
    margin-left: 2rem;
    border: none;
    background: none;
    .menu-hamburguer {
      filter: brightness(0) invert(1);
    }
  }

  div {
    display: flex;
    gap: 4rem;
    a {
      color: #fff;
      font-family: ${props => props.theme.font.primary};
      font-size: 1.1rem;
      font-weight: 700;
      cursor: pointer;
      &:hover {
        color: #ffb742 !important;
      }
    }
  }
`;

export const ScreenMenuMobile = styled.div`
  position: absolute;
  background: ${props => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 2;

  div {
    gap: 32px;
    margin-top: -32px;
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    a {
      font-size: 24px;
    }
  }
`;
