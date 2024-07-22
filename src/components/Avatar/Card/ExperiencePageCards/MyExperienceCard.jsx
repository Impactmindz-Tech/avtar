import DeleteExperienceModal from "@/components/Modal/DeleteExperienceModal";
import Images from "@/constant/Images";
import { useState } from "react";
import { Link } from "react-router-dom";

function MyExperienceCard() {
  const [deleteModalState,setDeleteModalState]=useState(false)
  return (
    <>
    <div className="card">
      <div className="w-full relative">
        <div className="absolute top-2 right-2 flex gap-2">
         <Link to="/avatar/edit-experience"> <div className="bg-white p-4 rounded-md BoxShadowLessRounded">
            <img
              src={Images.edit}
              alt="edit"
              className="cursor-pointer w-6 h-6"
            />
          </div>
            </Link>
          <div className="bg-white p-4 rounded-md BoxShadowLessRounded">
            <img
              src={Images.redtrash}
              alt="redtrash"
              className="cursor-pointer w-6 h-6"
              onClick={()=>setDeleteModalState(true)}
            />
          </div>
        </div>
        <img
          src={Images.cardImageRounded}
          alt="banner"
          className="w-[100%] h-[300px] object-cover rounded-2xl"
        />
      </div>
      <h1 className="text-grey-900 my-2">Shikara Hotel, India</h1>
      <h3 className="text-grey-900 font-medium">Grand Park, New York</h3>
    </div>




    <DeleteExperienceModal deleteModalState={deleteModalState} setDeleteModalState={setDeleteModalState}/>
    </>
  );
}

export default MyExperienceCard;
