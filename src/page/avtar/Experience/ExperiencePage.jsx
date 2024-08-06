import OffersCard from "@/components/Avatar/Card/OffersCard";
import RequestedCard from "@/components/Avatar/Card/RequestCard";
import BookedCard from "@/components/Cards/ExperiencePageCard/BookedCard";
import CancelledCard from "@/components/Cards/ExperiencePageCard/CancelledCard";
import CompletedCard from "@/components/Cards/ExperiencePageCard/CompletedCard";
import { formatDate, formatTime } from "@/constant/date-time-format/DateTimeFormat";
import Images from "@/constant/Images";
import { setExperinceStatus } from "@/store/slice/avtar/ExperienceFiltter";
import { getRequestsApi } from "@/utills/service/avtarService/AddExperienceService";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ExperiencePage = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("Requested");
  const tabs = ["Offers", "Requested", "Booked", "Completed", "Cancelled"];
  const experinceStatus = useSelector((state) => state.avatar.experinceStatus);
  console.log(experinceStatus);
  const getRequests = async (search) => {
    try {
      const responce = await getRequestsApi(search);
      dispatch(setExperinceStatus(responce));
      console.log(responce, "tinku");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRequests(activeTab);
  }, [activeTab]);
  return (
    <div className="">
      <div className="p-4 ">
        <div className="lg:overflow-x-auto lg:overflow-y-hidden border-b  ">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button key={tab} className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === tab ? "border-primaryColor-900 text-primaryColor-900 font-bold" : "border-transparent text-gray-500 hover:text-gray-700"}`} onClick={() => setActiveTab(tab)}>
                {tab}
              </button>
            ))}
          </div>
        </div>
        {experinceStatus?.isSuccess &&
          experinceStatus?.data?.map((item, index) => {
            return (
              <>
                <div key={index} className="my-5 grid grid-cols-3  sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                  {item?.status == "Requested" ? <RequestedCard item={item} /> : item?.status == "Booked" ? <BookedCard item={item} /> : item?.status == "Completed" ? <CompletedCard item={item} /> : item?.status == "Booked" ? <CancelledCard item={item} /> : null}
                </div>
              </>
            );
          })}
        {/* {activeTab === "Offers" && (
          <>
            <div className="my-5 grid grid-cols-4  sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              <OffersCard />
              <OffersCard />
              <OffersCard />
              <OffersCard />
              <OffersCard />
              <OffersCard />
            </div>
          </>
        )} */}
        {activeTab === "Booked" && (
          <>
            <div className="my-5 grid grid-cols-4  lg:grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3  gap-4">
              <BookedCard />
              <BookedCard />
              <BookedCard />
              <BookedCard />
              <BookedCard />
            </div>
          </>
        )}
        {/* {activeTab === "Requested" && (
          <>
            <div className="my-5 grid grid-cols-4  lg:grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3  gap-4">
              <RequestedCard />
              <RequestedCard />
              <RequestedCard />
              <RequestedCard />
              <RequestedCard />
            </div>
          </>
        )}
        {activeTab === "Completed" && (
          <>
            <div className="my-5 grid grid-cols-4  lg:grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3  gap-4">
              <CompletedCard />
              <CompletedCard />
              <CompletedCard />
              <CompletedCard />
              <CompletedCard />
              <CompletedCard />
            </div>
          </>
        )}
        {activeTab === "Cancelled" && (
          <>
            <div className="my-5 grid grid-cols-4  lg:grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3  gap-4">
              <CancelledCard />
              <CancelledCard />
              <CancelledCard />
              <CancelledCard />
              <CancelledCard />
              <CancelledCard />
            </div>
          </>
        )} */}
      </div>
    </div>
  );
};

export default ExperiencePage;
