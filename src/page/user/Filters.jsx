import FilterUserCard from "@/components/Cards/FilterCard/FilerUserCard";
import UserFilterHeader from "@/components/UserFilterHeader";
import FilterMenu from "@/components/UserMenuBar/FilterMenu";
import UserSearch from "@/components/UserTopSearch/UserSearch";

function Filters() {
  return (
    <div className="px-3">
      <UserFilterHeader />
      <UserSearch />
      <div className="w-full sm:w-auto overflow-x-auto p-2">
        <FilterMenu />
      </div>

      <div className="my-5 flex gap-y-5 gap-x-4 flex-wrap">
        <FilterUserCard />
        <FilterUserCard />
        <FilterUserCard />
      
      </div>
    </div>
  );
}

export default Filters;
