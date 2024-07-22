import Images from '@/constant/Images'

export default function EditExperienceCard() {
  return (

    <div className="relative">
      <div className="bg-grey-900 rounded-full p-2 absolute -top-2 -right-2 cursor-pointer border-4 border-white">
        <img src={Images.closeWhite} alt="close" className="w-5 h-5" />
      </div>
      <img
        src={Images.house}
        alt="house"
        className="w-full h-[230px] object-cover rounded-md"
      />
    </div>
 
  )
}