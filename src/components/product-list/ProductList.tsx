import { FC } from "react";
import { Col, Row } from "antd";
import ProductCard from "./ProductCard";
import Header from "./Header";

// types for the product
interface Product {
  id: number;
  product_name: string;
  short_desc: string;
  image: string;
  price: string;
}

// types for the product list props
interface ProductListProps {
  products: Product[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <>
      <Header label="Collections" desc='Our collection, where classic and contemporary styles converge in perfect harmony.'/>
      <Row className="md:!p-5 lg:!p-12 xl:!p-14">
        {products?.map((product) => (
          <Col key={product.id} xs={24} sm={12} lg={8}>
            <ProductCard
              product_name={product.product_name}
              short_desc={product.short_desc}
              image={product.image}
              price={product.price}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductList;
