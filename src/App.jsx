import React, { useEffect, useState } from "react";

import { fetchDataFromApi } from "./utils/api";

import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./utils/homeSlice";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import NotFound from "./pages/404/NotFound";
import Explore from "./pages/explore/Explore";
import SearchResults from "./pages/searchResults/SearchResults";

const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((store) => store.home);
  // console.log(url);
  useEffect(() => {
    apiConfiguration();
  }, []);
  const apiConfiguration = () => {
    fetchDataFromApi("/configuration").then((res) => {
      // console.log(res);
      const url = {
        backdrop: res?.images?.secure_base_url + "original",
        poster: res?.images?.secure_base_url + "original",
        profile: res?.images?.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
