import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Image from '../../constant/Images'
import { Link } from 'react-router-dom'
import { app } from '@/FirebaseConfig/config';;
import { getAuth, signInWithPopup, GoogleAuthProvider ,sendSignInLinkToEmail,isSignInWithEmailLink, signInWithEmailLink} from "firebase/auth";
import { useNavigate } from 'react-router-dom'

const auth = getAuth(app);


const provider = new GoogleAuthProvider();
const Login = () => {
  const navigate = useNavigate();
  const signupgoogle =()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log(user);
    navigate('/user');
   
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}



  return (
    <div className='max-w-[50%] mx-auto'>
      <h1>AvatarWalk</h1>
      <div className='pt-10'>
        <div>
          <label htmlFor="" className='label'>Username</label><br />
          <input className='input' type="text" placeholder='Eg. Rohan Sharma' name="" id="" />
        </div>
        <div className='pt-4'>
          <label htmlFor="" className='label'>Password</label><br />
          <input className='input' type="text" placeholder='Eg. Ro12******' name="" id="" />
        </div>
        <p className='text-right pt-2 text-sm'>Forgot Password?</p>
        <div className="flex items-center space-x-2 pt-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">By Signing up, You Agree to our <span className='font-semibold'>Privacy Policy</span> and <span className='font-semibold'>Terms of Services.</span></Label>
        </div>
        <div className='cursor-pointer w-full bg-primaryColor-900 p-4 text-center text-white mt-8 rounded-xl'>
          <button>Sign In</button>
          
        </div>
        <div className='flex flex-col gap-3 pt-2'>
          <p className='text-center'>Or</p>
          <div className='flex items-center justify-center gap-3 cursor-pointer w-full bg-grey-300 p-4 text-center text-bg-primaryColor-900 rounded-xl'>
            <img className='w-5 h-5' src={Image.mail_img} alt="" />
            <button className='font-semibold text-primaryColor-500'>Continue with Email</button>
          </div>
          <div className='flex items-center justify-center gap-3 cursor-pointer w-full bg-grey-300 p-4 text-center text-bg-primaryColor-900 rounded-xl'>
            <img className='w-5 h-5' src={Image.google_img} alt="" />
            <button onClick={signupgoogle} className='font-semibold text-primaryColor-500'>Continue with Google</button>
          </div>
          <div className='flex items-center justify-center gap-3 cursor-pointer w-full bg-grey-300 p-4 text-center text-bg-primaryColor-900 rounded-xl'>
            <img className='w-5 h-5' src={Image.iphone_icon} alt="" />
            <button className='font-semibold text-primaryColor-500'>Continue with Apple</button>
          </div>
          <div className='pt-5 text-center'>
            <p>Don’t have an account? <Link to={"/auth/signup"} className='font-semibold'> Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login