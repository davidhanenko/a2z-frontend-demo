import styled from 'styled-components';

const PaginationContainerStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  margin-top: 2rem;
  user-select: none;
  @media (max-width: 850px) {
    display: block;
  }
`;

const ItemsPerPageSelectStyles = styled.div`
  display: inline;
  margin-left: 2rem;
   p{
     display: inline;
     text-transform: capitalize;
     color: var(--gray);
   }
  }
`;

const ItemsSortSelectStyles = styled.div`
  display: inline;
  margin-left: 1rem;
`;

const PagesControlStyles = styled.div`
  display: inline;
  margin-right: 2rem;
  @media(max-width: 850px) {
    display: flex;
    justify-content: end;
  }
 

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

export {
  PaginationContainerStyles,
  ItemsPerPageSelectStyles,
  PagesControlStyles,
  ItemsSortSelectStyles,
};
