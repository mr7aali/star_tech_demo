import dynamic from "next/dynamic";

const DynamicNav = dynamic(() => import("../sheared/Navbar"));
const DynamicFooter = dynamic(() => import("../sheared/Footer"));
const RootLayouts = ({ children }) => {
  return (
    <div>
      <DynamicNav />
      {children}
      <DynamicFooter />
    </div>
  );
};

export default RootLayouts;
