import { Link, useSearchParams } from "react-router-dom";
import PostMenuAction from "./PostMenuAction";
import Search from "./Search";

const SideMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCheckboxChange = (e) => {
    if (searchParams.get("sort") !== e.target.value) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        sort: e.target.value,
      });
    }
  };

  const handleCategory = (category) => {
    if (searchParams.get("sort") !== category) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        cat: category,
      });
    }
  };

  return (
    <div className="px-4 md:sticky top-8 h-max">
      <div className="flex flex-col">
        <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
        <Search />
      </div>
      <div>
        <h1 className="mt-4 mb-4 text-sm font-medium">Filter</h1>
        <label
          htmlFor="newest"
          className="flex items-center gap-2 cursor-pointer "
        >
          <input
            type="checkbox"
            name="sort"
            id="newest"
            value="newest"
            checked={searchParams.get("sort")?.split(",").includes("newest")}
            onChange={handleCheckboxChange}
          />
          Newest
        </label>
        <label
          htmlFor="mostPopular"
          className="flex items-center gap-2 cursor-pointer "
        >
          <input
            type="checkbox"
            name="sort"
            id="mostPopular"
            value="mostPopular"
            checked={searchParams
              .get("sort")
              ?.split(",")
              .includes("mostPopular")}
            onChange={handleCheckboxChange}
          />
          Most Popular
        </label>
        <label
          htmlFor="trending"
          className="flex items-center gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="sort"
            value="trending"
            id="trending"
            checked={searchParams.get("sort")?.split(",").includes("trending")}
            onChange={handleCheckboxChange}
          />
          Trending
        </label>
        <label
          htmlFor="oldest"
          className="flex items-center gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            name="sort"
            value="oldest"
            id="oldest"
            checked={searchParams.get("sort")?.split(",").includes("oldest")}
            onChange={handleCheckboxChange}
          />
          Oldest
        </label>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="mt-4 text-sm font-medium">Categorios</h1>
        <div className="flex flex-col gap-2 text-sm">
          <span
            className="underline cursor-pointer"
            onClick={() => handleCategory("general")}
          >
            All
          </span>
          <span
            className="underline cursor-pointer"
            onClick={() => handleCategory("web-design")}
          >
            Web design
          </span>
          <span
            className="underline cursor-pointer"
            onClick={() => handleCategory("development")}
          >
            Development
          </span>
          <span
            className="underline cursor-pointer"
            onClick={() => handleCategory("databases")}
          >
            Databases
          </span>
          <span
            className="underline cursor-pointer"
            onClick={() => handleCategory("search-engine")}
          >
            Search Engine
          </span>
          <span
            className="underline cursor-pointer"
            onClick={() => handleCategory("marketing")}
          >
            Marketing
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
