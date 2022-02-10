import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  from {
    box-shadow: 0 0 0px var(--lightBlue);
  }

  to {
    box-shadow: 0 0 4px 2px var(--lightBlue);
  }
`;

const SearchInputStyles = styled.input`
  border: 1px solid var(--lightGray);
  height: 100%;
  width: 100%;
  outline: 0;
  padding-left: 3rem;
  background: var(--white);
  position: relative;
  &::placeholder {
    color: var(--gray);
    font-weight: 100;
  }
  &.loading {
    animation: ${glow} 0.6s ease-in-out infinite alternate;
  }
`;

export { SearchInputStyles };
