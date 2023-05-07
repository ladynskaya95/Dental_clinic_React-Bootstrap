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




// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "blue" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "blue" }}
//       onClick={onClick}
//     />
//   );
// }

const Catalog = ({ items }) => {
  const state = useSelector((state) => state)
  console.log(state)
   console.log(items);
   const dispatch = useDispatch();
   const images = useSelector((state) => state.carousel.images);
   const currentIndex = useSelector((state) => state.carousel.currentIndex);

   useEffect(() => {
     dispatch(setImages(["image1.jpg", "image2.jpg", "image3.jpg"]));
   }, []);

  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      dispatch(setCurrentIndex(newIndex));
    },
    initialSlide: currentIndex,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };


  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} />
          </div>
        ))}
      </Slider>
      <button onClick={() => dispatch(previousImage())}>Previous</button>
      <button onClick={() => dispatch(nextImage())}>Next</button>
    </div>
  );
};

export default Catalog;
