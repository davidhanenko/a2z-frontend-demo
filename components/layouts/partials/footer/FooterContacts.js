import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { FooterContactsStyles } from './FooterStyles';

const CONTACTS_QUERY = gql`
  query CONTACTS_QUERY {
    contact {
      phone1: telephone_1
      addressLine1: address_line1
      addressLine2: address_line2
      email
      hours
    }
  }
`;

export default function FooterContacts() {

  const { data, error, loading } = useQuery(CONTACTS_QUERY);


  if (error) return <p>Error: {error.message}</p>;
  if (loading) return <p>Loading...</p>;

  

  return (
    <FooterContactsStyles>
      <h4>Contacts</h4>

      <p className='phone'>{data?.contact?.phone1}</p>
      <p className='email'>{data?.contact?.email}</p>

      <hr />

      <p className='address'>{data?.contact?.addressLine1}</p>
      <p className='address'>{data?.contact?.addressLine2}</p>

      <p className='hours'>{data?.contact?.hours}</p>
    </FooterContactsStyles>
  );
}
