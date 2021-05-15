import Page from '../components/site/Page';
import Hero from '../components/global/Hero';
import RecipeList from '../components/home/RecipeList';

export default function Home({ data, recipes }) {
  return (
    <Page>
      <Hero data={data.hero} classes='mb-100 xl:mb-150' />
      <RecipeList recipes={recipes.recipes} />
    </Page>
  );
}

export async function getStaticProps({ req }) {
  let protocol = 'https:';
  let host = req ? req.headers.host : window.location.hostname;
  if (host.indexOf('localhost') > -1) {
    protocol = 'http:';
  }
  const recipesRes = await fetch(
    `https://recipe-book-be.herokuapp.com/api/recipes`
  );
  const dataRes = await fetch(`${protocol}//${host}/api/home`);

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
