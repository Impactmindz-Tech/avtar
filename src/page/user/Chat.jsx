import ChatUserCard from "@/components/Cards/ChatUserCard/ChatUserCard";
import BrandImageHeader from "@/components/UserHeader/BrandImageHeader";
import UserSearch from "@/components/UserTopSearch/UserSearch";

function Chat() {
  return (
    <div className="container">
      <BrandImageHeader link={"/user/home"} />

      <div className=" m-auto ">
        <UserSearch />

        <div className="userContainer my-10">
          <ChatUserCard />
        </div>
      </div>
    </div>
  );
}

export default Chat;
