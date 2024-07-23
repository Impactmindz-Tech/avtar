import AddExperienceCard from "@/components/Avatar/HomeScreen/AddExperienceCard";
import PerformanceCard from "@/components/Avatar/HomeScreen/PerformanceCard";
import TitleHeading from "@/components/Avatar/Heading/TitleHeading";
import UserSearch from "@/components/UserTopSearch/UserSearch";
import InstantLiveCard from "@/components/Avatar/HomeScreen/InstantLiveCard";
import EarningCard from "@/components/Avatar/HomeScreen/EarningCard";
import Images from "@/constant/Images";
import RequestedCard from "@/components/Avatar/Card/RequestCard";
import { useState } from "react";
import InstantLiveRequestModal from "@/components/Modal/InstantLiveRequestModal";
const AvtarHome = () => {
  const [instantLiveModalState, setInstantLiveModalState] = useState(false);
  return (
    <>
      <UserSearch />
      <div onClick={() => setInstantLiveModalState(true)}>
        <InstantLiveCard />
      </div>
      {/* add exp */}
      <AddExperienceCard />

      {/* Your Performances  */}
      <TitleHeading title={"Your Performances"} />

      <div className="grid grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-5 my-2">
        <PerformanceCard />
        <PerformanceCard />
        <PerformanceCard />
        <PerformanceCard />
      </div>

      <TitleHeading title={"Earnings"} />
      <div className="flex justify-between gap-2 my-4">
        <EarningCard icon={Images.calendarTick} price="50" title="Today" />
        <EarningCard icon={Images.calendar30} price="500" title="This Month" />
      </div>

      <TitleHeading title={"Recent Requests"} />
      <div className="my-5 grid grid-cols-4 2xl:grid-cols-3  lg:grid-cols-1 xl:grid-cols-2 gap-4">
        <RequestedCard />
        <RequestedCard />
        <RequestedCard />
      </div>
      <InstantLiveRequestModal instantLiveModalState={instantLiveModalState} setInstantLiveModalState={setInstantLiveModalState} />
    </>
  );
};

export default AvtarHome;
