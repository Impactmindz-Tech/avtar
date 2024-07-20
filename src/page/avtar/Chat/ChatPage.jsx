import ChatUserCard from "@/components/Cards/ChatUserCard/ChatUserCard";
import BrandImageHeader from "@/components/UserHeader/BrandImageHeader";
import UserSearch from "@/components/UserTopSearch/UserSearch";

function ChatPageAvatar() {
  return (
    <div className="container">
      <BrandImageHeader link={"/user/home"} />

      <div className=" m-auto ">
        <UserSearch />

        <div className="userContainer my-10">
          <ChatUserCard />
          <ChatUserCard />
          <ChatUserCard />
          <ChatUserCard />
          <ChatUserCard />
        </div>
      </div>
    </div>
  );
}

export default ChatPageAvatar;
