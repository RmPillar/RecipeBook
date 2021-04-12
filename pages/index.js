import Page from '../components/site/Page';
import Hero from '../components/global/Hero';

export default function Home({ data, recipes }) {
  return (
    <Page>
      <Hero data={data.hero} />
    </Page>
  );
}

export async function getStaticProps(context) {
  const recipesRes = await fetch(
    `https://recipe-book-be.herokuapp.com/api/recipes`
  );
  const dataRes = await fetch('http://localhost:3000/api/home');

  const recipes = await recipesRes.json();
  const data = await dataRes.json();

  if (!recipes) {
    return {
      notFound: true,
    };
  }

  return {
    props: { recipes, data },
  };
}
