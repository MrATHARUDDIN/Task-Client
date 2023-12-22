import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../pages/Private";

const People = () => {
    const {user} = useContext(AuthContext)
  return (
    <div>
      <div
        className="hero min-h-screen mt-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/7g3mXTL/nathan-da-silva-FO7k-Um-BYVi0-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Task management</h1>
            <p className="mb-5">
              This website is for the Devoployer who can easily Manten his task
            </p>
            {!user && <Link to={"/Login"}>
                <button className="z-10 mt-6 btn btn-secondary">Let's Start</button>
                </Link>}
                {user && <Link to={"/"}>
                <button className="z-10 mt-6 btn btn-secondary">Let's Start</button>
                </Link>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
