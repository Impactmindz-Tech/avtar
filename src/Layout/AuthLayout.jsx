import React from 'react'
import Image from '../constant/Images'

const AuthLayout = ({ children }) => {
    return (
        <div className="w-full h-screen bg-[#fafafa] p-8">
            <div className="w-full h-full bg-white rounded-3xl p-8 flex gap-x-6 lg:h-auto">
                <div className='flex-1 flex items-center justify-center border border-blue-900 rounded-3xl lg:hidden'>
                    <img src={Image.auth_img} alt="" />
                </div>
                <div className="flex-1 self-center">{children}</div>
            </div>
        </div>
    )
}

export default AuthLayout