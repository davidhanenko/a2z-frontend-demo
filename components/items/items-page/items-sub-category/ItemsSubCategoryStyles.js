import styled from 'styled-components';

const ItemsSubCategoryStyles = styled.div`
  background: var(--lightGray);
  padding: 2rem 3rem;
  text-align: center;
  @media (max-width: 850px) {
  }
  .subcategory-title {
    color: var(--darkBlue);
    font-weight: 300;
    font-size: 1.8rem;
    text-transform: uppercase;
    margin: 0 0 1.5rem 0;
  }
`;

export { ItemsSubCategoryStyles };
