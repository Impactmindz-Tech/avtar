import Images from '@/constant/Images'

const UpdateExperienceCard = () => {
  return (
    <div className="BoxShadowLessRounded pb-2 w-[80%] m-auto">
        <div className="flex items-center gap-4 p-4">
          <div className="">
            <img src={Images.cardImageRounded} alt="cardImageRounded" className="w-30 h-[100px] rounded-lg" />
          </div>
          <div className="">
            
            <h2 className="text-lg font-bold">Shikara Hotel, India</h2>
            <div className="description flex gap-2 items-center">
              <p className="text-sm text-black ">Mon, Mar 21, 2024 </p>
              <li className="text-grey-800">
                {" "}
                <span className="text-black">8:00 - 8:30 PM</span>
              </li>
            </div>
            <p className="text-sm text-grey-800">Georgia, US</p>

          </div>
        </div>
        <div className="borderTop flex justify-between m-auto w-[94%] py-2 text-grey-800">
          <div className="author  ">
            <b>Avatar</b>: Melia Jhon
          </div>
          <div className="font-bold">$85.25</div>
        </div>
      </div>
  )
}

export default UpdateExperienceCard
