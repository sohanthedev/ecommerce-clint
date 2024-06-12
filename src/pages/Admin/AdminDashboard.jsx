import AdminMenu from "../../components/layout/AdminMenu";
import Layout from "../../components/layout/Layout";


const AdminDashboard = () => {
    return (
        <Layout>
            <div className="grid grid-cols-6 gap-3">
                <div className="col-span-2">
                    <AdminMenu/>
                </div>
                <div className="col-span-4">
                content
                </div>
            </div>
        </Layout>
    );
};

export default AdminDashboard;