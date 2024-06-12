import Layout from "../components/layout/Layout";
import { useAuth } from "../context/auth";

const Home = () => {
    const [auth, setAuth] = useAuth();
    return (
        <Layout>
            <pre>{JSON.stringify(auth, null, 4)}</pre>
            <h1>Home</h1>
        </Layout>
    );
};

export default Home;