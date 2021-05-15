import Link from 'next/link';
import React from 'react';
import SvgIcon from '../../../components/global/SvgIcon';
import RecipeSlider from '../../../components/recipe/RecipeSlider';
import Page from '../../../components/site/Page';

function RecipeBaking({ instructions, ingredients, id }) {
  return (
    <Page>
      <Link href={`/recipe/${id}`}>
        <a className='w-50 h-50 rounded-full flex items-center justify-center bg-white absolute top-0 left-0 mt-20 ml-20 z-10 text-indigo-500 hover:text-gray-900 transition-colors duration-500'>
          <span className='w-25 block'>
            <SvgIcon icon='close' width={1} height={1} />
          </span>
        </a>
      </Link>
      <RecipeSlider data={instructions} />
    </Page>
  );
}

export default RecipeBaking;

export async function getStaticPaths() {
  const recipesRes = await fetch(
    `https://recipe-book-be.herokuapp.com/api/recipes`
  );

  const { recipes } = await recipesRes.json();

  const paths = recipes.map(({ recipe_id }) => ({
    params: { id: recipe_id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { id } }) {
  const instructionRes = await fetch(
    `https://recipe-book-be.herokuapp.com/api/recipes/${id}/instructions`
  );
  const ingredientsRes = await fetch(
    `https://recipe-book-be.herokuapp.com/api/recipes/${id}/ingredients`
  );

  const instructions = await instructionRes.json();
  const ingredients = await ingredientsRes.json();

  return { props: { instructions, ingredients, id } };
}
