import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";

useSelector;
const Genres = ({ data }) => {
  const { genres } = useSelector((store) => store.home);

  return (
    <div className="genres">
      {data?.map((g) => {
        if (!genres[g]?.name) return;
        return (
          <div className="gener" key={g}>
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
