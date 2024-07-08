import Header from "@/components/UserHeader/Header";
import UserMenuBar from "@/components/UserMenuBar/UserMenuBar";
import UserTopSearch from "@/components/UserTopSearch/UserTopSearch";
import Images from "@/constant/Images";
const Home = () => {
  return (
    <div>
      <Header />
      <UserTopSearch />
      <UserMenuBar />

      <div className="my-10 flex justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img className="w-full" src={Images.cardImage} alt="Shikara Hotel" />
          <div className="px-5 py-4 ">
            <div className="font-bold text-xl mb-2 relative">
              Shikara Hotel, India
              <div className="absolute -top-12 right-0">
                <img src={Images.user} alt="user" className="w-20 h-20" />
              </div>
            </div>
            <p className="text-grey-800 text-base">Georgia, US</p>
            <div className="flex gap-2 items-center">
              <p className="text-gray-700 text-base">Starts at: $5 (Per Minute)</p>
              <img src={Images.InstantLiveBtn} alt="InstantLiveBtn" className="w-30 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
