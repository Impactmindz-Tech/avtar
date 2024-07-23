import EditExperienceCard from "@/components/Avatar/Card/EditExperienceCard";
import TitleHeading from "@/components/Avatar/Heading/TitleHeading";
import HeaderBack from "@/components/HeaderBack";
import Images from "@/constant/Images";
import { Link } from "react-router-dom";

function EditExperiencePage() {
  return (
    <div>
      <HeaderBack link="/avatar/add-experience" text={"Edit Experience"} />
      <TitleHeading title={"Experience Images"} />

      <div className="flex justify-between my-4 flex-wrap">
        <div className="w-[49%] relative">
          <div className="absolute top-2 right-2 flex gap-2">
            <Link to="/avatar/edit-experience">
              {" "}
              <div className="bg-white p-4 sm:p-2 rounded-md BoxShadowLessRounded">
                <img src={Images.rotate} alt="edit" className="cursor-pointer w-6 h-6" />
              </div>
            </Link>
            <div className="bg-white p-4 sm:p-2 rounded-md BoxShadowLessRounded">
              <img src={Images.close} alt="redtrash" className="cursor-pointer w-6 h-6" />
            </div>
          </div>
          <img src={Images.cardImageRounded} alt="banner" className="w-[100%] h-[300px] object-cover rounded-2xl sm:h-[140px]" />
        </div>

        <div className="border rounded-lg  w-[49%] bg-[#f2f2f2] border-[#e2e2e2] flex justify-center items-center">
          <div className="">
            <div className="flex justify-center">
              <Link to="/avatar/add-new-experience">
                <img src={Images.add} alt="add" className="w-10 h-10 cursor-pointer" />
              </Link>
            </div>
            <h1 className="text-center text-grey-800 py-2 font-semibold hover:text-grey-900">Other Image</h1>
          </div>
        </div>
      </div>

      <div className="my-6 grid grid-cols-4 2xl:grid-cols-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <EditExperienceCard />
        <EditExperienceCard />
        <EditExperienceCard />
        <EditExperienceCard />
      </div>

      <div className="forms">
        <form action="">
          <div className="my-2">
            <label htmlFor="exp-name" className="font-semibold">
              Experience Name
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
              state
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
            <textarea name="notes" rows={5} id="notes" className="input my-2 resize-none" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."></textarea>
          </div>

          <div className="my-2">
            <button className="w-full my-6 rounded-md bottom-1 m-auto left-0 right-0 p-3 cursor-pointer bg-backgroundFill-900 text-white text-center">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditExperiencePage;
