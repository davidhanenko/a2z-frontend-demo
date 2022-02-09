import styled from 'styled-components';

const SearchDropdownStyles = styled.ul`
  position: absolute;
  left: 2rem;
  top: calc(var(--searchHeight) / 2);
  list-style: none;
  padding-left: 0;
  padding-bottom: 10rem;
  min-width: 25rem;
  background: var(--lightGray);

  .found-items {
    font-weight: 100;
    font-size: 1.2rem;
    padding-left: 1rem;
  }

  .no-items {
    color: var(--gray);
    em {
      color: var(--dark);
    }
  }
`;

const DropdownItemStyles = styled.li`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  cursor: pointer;
  -webkit-transition: all 0.3s;
  p {
    display: inline;
    padding: 0.2rem 0.6rem;
    z-index: 5;
  }
  p::first-letter {
    text-transform: capitalize;
  }
  &:hover {
    background: var(--white);
    border-left: 1rem solid var(--gray);
    p {
      color: var(--darkBlue);
    }
  }
`;

const AllResultsStyles = styled.a`
  position: absolute;
  bottom: 0;
  text-align: center;
  background: var(--lightBlueHover);
  width: 100%;
  transition: all 0.3s;
  color: var(--blue);

  &:hover {
    color: var(--dark);
    background: var(--lightBlueHover);
  }
`;

const CloseBtnStyles = styled.button`
  position: absolute;
  top: 0;
  right: -3rem;
  width: 3rem;
  height: 3rem;
  padding: 0;
  border: none;
  font-size: 2rem;
  color: var(--redBrick);
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    padding: 0.2rem;
    -webkit-transition: transform 0.35s;
    &:hover {
      transform: rotate(90deg) scale(1.4);
    }
  }
`;

export {
  SearchDropdownStyles,
  DropdownItemStyles,
  CloseBtnStyles,
  AllResultsStyles,
};
