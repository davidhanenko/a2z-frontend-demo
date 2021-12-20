import Main from '../components/main/Main';

export default function MainPage(props) {
  return <Main />;
}

export async function getServerSideProps(props) {
  let layout = 'main';

  return {
    props: {
      layout,
    },
  };
}
