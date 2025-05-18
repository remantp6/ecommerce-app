import React from "react";
import { Card, Grid, Image, Typography, Button } from "antd";

// types for the product card props
interface ProductCardProps {
  product_name: string;
  short_desc: string;
  image: string;
  price: string;
  category: string;
}

const cardStyle: React.CSSProperties = {
  border: "0px",
};

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const ProductCard: React.FC<ProductCardProps> = ({
  product_name,
  short_desc,
  image,
  price,
  category,
}) => {
  const screens = useBreakpoint();
  const isXLOrAbove = screens.lg;

  return (
    <Card style={cardStyle}>
      <div className="relative">
        <Image
          preview={false}
          loading="lazy"
          alt={product_name}
          src={image}
          width={"100%"}
          className="!h-[240px] xl:!h-[380px] !object-cover !rounded-[18px]"
        />
        <div className="!absolute !left-[20px] !bottom-[22px]">
          <Title
            level={isXLOrAbove ? 2 : 3}
            style={{ textTransform: "uppercase", color: "#ffffff" }}
          >
            {category}
          </Title>
          <Button className="!bg-white !text-black !border-none !rounded-full !font-medium md:!px-8 md:!py-5">
            See Details
          </Button>
        </div>
      </div>
      <div className="mt-3">
        <Title
          level={isXLOrAbove ? 3 : 5}
          style={{ marginTop: 0, marginBottom: 1 }}
        >
          {product_name}
        </Title>
        <Text className="!text-gray-400 lg:!text-lg">{short_desc}</Text>
        <Title
          level={isXLOrAbove ? 3 : 5}
          style={{ marginTop: 1, marginBottom: 0 }}
        >
          {price}
        </Title>
      </div>
    </Card>
  );
};

export default ProductCard;
