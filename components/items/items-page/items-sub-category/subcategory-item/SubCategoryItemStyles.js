import styled from 'styled-components';

const SubCategoryItemStyles = styled.div`
  padding: 1rem;

  .subcategory-title {
    color: var(--darkBlue);
    font-weight: 300;
    font-size: 1.8rem;
    text-transform: uppercase;
    padding: 1rem 0 1.5rem 0;
    margin: 0;
  }

  .sub-image {
    transition: all 0.3s;
  }

  &:hover {
    .sub-image {
      transform: scale(0.9);
    }
  }
`;

export { SubCategoryItemStyles };
