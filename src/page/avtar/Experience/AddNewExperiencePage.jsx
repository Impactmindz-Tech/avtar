import MyExperienceCard from "@/components/Avatar/Card/ExperiencePageCards/MyExperienceCard";
import TitleHeading from "@/components/Avatar/Heading/TitleHeading";
import HeaderBack from "@/components/HeaderBack";
import Images from "@/constant/Images";

function AddNewExperiencePage() {
  return (
    <div>
      <HeaderBack link="/avatar/dashboard" text={"Experience"} />

      <div className="text-center p-8 border-dashed border-2 border-grey-800 my-5 rounded-md">
        <div className="flex justify-center ">
          <img
            src={Images.add}
            alt="add"
            className="w-10 h-10 cursor-pointer"
          />
        </div>
        <p className="text-grey-800 py-2 pt-7">Add New</p>
        <h1 className="text-grey-900 text-xl">Experience</h1>
      </div>

      <TitleHeading title={"My Experience"} />

      <div className="grid grid-cols-3 2xl:grid-cols-2  lg:grid-cols-1 xl:grid-cols-2 gap-4 my-2">
        <MyExperienceCard />
        <MyExperienceCard />
        <MyExperienceCard />
      </div>
    </div>
  );
}

export default AddNewExperiencePage;
