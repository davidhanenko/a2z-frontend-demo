import styled from 'styled-components';

const PaginationStyles = styled.div`
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;

export {PaginationStyles};