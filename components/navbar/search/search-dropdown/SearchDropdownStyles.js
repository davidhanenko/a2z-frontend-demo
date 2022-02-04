import styled from 'styled-components';

const SearchDropdownStyles = styled.ul`
  position: absolute;
  left: 2rem;
  top: calc(var(--searchHeight) / 2);
  list-style: none;
  padding-left: 1rem;
  min-width: 25rem;
  background: var(--offWhite);
`;

const DropdownItemStyles = styled.li`
padding-left: 1rem;
  p {
    display: inline;
    padding: 0.2rem 0.6rem;
    z-index: 5;
  }
  p::first-letter {
    text-transform: capitalize;
  }
  &:hover{
    cursor: pointer;
    p {
      color: red;
    }
  }
`;

export { SearchDropdownStyles, DropdownItemStyles };
