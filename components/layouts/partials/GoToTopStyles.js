import styled from 'styled-components';

const GoToTopButtonStyles = styled.button`
  position: fixed;
  right: 3%;
  bottom: 15%;
  height: 4rem;
  width: 4rem;
  color: var(--blueHover);
  border: 1px solid var(--blueHover);
  border-radius: 0.3rem;
  cursor: pointer;
  transition: color 0.2s;
  z-index: 10;
  &:hover {
    background-color: var(--gray);
    color: var(--darkBlue);
    border: 1px solid var(--darkBlue);
    p {
      transform: scale(1.35);
    }
  }

  p {
    transform: scale(1.2);
    margin: 0;
    display: flex;
    justify-content: center;
    transition: all 0.3s;
  }
`;

export { GoToTopButtonStyles };
