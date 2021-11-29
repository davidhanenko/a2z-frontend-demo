import styled from 'styled-components';

const SubCategoryCollectionStyles = styled.div`
  padding: 2rem;

  .collection-title {
    text-transform: uppercase;
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
