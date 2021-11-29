import styled from 'styled-components';

const ImageOverlay = styled.div`
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: block;
  background: linear-gradient(transparent 0%, rgba(184, 183, 183, 0.3) 100%)
    repeat-x rgba(233, 232, 232, 0.3);
  transition-property: opacity;
  transition: opacity 0.3s;
`;

const ItemsSlideStyles = styled.div`
  background: rgb(240, 240, 240);
  cursor: pointer;
  margin: 0 1rem 1rem 1rem;
  position: relative;
  padding: 1rem;
  overflow: none;


  .item-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: 400;
    color: rgb(6, 6, 192);
    z-index: 3;
    transition: transform 0.3s;
    @media (max-width: 500px) {
      font-size: 2.8rem;
    }
  }

  .item-image {
    transition: transform 0.3s;
  }

  &:hover {
    .item-title {
      transform: translate(-65%, -75%);
    }
    .item-image {
      transform: scale(1.05);
    }
    ${ImageOverlay} {
      opacity: 0.3;
    }
  }
`;

export { ItemsSlideStyles, ImageOverlay };
