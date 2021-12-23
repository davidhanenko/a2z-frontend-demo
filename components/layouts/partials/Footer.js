import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Link from 'next/link';

import { MdOutlineFacebook } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';

import { FooterStyles } from './FooterStyles';

const SERVICES_QUERY = gql`
  query SERVICES_QUERY {
    services {
      categoryTitle: service
      id
    }
  }
`;

export default function Footer() {

  const {data, error, loading} = useQuery(SERVICES_QUERY);
  const services = data?.services;


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <FooterStyles>
      <div className='footer-container'>
        <div className='footer-categories'>
          <h4>Categories</h4>
          {services.map(service => (
            <Link key={service.id} href={`/${service.categoryTitle}`}>
              <p>{service.categoryTitle}</p>
            </Link>
          ))}
        </div>
        <div className='footer-links'>
          <h4>Links</h4>
          <p>link1</p>
          <p>link2</p>
          <p>link3</p>
        </div>
        <div className='footer-contacts'>
          <h4>Contacts</h4>
          <p>+1 999-123-4567</p>
          <p>a2z.gmail.com</p>

          <hr />

          <p>
            1234 Some street,
            <br /> New York, NY, US, 111111
          </p>
        </div>
      </div>
      <div className='footer-social'>
        <MdOutlineFacebook fill={'orange'} />
        <RiInstagramFill fill={'orange'} />
      </div>
    </FooterStyles>
  );
}
