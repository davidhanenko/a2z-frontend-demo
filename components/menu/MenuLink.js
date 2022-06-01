import Link from 'next/link';

import { formatUrlToRoute } from '../../helpers/formatUrl';

import MenuDropdown from './MenuDropdown';
import { MenuLinkStyles } from './MenuLinkStyles';

export default function MenuLink({ service, menuItem }) {
  return (
    <MenuLinkStyles>
      <Link
        href={{
          pathname: `/${service}/[items]`,
          query: {
            items: `${formatUrlToRoute(menuItem.title)}`,
          },
        }}
        passHref
      >
        <MenuDropdown
          dropDownMenuitem={menuItem.title}
          categories={menuItem.items_categories}
          service={service}
        />
      </Link>
    </MenuLinkStyles>
  );
}
