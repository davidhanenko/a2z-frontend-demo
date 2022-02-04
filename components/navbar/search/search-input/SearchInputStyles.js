import styled from 'styled-components';

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
`;

export { SearchInputStyles };
