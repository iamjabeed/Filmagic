import React, { useEffect, useState } from "react";

import { fetchDataFromApi } from "./utils/api";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./utils/homeSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import NotFound from "./pages/404/PageNotFound";
import Explore from "./pages/explore/Explore";
import SearchResults from "./pages/searchResults/SearchResults";

const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((store) => store.home);
  // console.log(url);
  useEffect(() => {
    apiConfiguration();
    genresCall();
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

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);

    // console.log(data);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
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
      <Footer />
    </BrowserRouter>
  );
};

export default App;
