import styled from 'styled-components';

const ItemsCategoryStyles = styled.div`
  background: var(--offWhite);
  padding: 2rem 3rem 4rem 3rem;

  h3 {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 300;
    color: blue;
    padding-left: 5rem;
    @media (max-width: 850px) {
      font-size: 2.5rem;
    }
  }
  .category-container {
    display: grid;
    grid-gap: 2rem;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    @media (max-width: 500px) {
      grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
    }
  }
`;

export { ItemsCategoryStyles };
