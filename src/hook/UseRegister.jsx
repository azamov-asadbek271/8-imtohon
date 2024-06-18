import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/firebaseConfig";
import { login } from "../features/user/UserConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";

function UseRegister() {
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();

  const googleWithProvider = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success("welcom");
        dispatch(login(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const register = (data) => {
    createUserWithEmailAndPassword(auth, data.Email, data.Password)
      .then(async (userCredential) => {
        await updateProfile(auth.currentUser, {
          photoURL: data.Img,
          displayName: data.Name,
        });
        toast.success("welcome")
        dispatch(login(userCredential.user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.success(errorMessage);
      });
  };

  return { googleWithProvider, register };
}

export { UseRegister };
