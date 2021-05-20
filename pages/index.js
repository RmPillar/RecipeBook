import Link from 'next/link';

import Page from '../components/site/Page';
import Hero from '../components/home/Hero';
import RecipeList from '../components/home/RecipeList';

import SvgIcon from '../components/global/SvgIcon';

export default function Home({ data, recipes }) {
  return (
    <Page>
      <Hero data={data.hero} classes='mb-100 xl:mb-150' />
      <RecipeList recipes={recipes.recipes} />

      <Link href='/recipe/create'>
        <a className='w-75 h-75 rounded-full flex items-center justify-center bg-indigo-500 fixed bottom-0 right-0 mb-20 mr-20 z-10 text-white transition-transform duration-300 shadow-2xl transform hover:-translate-y-5'>
          <span className='w-30 block transform rotate-45'>
            <SvgIcon icon='close' width={1} height={1} />
          </span>
        </a>
      </Link>
    </Page>
  );
}

export async function getStaticProps(context) {
  const recipesRes = await fetch(
    `https://recipe-book-be.herokuapp.com/api/recipes`
  );

  const recipes = await recipesRes.json();
  const data = {
    hero: {
      heading: 'RecipeBook',
      tagline: 'All your baking needs in one simple place',
    },
  };

  if (!recipes) {
    return {
      notFound: true,
    };
  }

  return {
    props: { recipes, data },
  };
}
