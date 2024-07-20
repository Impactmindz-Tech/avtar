import Images from "@/constant/Images"
import { Link } from "react-router-dom"

export default function CardThreeSection({icon,link,title,desc}) {
  return (
    <Link to={link}>
     <div className="border flex items-center justify-between p-4 gap-4 rounded-2xl my-5 cursor-pointer">
        <div className="icon bg-grey-300 rounded-full px-5 py-7">
          <img src={icon} alt={icon} />
        </div>
        <div className="info flex-1">
          <h1 className="text-grey-900">{title}</h1>
          <p className="text-grey-800">{desc}</p>
        </div>
        <div className="arrow">
          <img src={Images.rightArrowGray} alt="rightArrowGray" />
        </div>
      </div> </Link>
  )
}
