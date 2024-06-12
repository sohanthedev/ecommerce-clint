import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";


const PageNotFound = () => {
    return (
        <Layout>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl text-center font-bold my-4">404</h1>
                <h2 className="text-5xl text-center font-bold my-4">Page Not Found</h2>
                <Link to="/" className="text-xl p-4 border w-[140px]">Go to back</Link>
          </div>
        </Layout>
    );
};

export default PageNotFound;