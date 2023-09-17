import Footer from "../sheared/Footer";
import Navbar from "../sheared/Navbar";



const RootLayouts = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default RootLayouts;