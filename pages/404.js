import Page from '../components/site/Page';

export default function Custom404() {
  return (
    <Page>
      <div className='h-screen w-screen bg-teal-500 flex flex-col items-center justify-center'>
        <div className='container'>
          <h1 className='text-5xl lg:text-8xl xl:text-9xl font-extrabold text-white xl:tracking-tight leading-tight'>
            404 - Page Not Found
          </h1>
        </div>
      </div>
    </Page>
  );
}
