import PagesControl from './PagesControl';
import ItemsPerPageSelect from './ItemsPerPageSelect';

import ItemsSortSelect from './ItemsSortSelect';
import { PaginationContainerStyles } from './PaginationStyles';


export default function Pagination({
  page,
  currentUrl,
  itemsCount,
}) {
  return (
    <PaginationContainerStyles>
      <div>
        <ItemsPerPageSelect page={page}/>
        <ItemsSortSelect />
      </div>
      <PagesControl
        page={page}
        currentUrl={currentUrl}
        itemsCount={itemsCount}
      />
    </PaginationContainerStyles>
  );
}
