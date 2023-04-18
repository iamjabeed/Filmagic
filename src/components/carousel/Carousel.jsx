import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImg/Img";
import PosterFallback from "../../assets/no-poster.png";

import "./style.scss";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";

const Carousel = ({ data, loading, endpoint, title }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((store) => store.home);

  const navigate = useNavigate();

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth / 2 + 20)
        : container.scrollLeft + (container.offsetWidth / 2 + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const SkItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="carousel">
      <ContentWrapper>
        {title && <div className="carouselTitle">{title}</div>}
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRighttNav arrow"
          onClick={() => navigation("right")}
        />

        {!loading ? (
          <div className="carouselItems" ref={carouselContainer}>
            {data?.map((item) => {
              const posterUrl = item?.poster_path
                ? url.poster + item?.poster_path
                : PosterFallback;

              return (
                <div
                  key={item.id}
                  className="carouselItem"
                  onClick={() =>
                    navigate(`/${item?.media_type || endpoint}/${item?.id}`)
                  }
                >
                  <div className="posterBlock">
                    <Img src={posterUrl} />
                  </div>
                  <div className="textBlock">
                    <span className="title">{item?.name || item?.title}</span>
                    <span className="date">
                      {dayjs(item?.release_Date).format("MMM D, YYYY")}
                    </span>

                    <div className="ratingGenres">
                      <CircleRating rating={item?.vote_average.toFixed(1)} />
                      <Genres data={item?.genre_ids.slice(0, 2)} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {SkItem()}
            {SkItem()}
            {SkItem()}
            {SkItem()}
            {SkItem()}
            {SkItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
