import UserDashboardCard from "@/components/Cards/UserDashBoardCard/UserDashboardCard";
import Header from "@/components/UserHeader/Header";
import UserMenuBar from "@/components/UserMenuBar/UserMenuBar";
import UserTopSearch from "@/components/UserTopSearch/UserTopSearch";

const Home = () => {
  return (
    <div className="container 3xl:max-w-full">
      <Header />
      <UserTopSearch />
      <UserMenuBar />

      <div className="my-10 grid grid-cols-4 sm:grid-cols-1 gap-4">
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
