import Images from "@/constant/Images";
import IconText from "../Heading/IconText";
import { Link } from "react-router-dom";

export default function OffersCard({ state }) {
  return (
    <Link to="/avatar/offers">
      {" "}
      <div className="squareShadow p-5 text-grey-900">
        <h1 className="text-2xl">$80</h1>
        <h2 className="font-bold">Shikara Hotel, India</h2>
        {state ? "" : <IconText icon={Images.multiUser} text={"Richardo Black"} />}
        <IconText icon={Images.clock} text={"25 Minutes"} />
        <IconText icon={Images.location} text={"California, USA, 93940"} />
      </div>
    </Link>
  );
}
