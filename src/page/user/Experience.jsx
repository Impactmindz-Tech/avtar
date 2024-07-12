import ExperiencePageTab from "@/components/Tab/ExperiencePageTab";
import ExperiencePageHeader from "@/components/UserHeader/ExperiencePageHeader";

function Experience() {
  return (
    <div className="container">
      <ExperiencePageHeader />
      <div className="my-3">
        <ExperiencePageTab />
      </div>
    </div>
  );
}

export default Experience;
