import styled from 'styled-components';

const FoundItemStyles = styled.div`
  h3 {
    font-weight: 300;
    margin: 0;
  }
  h3::first-letter {
    text-transform: capitalize;
  }
  p {
    font-weight: 100;
  }

  .item-img {
    transition: all 0.3s;
  }

  &:hover {
    .item-img {
      transform: scale(0.9);
    }
  }
`;

export { FoundItemStyles };
