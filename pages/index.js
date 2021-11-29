import Main from '../components/main/Main';

export default function MainPage(props) {
  return <Main />;
}

export async function getStaticProps(props) {
  let layout = 'main';

  return {
    props: {
      layout,
    },
  };
}
