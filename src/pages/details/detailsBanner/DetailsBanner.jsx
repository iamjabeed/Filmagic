import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import Genres from "../../../components/genres/Genres";
import CircleRating from "../../../components/circleRating/CircleRating";
import Img from "../../../components/lazyLoadImg/Img";
import PosterFallback from "../../../assets/no-poster.png";

import { FcRating } from "react-icons/fc";

import { PlayIcon } from "./PlayIcon";

import startIcon from "../../../assets/star-fill.svg";

const DetailsBanner = ({ video, crew }) => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  const { url } = useSelector((store) => store.home);
  console.log(video);
  console.log(crew);
  // console.log(data);
  // console.log(data?.backdrop_path);
  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };
  const imgBackdropPath = url?.backdrop + data?.backdrop_path;

  if (!imgBackdropPath) return null;

  const _genres = data?.genres?.map((g) => g.id);

  const director = crew?.filter((f) => f.job === "Director");
  const writer = crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );

  return (
    <div className="detailsBanner">
      {!loading ? (
        <>
          {!!data && (
            <React.Fragment>
              <div className="backdrop-img">
                <Img src={imgBackdropPath} />
              </div>
              <div className="opacity-layer"></div>

              <ContentWrapper>
                <div className="content">
                  <div className="left">
                    {data?.poster_path ? (
                      <Img
                        src={url.poster + data?.poster_path}
                        className="posterImg"
                      />
                    ) : (
                      <Img src={PosterFallback} className="posterImg" />
                    )}
                  </div>
                  <div className="right">
                    <div className="title">
                      {`${data?.name || data?.title} (${dayjs(
                        data?.release_date
                      ).format("YYYY")})`}
                    </div>
                    <div className="subtitle">{data?.tagline}</div>

                    <Genres data={_genres} />

                    <div className="row">
                      <CircleRating rating={data?.vote_average?.toFixed(1)} />
                      {/* <span className="imdbRating">
                      {data?.vote_average.toFixed(1)}
                       <img src={startIcon} alt="startIcon" />
                      </span> */}
                      <div className="playbtn">
                        <PlayIcon />
                        <span className="text">Watch Trailer</span>
                      </div>
                    </div>

                    <div className="overview">
                      <div className="heading">Overview:</div>
                      <div className="description">{data?.overview}</div>
                    </div>

                    <div className="info">
                      {data?.status && (
                        <div className="infoItem">
                          <span className="text bold">Status: {""}</span>
                          <span className="text">{data?.status}</span>
                        </div>
                      )}
                      {data?.release_date && (
                        <div className="infoItem">
                          <span className="text bold">Release Date: {""}</span>
                          <span className="text">
                            {dayjs(data?.release_date).format("MMM DD, YYYY")}
                          </span>
                        </div>
                      )}
                      {data?.runtime && (
                        <div className="infoItem">
                          <span className="text bold">Run Time: {""}</span>
                          <span className="text">
                            {toHoursAndMinutes(data?.runtime)}
                          </span>
                        </div>
                      )}
                    </div>

                    {director.length > 0 && (
                      <div className="info">
                        <span className="text bold">Director: {""}</span>
                        <span className="text">
                          {director.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {director.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                    {writer.length > 0 && (
                      <div className="info">
                        <span className="text bold">Writer: {""}</span>
                        <span className="text">
                          {writer.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {writer.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                    {data?.created_by?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Creator: {""}</span>
                        <span className="text">
                          {data?.created_by?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {data?.created_by?.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}

                    
                  </div>
                </div>
              </ContentWrapper>
            </React.Fragment>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
