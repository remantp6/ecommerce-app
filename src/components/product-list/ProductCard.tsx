import React from "react";
import { Card, Grid, Image, Typography } from "antd";

// types for the product card props
interface ProductCardProps {
  product_name: string;
  short_desc: string;
  image: string;
  price: string;
}

// styles for the card
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
}) => {
  const screens = useBreakpoint();
  const isXLOrAbove = screens.lg;

  return (
    <Card style={cardStyle}>
      <Image
        preview={false}
        src={image}
        width={"100%"}
        className="!h-[240px] xl:!h-[380px] !object-cover !rounded-[18px]"
      />
      <div className="mt-3">
      <Title level={isXLOrAbove ? 3 : 5} style={{marginTop: 0, marginBottom: 1}}>{product_name}</Title>
      <Text className="!text-gray-400 lg:!text-lg">{short_desc}</Text>
      <Title level={isXLOrAbove ? 3 : 5} style={{marginTop: 1, marginBottom: 0}}> {price}</Title>
      </div>
    </Card>
  );
};

export default ProductCard;
