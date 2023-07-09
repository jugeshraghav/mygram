//style imports
import "./filter.css";

//icon imports
import { FaFilter } from "react-icons/fa";

//Filter component
export const Filter = ({
  appliedFilter,
  setAppliedFilter,
  showFilterOptions,
  setShowFilterOptions,
}) => {
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
                onClick={() => setAppliedFilter("Latest")}
              >
                Latest
              </p>
              <p
                className="filter-option"
                onClick={() => setAppliedFilter("Trending")}
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
