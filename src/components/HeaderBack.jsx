import Images from "@/constant/Images"
import { Link } from "react-router-dom"

const HeaderBack=({link,text})=> {
  return (
    <header className="flex items-center my-2">
     <div className="border  border-borderFill-900 w-[50px] h-[50px] p-2 rounded-full flex items-center justify-center">
       <Link to={link}>
        <img src={Images.arrowLeft} alt="arrowLeft icon" className="cursor-pointer" />
       </Link>
      </div>
    <div className="flex-1 flex justify-center text-lg font-bold">{text}</div>
    </header>
  )
}

export default HeaderBack
