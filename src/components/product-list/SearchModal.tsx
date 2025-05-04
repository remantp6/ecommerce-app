import React from "react";
import { Input, List, Modal, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Product } from "../product-list/ProductList";

// types for the search modal props
interface SearchModalProps {
  isOpen: boolean;
  searchQuery: string;
  products: Product[];
  onClose: () => void;
  onChange: (value: string) => void;
}

const { Text } = Typography;

const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  searchQuery,
  products,
  onClose,
  onChange,
}) => {
  return (
    <Modal
      title={null}
      open={isOpen}
      footer={null}
      closable
      onCancel={onClose}
      styles={{ body: { paddingTop: 32 } }}
    >
      <Input
        placeholder="Search products by name, category or type"
        prefix={<SearchOutlined />}
        value={searchQuery}
        onChange={(e) => onChange(e.target.value)}
        size="large"
        style={{ marginBottom: 24 }}
      />

      <div style={{ maxHeight: "30vh", overflowY: "auto", border: "1px solid #f0f0f0", borderRadius: 8 }}>
        {searchQuery && products.length > 0 ? (
          <List
            dataSource={products}
            renderItem={(product: Product) => (
              <List.Item>
                <Link
                  to={`/${product.category}/${product.id}`}
                  onClick={onClose}
                  style={{ paddingLeft: 10 }}
                >
                  <Text className="!font-xl">{product.product_name}, {product.category}</Text>
                </Link>
              </List.Item>
            )}
          />
        ) : (
          <div style={{ textAlign: "center", padding: 30 }}>
            <Text type="secondary">
              {searchQuery
                ? "No products match your search"
                : "Search for products by name, category or type"}
            </Text>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default SearchModal;
