import MyExperienceCard from "@/components/Avatar/Card/ExperiencePageCards/MyExperienceCard";
import TitleHeading from "@/components/Avatar/Heading/TitleHeading";
import HeaderBack from "@/components/HeaderBack";
import Images from "@/constant/Images";
import { Link } from "react-router-dom";

function AddNewExperiencePage() {
  return (
    <div>
      <HeaderBack link="/avatar/dashboard" text={"Experience"} />

      <div className="text-center p-8 border-dashed border-2 border-grey-800 my-5 rounded-md">
        <div className="flex justify-center ">
          <Link to="/avatar/add-experience-image">
            <img src={Images.add} alt="add" className="w-10 h-10 cursor-pointer" />
          </Link>
        </div>
        <p className="text-grey-800 py-2 pt-7">Add New</p>
        <h1 className="text-grey-900 text-xl">Experience</h1>
      </div>

      <TitleHeading title={"My Experience"} />

      <div className="grid grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2  sm:grid-cols-1 xl:grid-cols-3 gap-4 my-2">
        <MyExperienceCard />
        <MyExperienceCard />
        <MyExperienceCard />
        <MyExperienceCard />
        <MyExperienceCard />
      </div>
    </div>
  );
}

export default AddNewExperiencePage;
