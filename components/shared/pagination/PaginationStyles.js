import styled from 'styled-components';

const PaginationContainerStyles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  user-select: none;
  @media (max-width: 850px) {
    display: block;
  }
`;

const ItemsPerPageSelectStyles = styled.div`
  display: inline;
  margin-left: 2rem;
  color: var(--dark);
  select {
    border: 1px solid gray;
    background: transparent;
    margin: 0 1rem;
    padding: 0.5rem;
  }
`;

const ItemsSortSelectStyles = styled.div`
  display: inline;
  margin-left: 1rem;
  position: relative;

  #sort-btn {
    cursor: pointer;
    border: 1px solid gray;
    background: transparent;
    padding: 0.5rem 1rem;
    color: var(--gray);
    transition: all 2s;
    svg {
      color: var(--gray);
      transform: scale(1.7);
      margin-left: 2rem;
    }
  }

  #sort-dropdown {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
    width: 100%;
    opacity: 0;
    z-index: 1;
    visibility: hidden;
    background: var(--lightGray);
    position: absolute;
    left: 0;
    top: 2.3rem;
    opacity: 0;
    transition: all 0.35s;

    .sort-opt-btn {
      width: 100%;
      padding: 1rem 0;
      cursor: pointer;
      border: none;
      color: var(--dark);
      background: none;
      transition: all 0.2s;
      &:hover {
        background: var(--dark);
        color: var(--offWhite);
      }
    }
    ${props =>
      props.dropdownOpen &&
      `opacity: 1; visibility: visible;`}
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

export {
  PaginationContainerStyles,
  ItemsPerPageSelectStyles,
  PagesControlStyles,
  ItemsSortSelectStyles,
};
