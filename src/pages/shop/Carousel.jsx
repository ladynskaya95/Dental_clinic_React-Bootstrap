import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setImages,
  setCurrentIndex,
  nextImage,
  previousImage,
} from "../../redux/slices/carouselSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = ({ id, images, title }) => {
//   const dispatch = useDispatch();
  
//   const { images: carouselImages, currentIndex } = useSelector(
//     (state) => state.carousel[id]
//   );


//   useEffect(() => {
//     dispatch(setImages({ id, images }));
//   }, [id, images]);

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // beforeChange: (oldIndex, newIndex) => {
    //   dispatch(setCurrentIndex({ id, currentIndex: newIndex }));
    // },
    // initialSlide: currentIndex,
  };

  return (
    <div className="catalog_categories_sale catalog_categories_item">
      <div>
        <h1>{title}</h1>
        <Slider {...settings}>
          {images.map((image, id) => (
            <div className="card product" key={id}>
              <div className="card-body product-body">
                <img src={image} />
                <h3>1</h3>
              </div>
            </div>
          ))}
        </Slider>
        {/* <button onClick={() => dispatch(previousImage())}>Previous</button>
      <button onClick={() => dispatch(nextImage())}>Next</button> */}
      </div>
    </div>
  );
};

export default Carousel;
