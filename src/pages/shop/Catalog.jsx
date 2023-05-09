import Carousel from "./Carousel";

const Catalog = () => {
  const carousels = [
    {
      id: 1,
      title: "Акції",
      images: [
        "../../img/shop/paste/frezzyderm sensiteeth.jpg",
        "../../img/shop/floss/flosspicsDenTek.jpg",
        "../../img/shop/spec/oralbrush-cleaner.jpg",
      ],
    },
    {
      id: 2,
      title: "Бестселлери",
      images: ["../../img/1.jpg", "../../img/2.jpg", "../../img/3.jpg"],
    },
  ];

  return (
    <div className="catalog">
      <div className="catalog_categories flex-column">
        {carousels.map((carousel) => (
          <Carousel
            className="catalog_categories_item_carousel"
            key={carousel.id}
            id={carousel.id}
            images={carousel.images}
            title={carousel.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
