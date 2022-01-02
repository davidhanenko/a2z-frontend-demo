import styled from 'styled-components';

const NavDropdownStyles = styled.div`
  position: relative;
  align-self: center;
  .dropdown-btns-group {
    @media (max-width: 850px) {
      display: flex;
    }
  }
`;

const DropdownBtnStyles = styled.button`
  padding: 0;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  @media (max-width: 850px) {
    position: relative;
  }
  svg {
    color: var(--darkBlue);
    transform: scale(2);
  }
`;

const DropdownMenuStyles = styled.ul`
  background: var(--gray);
  padding-left: 2rem;
  z-index: 2;

  @media (min-width: 850px) {
    background: #e5e8fc;
    position: fixed;
    top: 6rem;
    right: 12rem;
    width: 50rem;
    margin: 0 0 0 -5rem;
    padding: 2rem;
    padding-bottom: 10rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const DropdownItemStyles = styled.li`
  list-style: none;
  text-transform: capitalize;
  cursor: pointer;
  line-height: 2rem;
  font-weight: 300;
  padding: 0.6rem;
  @media (max-width: 850px) {
    line-height: 1.7rem;
    font-size: 2rem;
    a {
      display: block;
    }
  }
`;

export {
  NavDropdownStyles,
  DropdownBtnStyles,
  DropdownMenuStyles,
  DropdownItemStyles,
};
