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
    console.log(images)
//   const dispatch = useDispatch();
  
//   const { images: carouselImages, currentIndex } = useSelector(
//     (state) => state.carousel[id]
//   );
  const state = useSelector((state) => state);
  console.log(state);

//   useEffect(() => {
//     dispatch(setImages({ id, images }));
//   }, [id, images]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
          {images.map((image, index) => (
            <div className="card product" key={index}>
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
