import styled from 'styled-components';

const BannerSliderStyles = styled.div`
  position: relative;
  top: var(--navHeight);
  max-width: 1920px;

  .embla__viewport {
    overflow: hidden;
    width: 100%;
  }

  .embla__viewport.is-draggable {
    cursor: move;
    cursor: grab;
  }

  .embla__viewport.is-dragging {
    cursor: grabbing;
  }

  .embla__container {
    display: flex;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .embla__slide {
    position: relative;
    min-width: 100%;
  }

  .embla__slide__inner {
    position: relative;
    overflow: hidden;
    height: 50rem;
  }

  .embla__slide__img {
    position: relative;
    display: block;
    top: 50%;
    left: 50%;
    width: auto;
    min-height: 100%;
    min-width: 100%;
    max-width: none;
  }
  
  .embla__button {
    outline: 0;
    cursor: pointer;
    background-color: transparent;
    touch-action: manipulation;
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    border: 0;
    width: 30px;
    height: 30px;
    transition: all 0.3s;
    justify-content: center;
    align-items: center;
    transform: scale(0);
    fill: transparent;
    transition: all 0.3s;
    padding: 0;
  }

  &:hover {
    .embla__button {
      transform: scale(1);
      transition: all 0.3s;
      fill: blue;
    }
  }

  .embla__button:disabled {
    cursor: default;
    opacity: 0.3;
  }

  .embla__button__svg {
    width: 100%;
    height: 100%;
  }

  .embla__button--prev {
    left: 27px;
    &:hover {
      fill: lightblue;
    }
  }

  .embla__button--next {
    right: 27px;
    &:hover {
      fill: lightblue;
    }
  }

  .embla__dots {
    display: flex;
    list-style: none;
    justify-content: center;
    position: relative;
    bottom: 3rem;
  }

  .embla__dot {
    background-color: transparent;
    cursor: pointer;
    position: relative;
    padding: 0;
    outline: 0;
    border: 0;
    width: 30px;
    height: 30px;
    margin-right: 7.5px;
    margin-left: 7.5px;
    display: flex;
    align-items: center;
  }

  .embla__dot:after {
    background-color: #efefef;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    content: '';
  }

  .embla__dot.is-selected:after {
    background-color: lightblue;
    opacity: 1;
  }
`;

export default BannerSliderStyles;
