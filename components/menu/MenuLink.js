import Link from 'next/link';

import { useMenu } from '../../context/menuState';
import { formatUrlToRoute } from '../../helpers/formatUrl';

import MenuDropdown from './MenuDropdown';
import { MenuLinkStyles } from './MenuLinkStyles';

export default function MenuLink({ menuItem }) {
 

  return (
    <MenuLinkStyles>
      <Link
        href={{
          pathname: '/products/[items]',
          query: { items: `${formatUrlToRoute(menuItem.title)}` },
        }}
        passHref
      >
        <MenuDropdown
          dropDownMenuitem={menuItem.title}
          categories={menuItem.items_categories}
        />
      </Link>
    </MenuLinkStyles>
  );
}
