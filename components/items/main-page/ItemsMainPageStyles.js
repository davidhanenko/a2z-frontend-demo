import styled from 'styled-components';

const ItemsMainPageStyles = styled.section`
  position: relative;
  margin-top: 12rem;
  background: var(--offWhite);
  margin-bottom: 10rem;

  h2 {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 400;
    color: darkblue;
    padding-left: 5rem;
  }

/* items slider styles for main page */
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
