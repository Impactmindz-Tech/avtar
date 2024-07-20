import Images from "@/constant/Images";
import IconText from "../Heading/IconText";

export default function OffersCard() {
  return (
    <div className="squareShadow p-5 text-grey-900">
      <h1 className="text-2xl">$80</h1>
      <h2 className="font-bold">Shikara Hotel, India</h2>
      <IconText icon={Images.multiUser} text={"Richardo Black"} />
      <IconText icon={Images.clock} text={"25 Minutes"} />
      <IconText icon={Images.location} text={"California, USA, 93940"} />
    </div>
  );
}
