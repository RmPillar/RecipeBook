import Page from '../components/site/Page';

import HeroBase from '../assets/svg/hero-base.svg';

export default function Home() {
  return (
    <Page>
      <div className='w-screen h-screen bg-indigo-500 relative'>
        <span className='w-screen absolute bottom-0 text-white'>
          <HeroBase />
        </span>
      </div>
    </Page>
  );
}
