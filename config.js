// This is client side config only - don't put anything in here that shouldn't be public!
export const endpoint = 'http://localhost:1337/graphql';
export const prodEndpoint =
  process.env.NEXT_PUBLIC_API_URL || 'https://a2z-demo.herokuapp.com';
export const perPage = 4;
