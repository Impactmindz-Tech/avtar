import EditExperienceCard from "@/components/Avatar/Card/EditExperienceCard";
import TitleHeading from "@/components/Avatar/Heading/TitleHeading";
import HeaderBack from "@/components/HeaderBack";
import Images from "@/constant/Images";
import { useRef, useState } from "react";

function AddExperienceWithImagePage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [otherSelectedFiles, setOtherSelectedFiles] = useState([]);
  const [imageURL, setImageURL] = useState(null);
  const [otherImageURLs, setOtherImageURLs] = useState([]);
  const mainImage = useRef(null);
  const otherImage = useRef(null);

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
  return (
    <div>
      <HeaderBack link="/avatar/add-new-experience" text={"Add Experience"} />
      <TitleHeading title={"Add Experience Images"} />

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

      <div className="forms">
        <form action="">
          <div className="my-2">
            <label htmlFor="exp-name" className="font-semibold">
              Add Experience Name
            </label>
            <input type="text" name="name" id="exp-name" value="Eiffel Tower" className="input my-2" />
          </div>

          <div className="my-2">
            <label htmlFor="country" className="font-semibold">
              Country
            </label>
            <select name="Country" id="country" className="input my-2">
              <option value="USA">USA</option>
            </select>
          </div>

          <div className="my-2">
            <label htmlFor="state" className="font-semibold">
              State
            </label>
            <select name="state" id="state" className="input my-2">
              <option value="California">California</option>
            </select>
          </div>

          <div className="my-2">
            <label htmlFor="City" className="font-semibold">
              City
            </label>
            <select name="City" id="City" className="input my-2">
              <option value="Los Angeles">Los Angeles</option>
            </select>
          </div>

          <div className="my-2">
            <label htmlFor="amount" className="font-semibold">
              Add Amount Per Minutes
            </label>
            <input type="text" name="name" id="amount" value="$5" className="input my-2" />
          </div>

          <div className="my-4 flex justify-between items-center">
            <div className="left">Add Instant Live</div>
            <div className="border-2 border-[#FF7070] p-4 rounded-lg px-6">
              <img src={Images.InstantLiveText} alt="InstantLiveText" />
            </div>
          </div>

          <div className="my-2">
            <label htmlFor="notes" className="font-semibold">
              Notes for Users
            </label>
            <textarea name="notes" rows={5} id="notes" className="input my-2 resize-none" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."></textarea>
          </div>

          <div className="my-2">
            <button className="w-full my-6 rounded-md bottom-1 m-auto left-0 right-0 p-3 cursor-pointer bg-backgroundFill-900 text-white text-center">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExperienceWithImagePage;
