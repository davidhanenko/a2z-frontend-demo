import Main from '../components/Main/Main';

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
