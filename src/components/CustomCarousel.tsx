import React from "react";
import { Carousel, Grid, Image, Typography } from "antd";
import img1 from "../assets/carousel-image1.jpg";
import img2 from "../assets/carousel-image2.jpg";
import img3 from "../assets/carousel-image3.jpg";

const { Title, Paragraph } = Typography;

const slides = [
  {
    image: img1,
    title: "Explore the Latest Fashion Trends",
    description: "Discover our curated styles that define this season’s hottest looks.",
  },
  {
    image: img2,
    title: "Upgrade Your Style with Our New Collection",
    description: "From casual wear to evening outfits — we’ve got you covered.",
  },
  {
    image: img3,
    title: "Step into Elegance and Comfort",
    description: "Shop premium designs tailored for comfort and class.",
  },
];

const { useBreakpoint } = Grid;

const CustomCarousel: React.FC = () => {
  const screens = useBreakpoint();
  const isMdOrAbove = screens.md;

  return (
    <Carousel
    autoplay
    autoplaySpeed={4000}
    pauseOnHover={false}
    dotPosition="right"
    className="!relative"
  >
    {slides.map((slide, idx) => (
      <div key={idx} className="relative">
        <Image
          preview={false}
          src={slide.image}
          alt={`slide-${idx}`}
          width="100%"
          className="!h-[calc(100dvh-208px)] md:!h-[calc(100dvh-170px)] !object-cover"
        />
        <div className="!absolute !left-8 !bottom-8 md:!left-14 md:!bottom-14 text-white max-w-[80%] drop-shadow-lg">
          <Title level={isMdOrAbove ? 2 : 4} className="!uppercase !text-white !m-0">{slide.title}</Title>
          <Paragraph className="!text-white !mt-1 !mb-0 !text-lg md:text-xl">{slide.description}</Paragraph>
        </div>
    </div>
  ))}
</Carousel>
  )
};

export default CustomCarousel;
