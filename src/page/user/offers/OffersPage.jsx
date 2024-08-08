import TitleHeading from "@/components/Avatar/Heading/TitleHeading";
import { createOfferValidation } from "@/utills/formvalidation/FormValidation";
import { createOfferApi } from "@/utills/service/userSideService/OfferService";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CitySelect from "@/components/countryStateCity/CitySelect";
import CountrySelect from "@/components/countryStateCity/CountrySelect";
import StateSelect from "@/components/countryStateCity/StateSelect";
import { useState } from "react";
import toast from "react-hot-toast";

function Offers() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(createOfferValidation) });
  const onSubmit = async (formData) => {
    if (!selectedCountry) {
      return toast.error("Please Select Country");
    }
    const id = "66b0b88557122bfd0f1f62f0";
    let body = {
      ...formData,
      Country: selectedCountry.name,
      City: selectedCity.name,
      State: selectedState.name,
    };
    try {
      const response = await createOfferApi(id, body);
      console.log(response);
      if (response?.isSuccess) {
        toast.success(response?.message);
        navigate("/user/offer-success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <TitleHeading title={"Create Offer"} />
      <div className="forms">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="my-2">
            <label htmlFor="Title" className="font-semibold">
              Title
            </label>
            <input type="text" name="Title" id="Title" placeholder="Eg. shikara hotel, india" className="input my-2" {...register("Title")} />
            <p className="text-[red]">{errors?.Title?.message}</p>
          </div>

          <div className="my-2">
            <label htmlFor="price" className="font-semibold">
              Price
            </label>
            <input type="number" name="price" id="price" placeholder="Eg. $10" className="input my-2" {...register("price")} />
            <p className="text-[red]">{errors?.price?.message}</p>
          </div>

          <div className="my-2">
            <label htmlFor="Minutes" className="font-semibold">
              Minutes
            </label>
            <input type="number" name="Minutes" id="Minutes" placeholder="Eg. 15" className="input my-2" {...register("Minutes")} />
            <p className="text-[red]">{errors?.Minutes?.message}</p>
          </div>

          <div className="my-2">
            <CountrySelect setSelectedCountry={setSelectedCountry} selectedCountry={selectedCountry} />
          </div>

          <div className="my-2">
            <StateSelect selectedCountry={selectedCountry} selectedState={selectedState} setSelectedState={setSelectedState} />
          </div>

          <div className="my-2">
            <CitySelect selectedCountry={selectedCountry} selectedState={selectedState} selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
          </div>

          <div className="my-2">
            <label htmlFor="ZipCode" className="font-semibold">
              Zipcode
            </label>
            <input type="number" name="ZipCode" id="ZipCode" placeholder="93940" className="input my-2" {...register("ZipCode")} />
            <p className="text-[red]">{errors?.ZipCode?.message}</p>
          </div>

          <div className="my-2">
            <label htmlFor="Notes" className="font-semibold">
              Notes
            </label>
            <textarea name="Notes" rows={5} id="Notes" className="input my-2 resize-none" placeholder="Tell the avatar what tour would you like" {...register("Notes")}></textarea>
            <p className="text-[red]">{errors?.Notes?.message}</p>
          </div>

          <div className="my-2">
            <button className="w-full my-6 rounded-md bottom-1 m-auto left-0 right-0 p-3 cursor-pointer bg-backgroundFill-900 text-white text-center">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Offers;
