import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { ToastContainer } from 'react-toastify';

import HeadLine from './headline/HeadLine';
import EmailForm from './email-form/EmailForm';
import Map from './map/Map';
import { ContactsStyles } from './ContactsStyles';
import LoaderContainer from '../shared/loaders/loader-container/LoaderContainer';

const CONTACT_FORM_QUERY = gql`
  query CONTACT_FORM_QUERY {
    contact {
      id
      email: email_2
      headline: headline_head
      headlineText: headline_text
    }
  }
`;

export default function Contacts() {
  const { data, loading } = useQuery(CONTACT_FORM_QUERY);

  const emailTo = data?.contact?.email;
  const headline = data?.contact?.headline;
  const headlineText = data?.contact?.headlineText;

  if (loading)
    return (
      <ContactsStyles>
        {' '}
        <LoaderContainer height={'10rem'} />;
      </ContactsStyles>
    );

  return (
    <ContactsStyles>
      <ToastContainer
        position='bottom-left'
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        draggable
      />
      <HeadLine
        headline={headline}
        headlineText={headlineText}
      />
      <div className='container'>
        <EmailForm emailTo={emailTo} />
        <Map />
      </div>
    </ContactsStyles>
  );
}
