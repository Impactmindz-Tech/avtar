import RecentCompleteTourCard from "@/components/Avatar/Card/RecentCompleteTourCard";
import { EarningChart } from "@/components/Avatar/Chart/EarningChart";
import HeaderBack from "@/components/HeaderBack";

function EarningPage() {
  return (
    <div>
      <HeaderBack link="/avatar/profile" text={"Your Earnings"} />

      <div className="flex justify-between items-center">
        <div className="left">
          <p className="text-grey-800">Withdraw Balance</p>
          <h1 className="text-grey-900 text-2xl">$150.00</h1>
        </div>
        <div className="right">
          <button className="bg-grey-900 rounded-md px-8 py-4 text-white font-bold">Withdraw</button>
        </div>
      </div>

      <div className="chart">
        <EarningChart />
      </div>
      <div className="text-center my-2">
        <h1>$380.00</h1>
        <p>Total Earnings</p>
      </div>
      <div className="anatical">
        <h1>Analytics</h1>
        <div className="flex justify-between items-center my-2">
          <p>Earnings in (This Month)</p>
          <h1>$80.00</h1>
        </div>
        <div className="flex justify-between items-center my-2">
          <p>Upcoming Experience</p>
          <h1>$00.00</h1>
        </div>
        <div className="flex justify-between items-center my-2">
          <p>Completed Tours</p>
          <h1>$20.00</h1>
        </div>
        <div className="flex justify-between items-center my-2">
          <p>Average Experience Charges</p>
          <h1>$05.00</h1>
        </div>
        <div className="flex justify-between items-center my-2">
          <p>Available for Withdraw</p>
          <h1>$150.00</h1>
        </div>
      </div>



      <div className="my-6">
        <h1>Revenue</h1>
        <div className="flex justify-between items-center my-2">
          <p>Earning Till Date</p>
          <h1>$38000</h1>
        </div>
        <div className="flex justify-between items-center my-2">
          <p>Today’s Earning</p>
          <h1>$10.00</h1>
        </div>
        </div>



        <div className="my-9">
        <h1>Recent Completed Tours</h1>
        <div className="my-5 grid grid-cols-3 2xl:grid-cols-2  lg:grid-cols-1 xl:grid-cols-2 gap-4">
        <RecentCompleteTourCard/>
        <RecentCompleteTourCard/>
        <RecentCompleteTourCard/>
    </div>
    </div>
    </div>
  );
}

export default EarningPage;
