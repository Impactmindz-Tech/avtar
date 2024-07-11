import BrandImageHeader from "@/components/UserHeader/BrandImageHeader"
import UserSearch from "@/components/UserTopSearch/UserSearch"

function Chat() {
  return (
    <div className="container">
      <BrandImageHeader  link={"/user/home"} />

      <div className="max-w-2xl m-auto ">
      <UserSearch/>
    </div>
    </div>
  )
}

export default Chat
