import BlackBottomButton from "@/components/Button/BlackBottomButton";
import HeaderBack from "@/components/HeaderBack";
import Images from "@/constant/Images";
import { useState } from "react";

const EditProfile = () => {
  const [image, setImage] = useState(Images.profileUser);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="container">
      <HeaderBack link={"/user/profile"} text={"Edit Profile"} />
      <div className="max-w-2xl m-auto my-2">
        <div className="flex flex-col items-center mb-4">
          <div className="relative">
            <img src={image} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-dotted border-white" />
            <input type="file" id="Profile" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={handleImageChange} />
            <div className="absolute bottom-0 right-0 rounded-full p-2 cameraBoxShadow bg-backgroundFill-900">
              <label htmlFor="Profile">
                <img src={Images.whiteCamera} alt="whiteCamera" className="cursor-pointer" />
              </label>
            </div>
          </div>
        </div>
        <form>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input className="inputGrayColor" id="firstName" type="text" placeholder="First Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input className="inputGrayColor" id="lastName" type="text" placeholder="Last Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
              Mobile Number
            </label>
            <div className="flex">
              <select className="shadow appearance-none border rounded-l w-16 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option>+1</option>
                <option>+91</option>
                {/* Add more options as needed */}
              </select>
              <input
                className="shadow appearance-none border rounded-r w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mobileNumber"
                type="text"
                placeholder="98765 43210"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
              Date of Birth
            </label>
            <div className="relative">
              <input className="inputGrayColor" id="dob" type="text" placeholder="DD/MM/YYYY" />
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <img src={Images.calendarIcon} alt="calendarIcon" className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
              Country
            </label>
            <select className="inputGrayColor" id="country">
              <option>USA</option>
              <option>India</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
              City
            </label>
            <select className="inputGrayColor" id="city">
              <option>California</option>
              <option>New York</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <BlackBottomButton link={"/user/profile"} text={"Save"} />
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
