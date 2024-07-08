import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Image from '../../constant/Images'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className='max-w-[50%] mx-auto'>
            <h1>AvatarWalk</h1>
            <div className='pt-10'>
                <div>
                    <label htmlFor="" className='label'>Username</label><br />
                    <input className='input' type="text" placeholder='Eg. Rohan Sharma' name="" id="" />
                </div>
                <div className='pt-4'>
                    <label htmlFor="" className='label'>Email</label><br />
                    <input className='input' type="text" placeholder='Eg. rohansharma@gmail.com' name="" id="" />
                </div>
                <div className='pt-4'>
                    <label htmlFor="" className='label'>Password</label><br />
                    <input className='input' type="text" placeholder='Eg. Ro12******' name="" id="" />
                </div>
                <div className='pt-4'>
                    <label htmlFor="" className='label'>Confirm Password</label><br />
                    <input className='input' type="text" placeholder='Eg. **********' name="" id="" />
                </div>
                <div className="flex items-center space-x-2 pt-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">By Signing up, You Agree to our <span className='font-semibold'>Privacy Policy</span> and <span className='font-semibold'>Terms of Services.</span></Label>
                </div>
                <Link to={'/auth/role'} className='block cursor-pointer w-full bg-primaryColor-900 p-4 text-center text-white mt-8 rounded-xl'>
                    <button>Sign Up</button>
                </Link>
                <div className='flex flex-col gap-3 pt-2'>
                    <p className='text-center'>Or</p>
                    <div className='flex items-center justify-center gap-3 cursor-pointer w-full bg-grey-300 p-4 text-center text-bg-primaryColor-900 rounded-xl'>
                        <img className='w-5 h-5' src={Image.google_img} alt="" />
                        <button className='font-semibold text-primaryColor-500'>Continue with Google</button>
                    </div>
                    <div className='pt-5 text-center'>
                        <p>Already have an account? <Link to={'/auth/login'} className='font-semibold'>Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp