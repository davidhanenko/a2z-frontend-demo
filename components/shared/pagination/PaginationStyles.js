import styled from 'styled-components';

const PaginationStyles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  user-select: none;
`;

const PagesInputStyles = styled.div`
  display: inline;
  margin-left: 2rem;
  color: var(--dark);
  select {
    margin: 0 1rem;
    padding: 0.5rem;
  }
`;

const PagesControlStyles = styled.div`
  display: inline;
  margin-right: 2rem;
 
  a {
    margin: 1rem;
    color: gray;
    border-radius: 5px;
    transition: color 0.25s;
    &:hover {
      color: var(--dark);
    }
  }
  a[aria-disabled='true'] {
    color: var(--dark);
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export { PaginationStyles, PagesInputStyles, PagesControlStyles };
