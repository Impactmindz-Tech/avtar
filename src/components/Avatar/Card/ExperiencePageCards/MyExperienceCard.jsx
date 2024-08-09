import DeleteExperienceModal from "@/components/Modal/DeleteExperienceModal";
import Images from "@/constant/Images";
import { setExperinceList } from "@/store/slice/avtar/ExperienceFiltter";
import { deleteExperienceApi } from "@/utills/service/avtarService/AddExperienceService";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function MyExperienceCard({ item, onDelete }) {
  const navigate = useNavigate();
  const [deleteModalState, setDeleteModalState] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleEditExperince = (item) => {
    navigate("/avatar/edit-experience/" + item?._id, { state: item });
  };

  const handleOpenModal = (item) => {
    setItemToDelete(item);
    setDeleteModalState(true);
  };

  const handleDeleteExperince = async () => {
    if (itemToDelete) {
      try {
        const response = await deleteExperienceApi(itemToDelete?._id, { status: 1 });
        if (response?.isSuccess) {
          onDelete();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <div className="card">
        <div className="w-full relative">
          <div className="absolute top-2 right-2 flex gap-2">
            <div onClick={() => handleEditExperince(item)} className="bg-white p-4 lg:p-2 rounded-md BoxShadowLessRounded">
              <img src={Images.edit} alt="edit" className="cursor-pointer w-6 h-6 " />
            </div>
            <div onClick={() => handleOpenModal(item)} className="bg-white p-4 lg:p-2 rounded-md BoxShadowLessRounded">
              <img src={Images.redtrash} alt="redtrash" className="cursor-pointer w-6 h-6" />
            </div>
          </div>
          <img src={item?.thumbnail} alt="banner" className="w-[100%] h-[300px] object-cover rounded-2xl lg:h-[200px]" />
        </div>
        <h1 className="text-grey-900 my-2">
          {item?.ExperienceName}, {item?.country}
        </h1>
        <h3 className="text-grey-900 font-medium">
          {item?.city} , {item?.country}
        </h3>
      </div>

      <DeleteExperienceModal deleteModalState={deleteModalState} setDeleteModalState={setDeleteModalState} onConfirm={handleDeleteExperince} />
    </>
  );
}

export default MyExperienceCard;
