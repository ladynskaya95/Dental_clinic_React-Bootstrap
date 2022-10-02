import React from 'react'
// import Carousel from "react-bootstrap/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// const Catalog = () => {
//   return (
//     <div className="catalog">
//       <div className="catalog_categories flex-column">
//         <div className="catalog_categories_sale catalog_categories_item">
//           <h3>АкціЇ</h3>
//           <div className="catalog_categories_item_carousel">
//             <Carousel variant="dark">
//               <Carousel.Item>
//                 <Carousel.Caption>
//                   <ul className="row">
//                     <li className="col-2">
//                       <div className="card text-bg-light">
//                         <div className="achievements_text card-body">
//                           <h4>тут буде картинка</h4>
//                           <p>а тут посилання</p>
//                         </div>
//                       </div>
//                     </li>
//                     <li className="col-2">
//                       <div className="card text-bg-light">
//                         <div className="achievements_text card-body">
//                           <h4>тут буде картинка</h4>
//                           <p>а тут посилання</p>
//                         </div>
//                       </div>
//                     </li>
//                     <li className="col-2">
//                       <div className="card text-bg-light">
//                         <div className="achievements_text card-body">
//                           <h4>тут буде картинка</h4>
//                           <p>а тут посилання</p>
//                         </div>
//                       </div>
//                     </li>
//                     <li className="col-2">
//                       <div className="card text-bg-light">
//                         <div className="achievements_text card-body">
//                           <h4>тут буде картинка</h4>
//                           <p>а тут посилання</p>
//                         </div>
//                       </div>
//                     </li>
//                   </ul>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 <Carousel.Caption>
//                   <h5>Second slide label</h5>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   </p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item></Carousel.Item>
//             </Carousel>
//           </div>
//         </div>
//         <div className="catalog_categories_sale catalog_categories_item">
//           <h3>Бестселлери</h3>
//           <div>
//             <Carousel variant="dark">
//               <Carousel.Item>
//                 <Carousel.Caption>
//                   <h5>First slide label</h5>
//                   <p>
//                     Nulla vitae elit libero, a pharetra augue mollis interdum.
//                   </p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 <Carousel.Caption>
//                   <h5>Second slide label</h5>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   </p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 <Carousel.Caption>
//                   <h5>Third slide label</h5>
//                   <p>
//                     Praesent commodo cursus magna, vel scelerisque nisl
//                     consectetur.
//                   </p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//             </Carousel>
//           </div>
//         </div>
//         <div className="catalog_categories_sale catalog_categories_item">
//           <h3>Поради лікарів</h3>
//           <div>
//             <Carousel variant="dark">
//               <Carousel.Item>
//                 <Carousel.Caption>
//                   <h5>First slide label</h5>
//                   <p>
//                     Nulla vitae elit libero, a pharetra augue mollis interdum.
//                   </p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 <Carousel.Caption>
//                   <h5>Second slide label</h5>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   </p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item></Carousel.Item>
//             </Carousel>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Catalog
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