import styled from 'styled-components';

import { ImageOverlay } from '../../../../shared/sliders/items-slider/ItemsSlideStyles';

const ItemStyles = styled.div`
  position: relative;
  background: white;
  padding: 1rem;
  min-height: 220px;
  text-align: center;

  .service-item-image {
    display: inline-block;
    padding: 1.3rem;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
  }
  &:hover {
    ${ImageOverlay} {
      opacity: 0.3;
    }
    .service-item-image {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    /* -webkit-box-shadow: 1px 1px 1px 2px #e4e6f7;
    box-shadow: 1px 1px 1px 2px #e4e6f7; */
  }
`;

export { ItemStyles, ImageOverlay };
