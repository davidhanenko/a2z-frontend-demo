// This is client side config only - don't put anything in here that shouldn't be public!
export const DEV_ENDPOINT= 'http://localhost:1337/graphql';
export const PROD_ENDPOINT =
  `${process.env.NEXT_PUBLIC_API_URL}/graphql`;

export const PER_PAGE_DEFAULT = 2;
export const SORT_ITEMS_BY_DEFAULT = 'item_title:asc';

export const TOGGLE_WIDTH = 850; 


// demo backend url
  // https://backend-a2z.herokuapp.com/graphql