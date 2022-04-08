import styled from 'styled-components';

const SearchResultsContainerStyles = styled.div`
  max-width: var(--maxWidth);
  padding: 5rem;
  @media (max-width: 500px) {
    padding: 0 3rem;
  }

  h1 {
    font-weight: 400;
    color: var(--dark);
    margin-bottom: 5rem;
  }
  span {
    font-style: italic;
    font-weight: 700;
    color: var(--blue);
  }
`;

const AllSearchResultsStyles = styled.div`
  text-align: center;
  display: grid;
  grid-gap: 3rem;
  justify-content: center;
  grid-template-columns: repeat(
    auto-fill,
    minmax(200px, 1fr)
  );
  @media (max-width: 500px) {
    grid-template-columns: repeat(
      auto-fill,
      minmax(135px, 1fr)
    );
  }
`;

export {
  AllSearchResultsStyles,
  SearchResultsContainerStyles,
};
