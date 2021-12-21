import styled from 'styled-components';

const MenuTreeStyles = styled.ul`
  background: var(--gray);
  margin: 0;
  padding: 0.7rem 3rem;
`;

const TreeNodeStyles = styled.li`
  display: inline;
  font-size: 1.5rem;
  font-weight: 300;
  text-transform: capitalize;
  a {
    color: var(--dark);
    text-decoration: none;
    transition: all 0.25s;
    &:hover {
      color: var(--lightBlue);
    }
  }
  &:last-of-type {
    a {
      color: var(--lightBlue);
      pointer-events: none;
      &:after {
        content: ' / ';
        color: var(--lightBlue);
      }
    }
  }
  &:before {
    content: ' / ';
    padding: 0 0.2rem;
  }
  &:first-of-type {
    &:before {
      content: none;
    }
  }
`;

export { MenuTreeStyles, TreeNodeStyles };
