import styled from 'styled-components';

const ItemsMainPageStyles = styled.section`
  position: relative;
  margin-top: 6rem;
  background: lightgray;
  margin-bottom: 10rem;

  h2 {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 400;
    color: darkblue;
    padding-left: 5rem;
  }

  /* .item-title {
    @media (max-width: 828px) {
      font-size: 2.5rem;
    }
    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  } */

  .embla__slide {
    position: relative;
    min-width: 25%;
    @media (max-width: 828px) {
      min-width: 50%;
    }
    @media (max-width: 500px) {
      min-width: 100%;
    }
  }
`;

export { ItemsMainPageStyles };
