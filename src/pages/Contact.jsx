import Layout from "../components/layout/Layout";
import { Mail,Phone } from 'lucide-react';

const Contact = () => {
    return (
     <Layout>
        
        <div className="w-[80%] mx-auto my-12"> 
                <div className="flex gap-10">
                    <div className="w-1/2">
                        <img src="/public/img/istockphoto-1331493599-1024x1024.jpg" alt="" />
                    </div>
                    <div className="w-1/2 flex flex-col  justify-center">
                        <h2 className="w-[60%] text-xl p-4 bg-slate-700 text-center">Contact Us </h2>
                        <div className="flex my-4">
                            <Mail />
                            <p>sohandev22@gmail.com</p>
                        </div>
                        <div className="flex my-4">
                            <Phone />
                            <p>+8801842330687</p>
                        </div>
                    </div>
                </div>
        </div>
     </Layout>
    );
};

export default Contact;