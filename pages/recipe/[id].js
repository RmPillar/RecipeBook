import React from 'react';

import Page from '../../components/site/Page';
import Hero from '../../components/recipe/Hero';

function SingleRecipe({ data }) {
  return (
    <Page dark={true}>
      <Hero data={{ heading: data.name }} classes='mb-100 xl:mb-150' />
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
  const data = await recipesRes.json();

  return { props: { data } };
}
