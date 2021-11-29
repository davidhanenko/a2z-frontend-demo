import Head from 'next/head';

export default function AboutPage (props) {
  return <h1>About Page</h1>

}
  
  export async function getStaticProps(props) {
  let layout = 'main';
  return {
    props: {
     layout
    }
  }
}