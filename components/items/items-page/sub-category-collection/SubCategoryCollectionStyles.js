import styled from 'styled-components';

const SubCategoryCollectionStyles = styled.div`
  padding: 5rem 5rem;

  .collection-title {
    text-transform: uppercase;
    color: var(--dark);
    font-size: 3rem;
    font-weight: 400;
  }

  .collection-container {
    display: grid;
    grid-gap: 2rem;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    @media (max-width: 500px) {
      grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
    }
  }
`;

export { SubCategoryCollectionStyles };
