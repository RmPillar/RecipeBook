import React from 'react';

import Link from 'next/link';

import Page from '../../../components/site/Page';
import Hero from '../../../components/recipe/Hero';
import Ingredients from '../../../components/recipe/Ingredients';
import BtnBlock from '../../../components/btn/BtnBlock';

function SingleRecipe({ data }) {
  return (
    <Page dark={true}>
      <Hero data={data} />
      <Ingredients data={data.ingredients} />

      <Link href={`${data.recipe_id}/baking`} passHref>
        <BtnBlock
          label='Start Baking'
          classes='fixed bottom-0 right-0 mr-20 mb-20 xl-max:hidden'
        />
      </Link>
    </Page>
  );
}

export default SingleRecipe;

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
  const recipesRes = await fetch(
    `https://recipe-book-be.herokuapp.com/api/recipes/${id}`
  );
  const ingredientsRes = await fetch(
    `https://recipe-book-be.herokuapp.com/api/recipes/${id}/ingredients`
  );

  const recipeData = await recipesRes.json();
  const ingredientsData = await ingredientsRes.json();

  return { props: { data: { ...recipeData, ...ingredientsData } } };
}
