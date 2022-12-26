import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
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
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
  }
  .menu {
    display: flex;
    width: 100%;
    justify-content: space-between;
    max-width: 380px;
    margin-bottom: 2rem;

    button {
      background: transparent;
      color: ${props => props.theme.colors.white};
      border: none;
      padding: 12px;
      border-radius: 8px;
      :hover {
        background: ${props => props.theme.colors.yellow};
      }
    }
  }
  .container-images {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .gofinances {
      display: flex;
      flex-direction: row;
      gap: 10px;
      max-height: 320px;
    }
  }
  img.gifs {
    width: 280px;
    height: 420px;
  }
  img {
    width: 100%;
    max-width: 776px;
    height: 100%;
    max-height: 415px;
  }
`;
