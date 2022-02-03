import styled from 'styled-components';

const SearchStyles = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: var(--searchHeight);
  opacity: 1;
  transition: all 0.25s;
  top: var(--navHeight);
  ${props =>
    props.scroll &&
    `-webkit-animation:transition: all 0.25s;;
    opacity: 0;
    height: 0;`};

  .search-icon {
    position: fixed;
    font-size: 3rem;
    color: grey;
    padding-left: 0.5rem;
  }
`;

export { SearchStyles };
