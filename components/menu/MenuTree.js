import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect } from 'react/cjs/react.development';

import { formatUrlToDbName } from '../../helpers/formatUrl';
import { useMenu } from '../../context/menuState';

import { MenuTreeStyles, TreeNodeStyles } from './MenuTreeStyles';


export default function MenuTree() {
  // const { isActive, setIsActive } = useMenu();

  const router = useRouter();
  // get route
  const routesArr = router.asPath.split('/').slice(1);

  // remove url page query from last element of route 
  routesArr[routesArr.length - 1] =
    routesArr[routesArr.length - 1].split('?')[0];

    // create link for each route node
  const getRoute = (r, i) => r.slice(0, i + 1).join('/');


  return (
    <MenuTreeStyles>
      {routesArr.map((node, index, arr) => (
        <TreeNode key={index} node={node} route={getRoute(arr, index)} />
      ))}
    </MenuTreeStyles>
  );
}

function TreeNode({ node, route }) {
  return (
    <TreeNodeStyles>
      <Link href={`/${route}`}>
        <a>{formatUrlToDbName(node)}</a>
      </Link>
    </TreeNodeStyles>
  );
}
