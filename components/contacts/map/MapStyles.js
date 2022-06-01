import styled from 'styled-components';

const MapStyles = styled.div`
  flex: 1 1 400px;
  /* background: var(--white); */
  margin: 2rem;

  display: flex;
  flex-direction: column;

  /* box-shadow: 2px -1px 10px 0px rgba(0, 0, 0, 0.2); */

  h2 {
    text-align: center;
    font-size: 3rem;
    padding: 2rem 0;
    color: var(--darkBlue);
    font-weight: 400;
    text-transform: uppercase;
    background: transparent;
  }

  .map-wrap {
    margin: 2rem;
    height: 100%;
  }

  #map {
    height: 100%;
  }
`;

export { MapStyles };
