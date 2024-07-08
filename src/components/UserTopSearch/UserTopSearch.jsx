import Images from "@/constant/Images";
function UserTopSearch() {
  return (
    <div className="flex gap-2 items-center px-4 my-2">
      <div className="relative flex-1">
        <div className="bg-backgroundFill-900 flex absolute top-1 right-1 p-2.5 rounded-full">
          <img src={Images.search} alt="search Icon" />
        </div>
        <input type="search" name="search bar" id="search bar" className="inputRounded rounded-full" placeholder="Search..." />
      </div>
      <div className="border  border-borderFill-900 w-[50px] h-[50px] p-2 rounded-full flex items-center justify-center">
        <img src={Images.setting} alt="setting icon" className="cursor-pointer" />
      </div>
    </div>
  );
}

export default UserTopSearch;
