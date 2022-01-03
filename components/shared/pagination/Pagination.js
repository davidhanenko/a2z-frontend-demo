import PagesControl from './PagesControl';
import ItemsPerPageSelect from './ItemsPerPageSelect';

import ItemsSortSelect from './ItemsSortSelect';
import { PaginationContainerStyles } from './PaginationStyles';

import {PER_PAGE_OPRIONS} from '../../../config';

export default function Pagination({
  page,
  currentUrl,
  itemsCount,
}) {
  return (
    <PaginationContainerStyles>
      <div>
        <ItemsPerPageSelect currentUrl={currentUrl} />
        <ItemsSortSelect SORTING_OPTIONS={PER_PAGE_OPRIONS} />
      </div>
      <PagesControl
        page={page}
        currentUrl={currentUrl}
        itemsCount={itemsCount}
      />
    </PaginationContainerStyles>
  );
}
