import ExperiencePageTab from "@/components/Tab/ExperiencePageTab";
import ExperiencePageHeader from "@/components/UserHeader/ExperiencePageHeader";

function Experience() {

  return (
    <div className="container">
      <ExperiencePageHeader />

      <div className="max-w-2xl m-auto ">
        <ExperiencePageTab/>
  
      </div>
    </div>
  );
}

export default Experience;
