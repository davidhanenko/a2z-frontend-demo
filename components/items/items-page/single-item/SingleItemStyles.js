import styled from 'styled-components';

const SingleItemStyles = styled.div`
  margin: 8rem 0;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 720px) {
    flex-direction: column;
  }

  .item-image-container {
    max-width: 450px;
    max-height: 450px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 3rem;
    text-transform: uppercase;
    flex: 1 1 0;
  }

  .item-description-container {
    max-width: 50%;
    padding: 0 5rem 0 1rem;
    flex: 1 1 0;

    .single-item-title {
      font-size: 3rem;
      font-weight: 400;
      text-align: start;
      text-transform: uppercase;
      color: var(--dark);
      margin: 0 0 1rem 0;
    }
    .single-item-price {
      font-size: 2rem;
      font-weight: 400;
      text-align: end;
      padding-right: 2rem;
      color: var(--blue);
      margin: 2rem 0;
    }
    .available-sizes {
      font-size: 2rem;
      color: var(--dark);
      font-weight: 300;
      margin: 0;
    }
    .size-input-btn {
      font-size: 1.5rem;
      margin: 0.5rem 0.5rem 2rem 0.5rem;
      padding: 1rem 2rem;
      border: none;
      background: var(--gray);
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        background: var(--blueHover);
      }
    }
    .active-size-btn {
      background: var(--blueHover);
      pointer-events: none;
    }

    hr {
      height: 1px;
      border: none;
      background-color: #ccc;
    }

    .single-item-description {
      margin-top: 5rem;
      font-size: 1.5rem;
      font-weight: 300;
    }
    @media (max-width: 720px) {
      max-width: 100%;
      padding: 4rem 2rem 5rem 2rem;
    }
  }
`;

export { SingleItemStyles };
