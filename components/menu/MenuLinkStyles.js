import styled from 'styled-components';

const MenuLinkStyles = styled.div`
  font-size: 1.7rem;
  margin-right: 3rem;
  a {
    text-decoration: none;
  }
  .link-title {
    margin-top: 0;
    color: var(--dark);
    text-transform: uppercase;
    font-weight: 400;
    transition: all 0.3s;
  }
  &:hover .link-title {
    color: var(--darkBlueHover);
  }
  .active {
    color: var(--darkBlueHover);
  }
`;

export { MenuLinkStyles };
