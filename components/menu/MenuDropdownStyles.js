import styled from 'styled-components';

const DropdownStyles = styled.div`
  align-self: center;
  display: inline-block;

  .dropdown-btns-group {
    @media (max-width: 850px) {
      display: flex;
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
    }
  }
`;

const DropdownBtnStyles = styled.button`
  padding: 0;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  display: none;
  @media (max-width: 850px) {
    display: flex;
    align-self: center;
    position: fixed;
    right: 2rem;
  }
  svg {
    color: var(--gray);
    transform: scale(2);
  }
`;

const DropdownMenuStyles = styled.ul`
  margin: 0;
  opacity: 0;
  z-index: 1;
  padding: 1rem;
  display: none;
  visibility: hidden;
  ${props =>
    props.dropdownOpen && `opacity: 1; visibility: visible; display: block;`}
  @media (min-width: 850px) {
    background: #c1e2ec;
    min-height: 15rem;
    position: absolute;
    width: 50rem;
    left: 3rem;
    margin: 0;
    padding: 2rem;
    opacity: 0;
    visibility: hidden;
    grid-template-columns: 1fr 1fr;
    transition: all 0.35s;
    display: none;
    ${props =>
      props.dropdownOpen && `display: grid; opacity: 1; visibility: visible; `}
  }
`;

const DropdownItemStyles = styled.li`
  list-style: none;
  text-transform: capitalize;
  cursor: pointer;
  line-height: 0.7rem;
  padding: 1rem;
  a {
    text-decoration: none;
    color: white;
    font-size: 1.8rem;
    transition: all 250ms;
    &:hover {
      text-decoration: none;
      color: var(--black);
    }
  }
`;

export {
  DropdownStyles,
  DropdownBtnStyles,
  DropdownMenuStyles,
  DropdownItemStyles,
};
