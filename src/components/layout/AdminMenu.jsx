import { Link } from "react-router-dom";


const AdminMenu = () => {
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold">Admin panel</h1>
            <Link to='/dashboard/admin/create-category'> <a>Create Category</a> </Link>
            <Link to='/dashboard/admin/create-product'> <a>Create Product</a> </Link>
          
            <Link to='/dashboard/admin/create-user'> <a>Users</a> </Link>
          
        </div>
    );
};

export default AdminMenu;