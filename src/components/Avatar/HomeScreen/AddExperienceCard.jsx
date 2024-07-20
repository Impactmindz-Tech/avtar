import Images from "@/constant/Images";
import TitleHeading from "../Heading/TitleHeading";

export default function AddExperienceCard() {
  return (
    <div className="py-2">
      <TitleHeading title={"Experience"} />
      <div className="rounded-2xl my-2 px-6 py-4 bg-backgroundFill-900 flex justify-around items-center">
        <div className="text flex-1">
          <h3 className="text-white">Add New Experience</h3>
          <p className="text-grey-800">Click on the card to add new experience</p>
        </div>
        <div className="bg-white flex justify-center items-center rounded-md p-3 cursor-pointer">
          <img src={Images.add} alt="add" />
        </div>
      </div>
    </div>
  );
}
