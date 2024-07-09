import HeaderBack from "@/components/HeaderBack";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import BottomBlackBtn from "@/components/ui/BottomBlackBtn";

function Report() {
  return (
    <div className="px-3">
      <HeaderBack link="/" text={"Report"} />
      <div className="text-center">
        <p className="text-grey-800">Do you think this package shouldn&apos; t be on Avatar Walk? Let us know your thoughts.</p>

        <div className="flex justify-center items-center py-4">
          <div className="flex flex-col items-start space-y-4  p-4 rounded">
            <div className="flex items-center space-x-2">
              <Checkbox id="sexual" />
              <Label htmlFor="sexual" className="reportCheckBox">
                Sexual Content
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="Violent" />
              <Label htmlFor="Violent" className="reportCheckBox">
                Violent or Repulsive Content
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="Hateful" />
              <Label htmlFor="Hateful" className="reportCheckBox">
                Hateful or Abusive Content
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="Harmful" />
              <Label htmlFor="Harmful" className="reportCheckBox">
                Harmful or Dangerous Acts
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="Spam" />
              <Label htmlFor="Spam" className="reportCheckBox">
                Spam or Misleading
              </Label>
            </div>
          </div>
        </div>
      </div>
      <BottomBlackBtn />
    </div>
  );
}

export default Report;
