import Contacts from '../components/contacts/Contacts';

export default function MainPage(props) {
  return <Contacts />;
}

export async function getServerSideProps(props) {
  let layout = 'main';

  return {
    props: {
      layout,
    },
  };
}
