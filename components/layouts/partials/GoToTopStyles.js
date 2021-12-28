import styled from 'styled-components';

const GoToTopButtonStyles = styled.button`
  display: none;
  position: fixed;
  right: 3%;
  bottom: 15%;
  height: 4rem;
  width: 4rem;
  color: var(--blueHover);
  border: 1px solid var(--blueHover);
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 10;
  ${props => props.visible && `display: block`};
  &:hover {
    background-color: var(--gray);
    color: var(--darkBlue);
    border: 1px solid var(--darkBlue);
    .btn-icon {
      transform: scale(1.35);
    }
  }

  .btn-icon {
    transform: scale(1.2);
    margin: 0;
    display: flex;
    justify-content: center;
    transition: all 0.1s;
  }
`;

export { GoToTopButtonStyles };
