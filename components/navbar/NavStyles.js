import styled from 'styled-components';

const NavStyles = styled.nav`
  grid-area: navbar;
  overflow-x: hidden;
  place-self: center end;
  text-transform: uppercase;

  .nav-links {
    font-size: 1.8rem;
    margin: 0;
    padding: 0;
    position: relative;
    padding-right: 3rem;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    min-width: 250px;
    gap: 0.5rem;
    place-self: center end;
    @media (max-width: 850px) {
      position: fixed;
      gap: 0;
      top: 0;
      right: 0;
      width: 40%;
      min-width: 250px;
      background: var(--gray);
      transform: translateX(100%);
      z-index: 2;
      padding-bottom: 2rem;
      ${props =>
        props.open &&
        `grid-auto-flow: row; transform: translate(0, var(--navHeight)); transition: all 0.35s;`};
      ${props =>
        !props.open &&
        props.width <= 850 &&
        `grid-auto-flow: row; transform: translateX(100%); transition: 0.35s;`};
      @media (pointer: coarse) {
        ${props =>
          !props.open &&
          props.btnClick &&
          `grid-auto-flow: row; transform: translateX(100%); transition: 0.35s;`};
      }
    }
  }
  a {
    padding: 0.2rem 1rem;
    color: var(--darkBlue);
    position: relative;
    transition: all 250ms;
    &:hover,
    &:focus {
      text-decoration: none;
      color: var(--blue);
    }
    @media (max-width: 850px) {
      margin-left: 2rem;
      min-width: 200px;
      border-bottom: 1px solid var(--navBorder);
    }
  }
  *:focus {
    outline: none !important;
  }

  .active-link {
    color: var(--blue);
    /* pointer-events: none; */
  }
`;

const NavButtonStyles = styled.button`
  display: none;
  border: none;
  background: transparent;
  @media (max-width: 850px) {
    display: block;
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`;

export { NavStyles, NavButtonStyles };
