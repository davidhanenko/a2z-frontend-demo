import styled from 'styled-components';

const ItemsStyles = styled.div`
  padding: 2rem;
  justify-content: center;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 300px));
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 300px));
  }
 

  .service-item-title {
    position: absolute;
    text-transform: uppercase;
    color: var(--blue);
    font-size: 3rem;
    font-weight: 300;
    z-index: 3;
    margin: 0 auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export { ItemsStyles };
