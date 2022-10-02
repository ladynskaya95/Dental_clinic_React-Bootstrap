import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


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


const Catalog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="catalog">
      <div className="catalog_categories flex-column">
        <div className="catalog_categories_sale catalog_categories_item">
          <h3>Акції</h3>
          <Slider {...settings}>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
          </Slider>
        </div>
        <div className="catalog_categories_sale catalog_categories_item">
          <h3>Бестселлери</h3>
          <Slider {...settings}>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
          </Slider>
        </div>
        <div className="catalog_categories_sale catalog_categories_item">
          <h3>Поради лікарів</h3>
          <Slider {...settings}>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
            <div className="card product">
              <div className="card-body product-body">
                <h3>1</h3>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Catalog;