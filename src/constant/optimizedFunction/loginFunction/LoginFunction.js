import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "@/FirebaseConfig/config"; // Adjust path based on your project

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signupgoogle = (navigate) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      console.log(user);
      navigate("/user/home");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData?.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error(errorMessage); // Example: Log error message
      // Handle errors appropriately (e.g., show error message to the user)
    });
};
