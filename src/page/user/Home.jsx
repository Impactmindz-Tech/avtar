import UserDashboardCard from "@/components/Cards/UserDashBoardCard/UserDashboardCard";
import Header from "@/components/UserHeader/Header";
import UserMenuBar from "@/components/UserMenuBar/UserMenuBar";
import UserTopSearch from "@/components/UserTopSearch/UserTopSearch";

const Home = () => {
  return (
    <div className="px-3">
      <Header />
      <UserTopSearch />
      <UserMenuBar />

      <div className="my-10 flex justify-evenly flex-wrap gap-y-10 gap-x-2">
        <UserDashboardCard />
        <UserDashboardCard />
        <UserDashboardCard />
        <UserDashboardCard />
        <UserDashboardCard />
        <UserDashboardCard />
      </div>
    </div>
  );
};

export default Home;
