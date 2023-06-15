import { FaFilter } from "react-icons/fa";
import "./filter.css";
import { useContext, useState } from "react";
import { PostContext } from "../../../index";
export const Filter = () => {
  const [appliedFilter, setAppliedFilter] = useState("All");
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const { filtersHandler } = useContext(PostContext);

  const handleCurrentFilterClick = (currentFilter) => {
    setAppliedFilter(currentFilter);
    filtersHandler(currentFilter);
    setShowFilterOptions(false);
  };
  return (
    <>
      <div className="filter-box">
        <p className="current-applied-filter">{appliedFilter} Posts</p>
        <div className="filter-container">
          <FaFilter
            className="filter-icon"
            onClick={() => setShowFilterOptions(!showFilterOptions)}
          />
          {showFilterOptions && (
            <div className="filter-options-container">
              <p
                className="filter-option"
                onClick={() => handleCurrentFilterClick("Latest")}
              >
                Latest
              </p>
              <p
                className="filter-option"
                onClick={() => handleCurrentFilterClick("Trending")}
              >
                Trending
              </p>
              {/* <p
                className="filter-option"
                onClick={() => handleCurrentFilterClick("All")}
              >
                All Posts
              </p> */}
            </div>
          )}
        </div>
        {/* <p
          className="current-applied-filter"
          onClick={() => filtersHandler("Latest")}
        >
          <FaKiwiBird /> Latest Posts
        </p>
        <p
          className="current-applied-filter"
          onClick={() => filtersHandler("Trending")}
        >
          <FaFire /> Trending Posts
        </p> */}
      </div>
    </>
  );
};
