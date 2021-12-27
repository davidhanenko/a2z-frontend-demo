import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Link from 'next/link';

import { FooterCategoriesStyles, LinkStyles } from './FooterStyles';

const SERVICES_QUERY = gql`
  query SERVICES_QUERY {
    services {
      categoryTitle: service
      id
    }
  }
`;

export default function FooterCategories() {
  const { data, error, loading } = useQuery(SERVICES_QUERY);
  const services = data?.services;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <FooterCategoriesStyles>
      <h4>Categories</h4>
      <ul>
        {services.map(service => (
          <LinkStyles key={service.id} className='footer-link'>
            <Link href={`/${service.categoryTitle}`}>
              {service.categoryTitle}
            </Link>
          </LinkStyles>
        ))}
      </ul>
    </FooterCategoriesStyles>
  );
}
