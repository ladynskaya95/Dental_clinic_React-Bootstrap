import Carousel from "./Carousel";

const Catalog = () => {
  const carousels = [
    {
      id: 1,
      images: ["../../img/1.jpg", "../../img/2.jpg", "../../img/3.jpg"],
    },
    {
      id: 2,
      images: ["../../img/1.jpg", "../../img/2.jpg", "../../img/3.jpg"],
    },
  ];

  return (
    <div>
      {carousels.map((carousel) => (
        <Carousel key={carousel.id} id={carousel.id} images={carousel.images}  />
      ))}
    </div>
  );
};

export default Catalog;
