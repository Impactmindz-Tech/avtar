import UpdateExperienceCard from "@/components/Cards/UpdateExperienceCard.jsx/UpdateExperienceCard";
import HeaderBack from "@/components/HeaderBack";

function Update_Experience() {
  return (
    <div className="container">
      <HeaderBack link="/user/experience" text={"Update Experience"} />

      <div className="max-w-2xl m-auto ">
        <UpdateExperienceCard />

        <div className="w-[80%] m-auto my-2">
          <h1 className="my-2">Want to cancel:</h1>
          <textarea name="reason" placeholder="Type reason" rows={"9"} className="bg-boxFill-900 w-full outline-0 p-3 resize-none rounded-md"></textarea>
        </div>

        <div className="mt-5 w-[80%]  m-auto">
          <button className="border border-primaryColor-900 text-black font-semibold py-2 lg:w-[80%] rounded w-full">Cancel Request</button>

          {/* clock timer btn */}
          <button className="bg-backgroundFill-900 text-white flex justify-center items-center py-3 gap-2 rounded w-full mt-3 lg:w-[80%]">Start Tour</button>
        </div>
      </div>
    </div>
  );
}

export default Update_Experience;
