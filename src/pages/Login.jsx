import { Form } from "react-router-dom";
import FormInput from "../components/FormInput";
import { Link } from "react-router-dom";
import video from "../assets/video-bg.mp4";
function Login() {
  return (
    <div>
      <div className="h-screen grid place-items-center overflow-hidden ">
        <video
          src={video}
          autoPlay
          loop
          muted
          className="max-h-full max-w-full object-cover"
        />
        <Form className=" flex flex-col gap-y-2 absolute" method="post">
          <div className="card  p-8 bg-none items-center  ">
            <h2 className="text-center font-bold text-3xl mb-2 text-white">
             Login
            </h2>
            {/* input */}
            <FormInput type="email" label=" Email:" name="Email" />
            <FormInput type="password" label=" Password:" name="Password" />
            {/* button */}

            <button type="button" className="btn btn-primary w-full mt-6 text-xl ">
              Login
            </button>

            <button
              //   onClick={googleWithProvider}
              type="button"
              className="btn btn-secondary mt-4 w-full"
            >
              {/* <ImGoogle className="text-2xl" /> */}
              <span className="text-xl">Google</span>
            </button>
            <p className="text-center mt-3 text-white">
              Not a memeber yet ? 
              <Link to="/Register" className="capitalize text-cyan-500 ml-1">
                 Register
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
