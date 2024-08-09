import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from "@/components/ui/sheet";
import { getLocalStorage } from "@/utills/LocalStorageUtills";
import { avtarAvailableApi } from "@/utills/service/avtarService/AddExperienceService";
import { useState } from "react";

const AvtarAvailability = () => {
  // State to hold input values
  const [formValues, setFormValues] = useState({
    from: "",
    to: "",
    fromPeriod: "",
    toPeriod: "",
    timeZone: "",
  });

  // State to hold error messages
  const [errors, setErrors] = useState({
    from: "",
    to: "",
    fromPeriod: "",
    toPeriod: "",
    timeZone: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!formValues.from) newErrors.from = "From field is required.";
    if (!formValues.to) newErrors.to = "To field is required.";
    if (!formValues.fromPeriod) newErrors.fromPeriod = "From Period field is required.";
    if (!formValues.toPeriod) newErrors.toPeriod = "To Period field is required.";
    if (!formValues.timeZone) newErrors.timeZone = "Time Zone field is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
   const id = getLocalStorage("user")?._id
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", formValues);
    }

    try {
      const response = await avtarAvailableApi(id , formValues);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <p>Availability</p>
      </SheetTrigger>
      <SheetContent className="min-lg:w-[40vw]">
        <SheetHeader>
          <SheetTitle>Avtar Available</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <form>
            <div className="mt-2">
              <label htmlFor="from">From</label>
              <br />
              <input className="outline-none border border-[#ccc] p-2 rounded-md w-full" type="text" name="from" placeholder="From" id="from" value={formValues.from} onChange={handleChange} />
              {errors.from && <p className="text-red-500 text-sm">{errors.from}</p>}
            </div>
            <div className="mt-2">
              <label htmlFor="to">To</label>
              <br />
              <input className="outline-none border border-[#ccc] p-2 rounded-md w-full" type="text" name="to" placeholder="To" id="to" value={formValues.to} onChange={handleChange} />
              {errors.to && <p className="text-red-500 text-sm">{errors.to}</p>}
            </div>
            <div className="mt-2">
              <label htmlFor="fromPeriod">From Period</label>
              <br />
              <input className="outline-none border border-[#ccc] p-2 rounded-md w-full" type="text" name="fromPeriod" placeholder="From Period" id="fromPeriod" value={formValues.fromPeriod} onChange={handleChange} />
              {errors.fromPeriod && <p className="text-red-500 text-sm">{errors.fromPeriod}</p>}
            </div>
            <div className="mt-2">
              <label htmlFor="toPeriod">To Period</label>
              <br />
              <input className="outline-none border border-[#ccc] p-2 rounded-md w-full" type="text" name="toPeriod" placeholder="To Period" id="toPeriod" value={formValues.toPeriod} onChange={handleChange} />
              {errors.toPeriod && <p className="text-red-500 text-sm">{errors.toPeriod}</p>}
            </div>
            <div className="mt-2">
              <label htmlFor="timeZone">Time Zone</label>
              <br />
              <input className="outline-none border border-[#ccc] p-2 rounded-md w-full" type="text" name="timeZone" placeholder="Time Zone" id="timeZone" value={formValues.timeZone} onChange={handleChange} />
              {errors.timeZone && <p className="text-red-500 text-sm">{errors.timeZone}</p>}
            </div>
            <SheetFooter className="mt-4">
              <Button onClick={onSubmit} type="submit">
                Submit
              </Button>
            </SheetFooter>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AvtarAvailability;
