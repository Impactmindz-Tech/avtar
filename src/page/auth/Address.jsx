import { addAddressApi } from "@/utills/service/authService";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CitySelect, CountrySelect, StateSelect, LanguageSelect } from "react-country-state-city";
import { getLocalStorage } from "@/utills/LocalStorageUtills";

const Address = () => {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  const [cityId, setCityId] = useState(0);
  const [zipcode, setZipCode] = useState("");
  const navigate = useNavigate();

  const addAddress = async () => {
    const id = getLocalStorage("user_id");
    const data = {
      country: countryid.name,
      State: stateid.name,
      city: cityId.name,
      zipCode: zipcode,
    };

    try {
      const response = await addAddressApi(id, data);
      if (response?.isSuccess) {
        navigate("/user/dashboard");
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[50%] mx-auto ">
      <div className="py-1 ">{/* <img src={Images.Logo} alt={Images.Logo} className="max-w-[120px]" /> */}</div>

      <div className="flex flex-col gap-2 my-3 gap-y-4 relative ">
        <h1 className="text-textMainColor-900 font-medium ">Address</h1>

        {/* <form action=""> */}
        <div className="flex flex-col gap-2 my-3">
          <div className="flex flex-col gap-y-1">
            <label htmlFor="country" className="text-primaryColor-900">
              Country
            </label>
            <CountrySelect
              onChange={(e) => {
                setCountryid(e);
              }}
              placeHolder="Select Country"
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <label htmlFor="country" className="text-primaryColor-900">
              State
            </label>
            <StateSelect
              countryid={countryid.id}
              onChange={(e) => {
                setstateid(e);
              }}
              placeHolder="Select State"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="country" className="text-primaryColor-900">
              City
            </label>
            <CitySelect
              countryid={countryid.id}
              stateid={stateid.id}
              onChange={(e) => {
                console.log(setCityId(e));
              }}
              placeHolder="Select City"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="zipcode" className="text-primaryColor-900">
              Zip Code
            </label>
            <input type="number" name="zipcode" onChange={(e) => setZipCode(e.target.value)} id="zipcode" className="input" placeholder="93940" />
          </div>
          <div className="flex gap-2 my-2">
            <span>{/* <FaLocationCrosshairs className="cursor-pointer mt-1" /> */}</span>
            <p className="cursor-pointer">Use current location</p>
          </div>
        </div>

        <p className="w-full cursor-pointer text-center mt-20 my-2 underline text-primaryColor-900">
          <Link to="/user/home"> Skip</Link>
        </p>
        <div onClick={addAddress}>
          {" "}
          <button className="cursor-pointer w-full bg-primaryColor-900 p-4 text-center text-white mt-8 rounded-xl">Done</button>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Address;
