import React from 'react'
import { Link } from 'react-router-dom'

const Address = () => {
    return (
        <div className="w-[50%] mx-auto ">
            <div className="py-1 ">
                {/* <img src={Images.Logo} alt={Images.Logo} className="max-w-[120px]" /> */}
            </div>

            <div className="flex flex-col gap-2 my-3 gap-y-4 relative ">
                <h1 className="text-textMainColor-900 font-medium ">Address</h1>

                <form action="">
                    <div className="flex flex-col gap-2 my-3">
                        <div className="flex flex-col gap-y-1">
                            <label htmlFor="country" className="text-primaryColor-900">
                                Country
                            </label>
                            <select name="country" id="country" className="input pr-3">
                                <option value="USA">USA</option>
                                <option value="USA">INDIA</option>
                                <option value="AUSTRALIA">AUSTRALIA</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-y-1">
                            <label htmlFor="country" className="text-primaryColor-900">
                                City
                            </label>
                            <select name="country" id="country" className="input pr-3">
                                <option value="California">California</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <label htmlFor="zipcode" className="text-primaryColor-900">
                                Zip Code
                            </label>
                            <input
                                type="number"
                                name="zipcode"
                                id="zipcode"
                                className="input"
                                placeholder="93940"
                            />
                        </div>
                        <div className="flex gap-2 my-2">
                            <span>
                                {/* <FaLocationCrosshairs className="cursor-pointer mt-1" /> */}
                            </span>
                            <p className="cursor-pointer">Use current location</p>
                        </div>
                    </div>

                    <p className="w-full cursor-pointer text-center mt-20 my-2 underline text-primaryColor-900">
                        <Link to="/user/home"> Skip</Link>
                    </p>
                    <Link to="/user/home"> <button className="cursor-pointer w-full bg-primaryColor-900 p-4 text-center text-white mt-8 rounded-xl">Done</button></Link>
                </form>
            </div>
        </div>
    )
}

export default Address