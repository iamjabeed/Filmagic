import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "./utils/api";

import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./utils/homeSlice";

const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((store) => store.home);
  console.log(url);
  useEffect(() => {
    apiTesting();
  }, []);
  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      // console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };

  return <div>{url?.total_pages}</div>;
};

export default App;
