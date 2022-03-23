import styled from 'styled-components';

const CollectionItemStyles = styled.div`
  background: var(--lightGray);
  padding: 2rem 3rem;
  text-align: center;

  a {
    text-decoration: none;
  }

  .collection-item-title {
    text-transform: uppercase;
    color: var(--darkBlue);
    font-weight: 300;
    font-size: 1.7rem;
    margin: 0;
  }
`;

export { CollectionItemStyles };
