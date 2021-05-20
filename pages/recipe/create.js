import React from 'react';
import Hero from '../../components/global/Hero';
import CreateForm from '../../components/recipe/CreateForm';
import Page from '../../components/site/Page';

function CreatePage({ data }) {
  return (
    <Page dark={true}>
      <Hero data={data.hero} />
      <CreateForm />
    </Page>
  );
}

export default CreatePage;

export async function getStaticProps() {
  const data = {
    hero: {
      heading: 'Create A Recipe',
    },
  };

  return {
    props: { data },
  };
}
