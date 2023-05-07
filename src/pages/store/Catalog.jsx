import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { setCurrentSlide } from "../../redux/slices/carouselSlice";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
}

const Catalog = ({ items }) => {
  const currentSlide = useSelector((state) => state.carousel.currentSlide);
  const dispatch = useDispatch();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: currentSlide,
    afterChange: (index) => {
      dispatch(setCurrentSlide(index));
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  useEffect(() => {
    // Reset current slide on items change
    dispatch(setCurrentSlide(0));
  }, [items]);

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.imageUrl} alt={item.caption} />
          <p>{item.caption}</p>
        </div>
      ))}
    </Slider>
  );
};

export default Catalog;
