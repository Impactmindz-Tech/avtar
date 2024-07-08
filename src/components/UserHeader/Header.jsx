import Images from "@/constant/Images";


function Header() {
  return (
    <header className="flex justify-between items-center p-3">
      <div className="city flex items-center gap-2">
        <div className="icon">
          <img src={Images.location} alt="location icon" />
        </div>
        <div className="font-medium">California</div>
        <div className="icon">
          <img src={Images.arrowDown} alt="arrowDown icon" />
        </div>
      </div>

      <div className="brand ">
        <img src={Images.AvatarWalk} alt="AvatarWalk" />
      </div>

      <div className="cursor-pointer">
        <img src={Images.liveBtn} alt="liveBtn" />
      </div>
    </header>
  );
}

export default Header;
