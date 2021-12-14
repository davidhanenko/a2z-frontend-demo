// This is client side config only - don't put anything in here that shouldn't be public!
export const endpoint = 'http://localhost:1337/graphql';
export const prodEndpoint =
  process.env.NEXT_PUBLIC_API_URL ||
  'https://a2z-backend-demo.herokuapp.com/graphql';
export const perPage = 4;
