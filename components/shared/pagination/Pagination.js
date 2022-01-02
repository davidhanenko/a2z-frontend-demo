
import PagesControl from './PagesControl';
import ItemsPerPageSelect from './ItemsPerPageSelect';

import {
  PaginationContainerStyles,
} from './PaginationStyles';


export default function Pagination({
  page,
  currentUrl,
  itemsCount,
}) {

  return (
    <PaginationContainerStyles>
      <ItemsPerPageSelect currentUrl={currentUrl} />
      <PagesControl
        page={page}
        currentUrl={currentUrl}
        itemsCount={itemsCount}
      />
    </PaginationContainerStyles>
  );
}
