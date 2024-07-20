import Images from "@/constant/Images";
import { useState } from "react";
import Switch from "react-switch";

export default function InstantLiveCard() {
  const [checked, setChecked] = useState(true);

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };
  return (
    <div className="flex justify-between items-center squareShadow p-4">
      <div className="flex gap-2 items-center">
        <h1 className="text-danger font-medium">Instant Live</h1>
        <div className="images">
          <img src={Images.info} alt="info" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex">
        <Switch
          onChange={handleChange}
          checked={checked}
          offColor="#888"
          onColor="#2bad7a"
          handleDiameter={20}
          height={30}
          uncheckedIcon={""}
          checkedIcon={""}
          width={60}
          // Omit uncheckedIcon and checkedIcon to disable icons
        />
      </div>
    </div>
  );
}
