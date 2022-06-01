import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { FooterContactsStyles } from './FooterStyles';
import LoaderContainer from '../../../shared/loaders/loader-container/LoaderContainer';

const CONTACTS_QUERY = gql`
  query CONTACTS_QUERY {
    contact {
      id
      phone1: telephone_1
      addressLine1: address_line1
      addressLine2: address_line2
      email
      hours
    }
  }
`;

export default function FooterContacts() {

  const { data, loading } = useQuery(CONTACTS_QUERY);


if (loading)
  return (
    <FooterContactsStyles>
      {' '}
      <LoaderContainer height={'5rem'} />;
    </FooterContactsStyles>
  );

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
