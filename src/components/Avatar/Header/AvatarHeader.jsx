import Images from "@/constant/Images";
import UserLocationChange from "../../../components/ui/UserLocationChange";
const AvatarHeader = () => {
  return (
    <header className="flex justify-between items-center p-3 gap-3">
    <UserLocationChange />

    <div className="brand flex-1">
      <img src={Images.AvatarWalk} alt="AvatarWalk" />
    </div>

   
  </header>
  )
}

export default AvatarHeader
