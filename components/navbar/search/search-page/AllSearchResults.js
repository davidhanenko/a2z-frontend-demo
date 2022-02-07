import { AllSearchResultsStyles } from './AllSearchResultsStyles';

export default function AllSearchResults({
  foundItems,
  term,
}) {
  return (
    <AllSearchResultsStyles>
  <h1>All items found for {term}</h1>
    </AllSearchResultsStyles>
  );
}
