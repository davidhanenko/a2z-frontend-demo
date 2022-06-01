import styled from 'styled-components';

const ItemsCategoryStyles = styled.div`
  background: var(--offWhite);
  padding: 2rem 3rem 4rem 3rem;

  .items-category-title {
    font-size: 3.7rem;
    text-transform: uppercase;
    font-weight: 400;
    color: var(--dark);
    @media (max-width: 850px) {
      font-size: 2.5rem;
    }
  }
  .category-container {
    display: grid;
    grid-gap: 2rem;
    justify-content: center;
    grid-template-columns: repeat(
      auto-fill,
      minmax(250px, 1fr)
    );
    @media (max-width: 500px) {
      grid-template-columns: repeat(
        auto-fill,
        minmax(135px, 1fr)
      );
    }
  }
`;

export { ItemsCategoryStyles };
