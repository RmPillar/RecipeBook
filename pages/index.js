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

export async function getStaticProps(context) {
  const recipesRes = await fetch(
    `https://recipe-book-be.herokuapp.com/api/recipes`
  );
  console.log(process.env.VERCEL_URL);
  const dataRes = await fetch(
    `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/home`
  );

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
