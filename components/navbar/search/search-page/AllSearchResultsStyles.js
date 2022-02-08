import styled from 'styled-components';

const AllSearchResultsStyles = styled.div`
  margin-top: calc(
    var(--navHeight) + var(--searchHeight) + 3rem
  );

  display: flex;
  flex-wrap: wrap;
  text-align: center;
`;

const FoundItemStyles = styled.div`
  flex: 1 1 200px;
  padding: 2rem;
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
`;

export { AllSearchResultsStyles, FoundItemStyles };
