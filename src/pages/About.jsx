import Layout from "../components/layout/Layout";

const About = () => {
    return (
   
            <Layout title={'this is about page'}>
            <div className="w-[80%] mx-auto my-12">
                <div className="flex gap-10">
                    <div className="w-1/2">
                        <img src="/public/img/pexels-diohasbi-3280130.jpg" alt="" />
                    </div>
                    <div className="w-1/2 flex flex-col  justify-center">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quam dignissimos aut, omnis consequuntur ipsa, possimus blanditiis neque suscipit accusantium voluptas dolorem, soluta dolor magni error sapiente mollitia temporibus cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, obcaecati. Eos molestias laudantium sunt inventore, aliquam est deleniti praesentium excepturi ut incidunt commodi unde! Aliquid non quia nisi adipisci libero.</p>
                    </div>
                </div>
            </div>
            </Layout>
      
    );
};

export default About;