import { Link } from "react-router-dom";
import bannerslider from "../../assets/7069577_3304452.jpg"
import { useContext } from "react";
import { AuthContext } from "../../pages/Private";
const Banner = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="hero min-h-screen bg-base-200 p-20">
  <div className="hero-content flex-col lg:flex-row gap-32">
    <img src={bannerslider} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Task Management</h1>
      <p className="py-6">
      You can Manage your daily task and you can easily change status of the task and the website is Completedly free of cost </p>      
      <h1 className="text-2xl font-bold"></h1>
                {!user && <Link to={"/Login"}>
                <button className="z-10 mt-6 btn btn-secondary">Let's Start</button>
                </Link>}
                {user && <button className="z-10 mt-6 btn btn-secondary">Let's Start</button>}
    </div>
  </div>
</div>
    );
};

export default Banner;

