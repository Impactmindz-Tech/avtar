import RequestedCard from "@/components/Avatar/Card/RequestCard";
import ExperienceCard from "@/components/Cards/ExperienceCard";
import BookedCard from "@/components/Cards/ExperiencePageCard/BookedCard";
import CancelledCard from "@/components/Cards/ExperiencePageCard/CancelledCard";
import CompletedCard from "@/components/Cards/ExperiencePageCard/CompletedCard";
import ExperiencePageHeader from "@/components/UserHeader/ExperiencePageHeader";
import { setExperinceStatus } from "@/store/slice/experinceS/ExperinceSlice";
import { experienceGetrequestsApi } from "@/utills/service/experienceService/ExperienceService";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Experience() {
  const dispatch = useDispatch();
  const experinceStatusDetails = useSelector((state) => state?.ExperinceProduct?.experinceStatus);
  const [activeTab, setActiveTab] = useState("Booked");
  const tabs = ["Requested", "Booked", "Completed", "Cancelled"];

  const experienceGetrequests = async (status) => {
    try {
      const response = await experienceGetrequestsApi(status);
      dispatch(setExperinceStatus(response));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    experienceGetrequests(activeTab);
  }, [activeTab]);
  return (
    <div className="container">
      <ExperiencePageHeader />
      <div className="my-3">
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

              <>
                <div className="my-5 grid grid-cols-3 2xl:grid-cols-2  lg:grid-cols-1 xl:grid-cols-2 gap-4">
                  {experinceStatusDetails?.isSuccess &&
                    experinceStatusDetails?.data?.map((item, index) => {
                      return <ExperienceCard key={index} item={item} />;
                    })}
                </div>
              </>
            {/* {activeTab === "Requested" && (
              <>
                <div className="my-5 grid grid-cols-3 2xl:grid-cols-2  lg:grid-cols-1 xl:grid-cols-2 gap-4">
                  <RequestedCard />
                  <RequestedCard />
                  <RequestedCard />
                  <RequestedCard />
                </div>
              </>
            )}
            {activeTab === "Completed" && (
              <>
                <div className="my-5 grid grid-cols-3 2xl:grid-cols-2  lg:grid-cols-1 xl:grid-cols-2 gap-4">
                  <CompletedCard />
                  <CompletedCard />
                  <CompletedCard />
                  <CompletedCard />
                </div>
              </>
            )}
            {activeTab === "Cancelled" && (
              <>
                <div className="my-5 grid grid-cols-3 2xl:grid-cols-2  lg:grid-cols-1 xl:grid-cols-2 gap-4">
                  <CancelledCard />
                  <CancelledCard />
                  <CancelledCard />
                  <CancelledCard />
                </div>
              </>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;