import React from 'react';
import RecipeSlider from '../../../components/recipe/RecipeSlider';
import Page from '../../../components/site/Page';

function RecipeBaking({ instructions, ingredients }) {
  return (
    <Page>
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

  return { props: { instructions, ingredients } };
}
