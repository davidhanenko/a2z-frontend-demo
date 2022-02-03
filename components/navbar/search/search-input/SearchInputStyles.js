import styled from 'styled-components';

const SearchInputStyles = styled.input`
  border: 1px solid var(--lightGray);
  height: 100%;
  width: 100%;
  outline: 0;
  padding-left: 3rem;
  background: #f5f5f5;
  &::placeholder {
    color: #d8d8d8;
    font-weight: 100;
  }
`;

export {SearchInputStyles};