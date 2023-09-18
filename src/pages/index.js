import dynamic from "next/dynamic";
const RootLayouts = dynamic(() => import("@/components/Layouts/RootLayouts"));
const HomePage = () => {
  return (
    <div >

      <div >
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

