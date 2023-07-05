//style imports
import "./filter.css";

//icon imports
import { FaFilter } from "react-icons/fa";

//react hook imports
import { useContext, useState } from "react";

//context imports
import { PostContext } from "../../../index";

//Filter component
export const Filter = () => {
  const { filtersHandler } = useContext(PostContext);
  //State variables
  const [appliedFilter, setAppliedFilter] = useState("Latest");
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  //event handlers
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
            </div>
          )}
        </div>
      </div>
    </>
  );
};
