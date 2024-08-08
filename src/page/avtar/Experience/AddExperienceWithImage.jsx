import EditExperienceCard from "@/components/Avatar/Card/EditExperienceCard";
import TitleHeading from "@/components/Avatar/Heading/TitleHeading";
import HeaderBack from "@/components/HeaderBack";
import Images from "@/constant/Images";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addExperinceValidation } from "@/utills/formvalidation/FormValidation";
import CountrySelect from "@/components/countryStateCity/CountrySelect";
import StateSelect from "@/components/countryStateCity/StateSelect";
import CitySelect from "@/components/countryStateCity/CitySelect";
import { AddexperienceApi } from "@/utills/service/avtarService/AddExperienceService";
import toast from "react-hot-toast";

function AddExperienceWithImagePage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [otherSelectedFiles, setOtherSelectedFiles] = useState([]);
  const [imageURL, setImageURL] = useState(null);
  const [otherImageURLs, setOtherImageURLs] = useState([]);
  const mainImage = useRef(null);
  const otherImage = useRef(null);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addExperinceValidation) });

  const handleMainImageClick = () => {
    if (mainImage.current) {
      mainImage.current.click();
    }
  };

  const handleOtherImageClick = () => {
    if (otherImage.current) {
      otherImage.current.click();
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setImageURL(URL.createObjectURL(file));
    }
  };

  const handleOtherFileChange = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setOtherSelectedFiles((prevFiles) => [...prevFiles, ...files]);
      setOtherImageURLs((prevURLs) => [...prevURLs, ...files.map((file) => URL.createObjectURL(file))]);
    }
  };

  const handleRemoveMainImage = () => {
    setImageURL(null);
    setSelectedFile(null);
  };

  const handleRemoveOtherImage = (index) => {
    const updatedFiles = otherSelectedFiles.filter((_, i) => i !== index);
    const updatedURLs = otherImageURLs.filter((_, i) => i !== index);
    setOtherSelectedFiles(updatedFiles);
    setOtherImageURLs(updatedURLs);
  };

  // console.log(otherSelectedFiles);
  const onSubmit = async (data) => {
    if(!selectedFile){
      toast.error("Please Select Image")
    }
    const formData = new FormData();

    // Append text fields
    formData.append("ExperienceName", data?.ExperienceName);
    formData.append("AmountsperMinute", data?.AmountsperMinute);
    formData.append("notesForUser", data?.notesForUser);
    formData.append("country", selectedCountry.name);
    formData.append("State", selectedState.name);
    formData.append("city", selectedCity.name);
    formData.append("file", selectedFile);
    formData.append("about", "selectedFile");
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    // if (selectedFile) {
    //   formData.append("mainImage", selectedFile);
    // }

    // // Append other images
    // otherSelectedFiles.forEach((file) => {
    //   formData.append("otherImages[]", file);
    // });
    // console.log(formData);

    try {
      const response = await AddexperienceApi(formData);
      console.log("API response: ", response);
    } catch (error) {
      console.error("API error: ", error);
    }
  };

  return (
    <div>
      <HeaderBack link="/avatar/add-new-experience" text={"Add Experience"} />
      <TitleHeading title={"Add Experience Images"} />

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex justify-between my-4 flex-wrap h-[300px]">
          <div className="w-[49%] relative">
            <div className="absolute top-2 right-2 flex gap-2">
              <div className="bg-white p-4 sm:p-2 rounded-md BoxShadowLessRounded">
                <img src={Images.rotate} alt="edit" className="cursor-pointer w-6 h-6" />
              </div>
              <div className="bg-white p-4 sm:p-2 rounded-md BoxShadowLessRounded">
                <img onClick={handleRemoveMainImage} src={Images.close} alt="remove" className="cursor-pointer w-6 h-6" />
              </div>
            </div>

            {!imageURL ? (
              <div onClick={handleMainImageClick} className="border rounded-lg w-full h-full bg-[#f2f2f2] border-[#e2e2e2] flex justify-center items-center">
                <input className="hidden" onChange={handleFileChange} ref={mainImage} type="file" />
                <div className="flex justify-center">
                  <img src={Images.add} alt="add" className="w-10 h-10 cursor-pointer" />
                </div>
                <h1 className="text-center text-grey-800 py-2 font-semibold hover:text-grey-900">Main Image</h1>
              </div>
            ) : (
              <img src={imageURL} alt="Selected" className="w-full h-[300px] object-cover rounded-2xl sm:h-[140px] z-10" />
            )}
          </div>

          <div className="w-[49%] h-full relative">
            <div onClick={handleOtherImageClick} className="border h-full rounded-lg w-full bg-[#f2f2f2] border-[#e2e2e2] flex justify-center items-center">
              <input className="hidden" onChange={handleOtherFileChange} ref={otherImage} type="file" multiple />
              <div className="flex justify-center">
                <img src={Images.add} alt="add" className="w-10 h-10 cursor-pointer" />
              </div>
              <h1 className="text-center text-grey-800 py-2 font-semibold hover:text-grey-900">Other Images</h1>
            </div>
          </div>
        </div>

        <div className="my-6 grid grid-cols-4 2xl:grid-cols-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {otherImageURLs.map((url, index) => (
            <EditExperienceCard key={index} imageURL={url} onRemove={() => handleRemoveOtherImage(index)} />
          ))}
        </div>

        <div className="my-2">
          <label htmlFor="exp-name" className="font-semibold">
            Add Experience Name
          </label>
          <input type="text" name="ExperienceName" id="exp-name" className="input my-2" {...register("ExperienceName")} />
          <p className="text-[red]">{errors?.ExperienceName?.message}</p>
        </div>

        <div className="my-2">
          <CountrySelect selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
        </div>

        <div className="my-2">
          <StateSelect selectedCountry={selectedCountry} selectedState={selectedState} setSelectedState={setSelectedState} />
        </div>

        <div className="my-2">
          <CitySelect selectedCountry={selectedCountry} selectedState={selectedState} selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
        </div>

        <div className="my-2">
          <label htmlFor="AmountsperMinute" className="font-semibold">
            Add Amount Per Minutes
          </label>
          <input type="text" name="AmountsperMinute" id="AmountsperMinute" className="input my-2" {...register("AmountsperMinute")} />
          <p className="text-[red]">{errors?.AmountsperMinute?.message}</p>
        </div>

        <div className="my-4 flex justify-between items-center">
          <div className="left">Add Instant Live</div>
          <div className="border-2 border-[#FF7070] p-4 rounded-lg px-6">
            <img src={Images.InstantLiveText} alt="InstantLiveText" />
          </div>
        </div>

        <div className="my-2">
          <label htmlFor="notesForUser" className="font-semibold">
            Notes for Users
          </label>
          <textarea name="notesForUser" rows={5} id="notesForUser" className="input my-2 resize-none" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry." {...register("notesForUser")}></textarea>
          <p className="text-[red]">{errors?.notesForUser?.message}</p>
        </div>

        <div className="my-2">
          <button type="submit" className="w-full my-6 rounded-md bottom-1 m-auto left-0 right-0 p-3 cursor-pointer bg-backgroundFill-900 text-white text-center">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddExperienceWithImagePage;
