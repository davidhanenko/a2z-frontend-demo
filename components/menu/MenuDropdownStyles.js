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
    props.dropdownOpen &&
    `opacity: 1; visibility: visible; display: block;`}
  @media (min-width: 850px) {
    background: var(--lightBlue);
    min-height: 20rem;
    position: absolute;
    margin-left: -1rem;
    padding: 2rem 2rem 0 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.35s;
    display: none;
    ${props =>
      props.dropdownOpen &&
      `display: block; opacity: 1; visibility: visible; `}
  }
`;

const DropdownItemStyles = styled.li`
  list-style: none;
  font-weight: 300;
  text-transform: capitalize;
  cursor: pointer;
  line-height: 1rem;
  padding: 1.2rem;
  a {
    text-decoration: none;
    color: var(--dark);
    font-size: 1.8rem;
    transition: all 250ms;
    &:hover {
      text-decoration: none;
      color: var(--darkBlueHover);
    }
  }
`;

export {
  DropdownStyles,
  DropdownBtnStyles,
  DropdownMenuStyles,
  DropdownItemStyles,
};
