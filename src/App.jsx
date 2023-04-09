import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "./utils/api";

const App = () => {
  useEffect(() => {
    apiTesting();
  }, []);
  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
    });
    // console.log(json);
  };

  return <div>App</div>;
};

export default App;
