import UserDashboardCard from "@/components/Cards/UserDashBoardCard/UserDashboardCard";
import Header from "@/components/UserHeader/Header";
import UserMenuBar from "@/components/UserMenuBar/UserMenuBar";
import UserTopSearch from "@/components/UserTopSearch/UserTopSearch";

const Home = () => {
  return (
    <div className="container ">
      <Header />
      <UserTopSearch />
      <UserMenuBar />
    </div>
  );
};

export default Home;
