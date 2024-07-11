import FilterUserCard from "@/components/Cards/FilterCard/FilerUserCard";
import HeaderBack from "@/components/HeaderBack";
import FilterMenu from "@/components/UserMenuBar/FilterMenu";
import UserSearch from "@/components/UserTopSearch/UserSearch";

function Filters() {
  return (
    <div className="container">
      <HeaderBack link="/user/home" text="Filter" />
      <UserSearch />
      <div className="w-full sm:w-auto overflow-x-auto p-2">
        <FilterMenu />
      </div>

      <div className="my-5 grid grid-cols-4 sm:grid-cols-1 gap-4">
        <FilterUserCard />
        <FilterUserCard />
        <FilterUserCard />
        <FilterUserCard />
      </div>
    </div>
  );
}

export default Filters;
