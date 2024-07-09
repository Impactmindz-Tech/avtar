import Images from "@/constant/Images";

const SeeAllReview = () => {
  return (
    <div className=" mx-auto bg-white BoxShadow rounded-lg p-6 flex lg:flex-wrap lg:gap-y-5">
      <div className="min-w-[45%] lg:min-w-[100%] lg:border-none border-r  border-gray-200 pr-7">
        <h2 className="text-lg font-medium mb-2 pl-3">Overall Rating</h2>
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="w-6 text-right mr-2">5</span>
            <div className="w-full bg-gray-200 rounded-full h-2">{/* <div className="bg-gray-400 h-2 rounded-full" style={{width: "5%"}}></div> */}</div>
          </div>
          <div className="flex items-center">
            <span className="w-6 text-right mr-2">4</span>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gray-800 h-2 rounded-full" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="flex items-center">
            <span className="w-6 text-right mr-2">3</span>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gray-600 h-2 rounded-full" style={{ width: "10%" }}></div>
            </div>
          </div>
          <div className="flex items-center">
            <span className="w-6 text-right mr-2">2</span>
            <div className="w-full bg-gray-200 rounded-full h-2">{/* <div className="bg-gray-400 h-2 rounded-full" style={{width: "5%"}}></div> */}</div>
          </div>
          <div className="flex items-center">
            <span className="w-6 text-right mr-2">1</span>
            <div className="w-full bg-gray-200 rounded-full h-2">{/* <div className="bg-gray-400 h-2 rounded-full" style={{width: "5%"}}></div> */}</div>
          </div>
        </div>
      </div>
      {/* <!-- Cleanliness --> */}
      <div className="flex-1 border-r lg:min-w-[100%] lg:border-none border-gray-200 px-8 flex flex-col ">
        <div className="w-16 h-16 bg-gray-100 flex items-center justify-center rounded-lg mb-2">
          <img src={Images.Cleanliness} alt="Cleanliness" />
        </div>
        <h2 className="text-lg font-medium text-grey-800">Cleanliness</h2>
        <p className="text-xl font-semibold text-grey-700">4.5</p>
      </div>
      {/* Accuracy */}
      <div className="flex-1 px-8 flex  lg:min-w-[100%] lg:border-none flex-col ">
        <div className="w-16 h-16 bg-gray-100 flex items-center justify-center rounded-lg mb-2">
          <img src={Images.correct} alt="correct icon" />
        </div>
        <h2 className="text-lg font-medium text-grey-800">Accuracy</h2>
        <p className="text-xl font-semibold text-grey-700">4.6</p>
      </div>
    </div>
  );
};

export default SeeAllReview;
