import { Form } from "react-router-dom";
import FormInput from "../components/FormInput";
import { Link,useActionData, } from "react-router-dom";
import video from "../assets/video-bg.mp4"
import { UseRegister } from "../hook/UseRegister";
import { FcGoogle } from "react-icons/fc";
import { useEffect } from "react";

// actions
export const action = async ({ request }) => {
  let formData = await request.formData();
  let Name = formData.get("Name");
  let Email = formData.get("Email");
  let Password = formData.get("Password");
  let Img = formData.get("Image");
  console.log(Name, Email, Password, Img);
  return { Name, Email, Password,Img };
};


function Register() {
    const { googleWithProvider, register } = UseRegister();
    const data = useActionData();
    console.log(data);
    useEffect(() => {
      if (data) {
        register(data);
      }
    }, [data]);
  return (
    <div>
      <div className="h-screen grid place-items-center overflow-hidden ">
        <video
          src={video}
          autoPlay
          loop
          muted
          className="h-full max-w-full object-cover"
        />
        <Form className=" flex flex-col gap-y-2 absolute" method="post">
          <div className="card  p-8 bg-none items-center  ">
            <h2 className="text-center font-bold text-3xl mb-2 text-white">
              Register
            </h2>
            {/* input */}
            <FormInput type="text" label="User Name:" name="Name" />
            <FormInput type="url" label=" Photo Url:" name="Image" />
            <FormInput type="email" label=" Email:" name="Email" />
            <FormInput type="password" label=" Password:" name="Password" />
            {/* button */}

            <button  className="btn btn-primary w-full mt-6 ">
              Register
            </button>

            <button
                onClick={googleWithProvider}
              type="button"
              className="btn btn-secondary mt-4 w-full"
            >
          
              <span className="text-xl">Google</span>
            </button>
            <p className="text-center mt-3 text-white">
              Not a memeber yet ?
              <Link to="/login" className="capitalize text-cyan-500">
                Login
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register