
import dynamic from "next/dynamic";
import Head from "next/head";
const RootLayouts = dynamic(() => import("@/components/Layouts/RootLayouts"));
const Banner = dynamic(() => import("@/components/Banner/Banner"));

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <Banner />
        <h1 className='text-center text-2xl p-5'>This is my home Page</h1>
      </div>
    </div>
  );
};

export default HomePage;



HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayouts>
      {page}
    </RootLayouts>
  )
};

