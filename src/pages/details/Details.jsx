import React from "react";

import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import "./style.scss";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videoSection/VideoSection";
import Recommendation from "./carousels/Recommendation";
import Similar from "./carousels/Similar";

import Spinner from "../../components/spinner/Spinner";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  // if (!data) return null;
  // if (!credits) return null;

  return (
    <>
      {/* {data ? (
        <>
          <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
          <Cast data={credits?.cast} loading={creditsLoading} />
          <VideosSection data={data} loading={loading} />
          <Recommendation mediaType={mediaType} id={id} />
          <Similar mediaType={mediaType} id={id} />
        </>
      ) : (
        <Spinner initial={true} />
      )} */}

      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Recommendation mediaType={mediaType} id={id} />
      <Similar mediaType={mediaType} id={id} />
    </>
  );
};

export default Details;
