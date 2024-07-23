import TitleHeading from "@/components/Avatar/Heading/TitleHeading"

function Offers() {
  return (
    <div className="container">

<TitleHeading title={"Create Offer"}/>    
    <div className="forms">
    <form action="">
      <div className="my-2">
        <label htmlFor="Title" className="font-semibold">
        Title
        </label>
        <input type="text" name="Title" id="Title"placeholder="Eg. shikara hotel, india" className="input my-2" />
      </div>



      <div className="my-2">
        <label htmlFor="price" className="font-semibold">
          Price
        </label>
        <input type="number" name="price" id="price" placeholder="Eg. $10" className="input my-2" />
      </div>


      <div className="my-2">
        <label htmlFor="minutes" className="font-semibold">
        Minutes
        </label>
        <input type="number" name="minutes" id="minutes" placeholder="Eg. 15" className="input my-2" />
      </div>





      <div className="my-2">
        <label htmlFor="country" className="font-semibold">
          Country
        </label>
        <select name="Country" id="country" className="input my-2">
          <option value="USA">USA</option>
        </select>
      </div>

    

      <div className="my-2">
        <label htmlFor="City" className="font-semibold">
          City
        </label>
        <select name="City" id="City" className="input my-2">
          <option value="Los Angeles">California</option>
        </select>
      </div>

      <div className="my-2">
        <label htmlFor="Zipcode" className="font-semibold">
          Zipcode
        </label>
        <input type="number" name="Zipcode" id="Zipcode" placeholder="93940" className="input my-2" />
      </div>

   

      <div className="my-2">
        <label htmlFor="notes" className="font-semibold">
          Notes 
        </label>
        <textarea name="notes" rows={5} id="notes" className="input my-2 resize-none" placeholder="Tell the avatar what tour would you like"></textarea>
      </div>

      <div className="my-2">
        <button className="w-full my-6 rounded-md bottom-1 m-auto left-0 right-0 p-3 cursor-pointer bg-backgroundFill-900 text-white text-center">Submit</button>
      </div>
    </form>
  </div>
  </div>
  )
}

export default Offers
