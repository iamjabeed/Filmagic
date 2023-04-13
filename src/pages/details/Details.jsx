import React from "react";

import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import "./style.scss";
import DetailsBanner from "./detailsBanner/DetailsBanner";

const Details = () => {
  // const { mediType, id } = useParams();
  // const {data, loading}=useFetch(`/${mediType}/${id}`);

  return (
    <div>
      <DetailsBanner />
    </div>
  );
};

export default Details;
