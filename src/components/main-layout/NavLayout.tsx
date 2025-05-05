import React, { useEffect, useState } from "react";
import { Layout, Menu, Drawer, Grid, Space, MenuProps } from "antd";
import {
  CloseOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import FooterComponent from "../common/FooterComponent";
import { Product } from "../product-list/ProductList";
import { products } from "../../data/products";
import { items } from "./navItems";
import SearchModal from "../product-list/SearchModal";

// types for navbar props
interface NavBarProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  isNoAuthPage?: boolean;
}

// destructure Layout components
const { Header, Content } = Layout;

// destructure Grid components
const { useBreakpoint } = Grid;

const NavLayout: React.FC<NavBarProps> = ({
  children,
  header,
  isNoAuthPage,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const screens = useBreakpoint();
  const location = useLocation(); //Get current route

  // Determine active tab based on pathname
  const currentPath = location.pathname;
  const currentTab = currentPath.startsWith("/men")
  ? "men"
  : currentPath.startsWith("/women")
  ? "women"
  : currentPath.startsWith("/kids")
  ? "kids"
  : currentPath === "/"
  ? "home"
  : "";


  const tabPaths = ["/", "/men", "/women", "/kids"];
  const isMainTabPage = tabPaths.includes(currentPath);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 76) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // function to handle modal open
  const showModal = () => {
    setIsModalOpen(true);
  };

  // function to handle modal close
  const handleCancel = () => {
    setIsModalOpen(false);
    setSearchQuery("");
  };

  // function to handle menu item click
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  // Filter products based on search query
  const filteredProducts = products?.filter((product: Product) => {
    const query = searchQuery.toLowerCase();
    return (
      product.product_name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product?.sub_category?.toLowerCase().includes(query)
    );
  });

  return (
    <>
      {header}
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#fff",
           // boxShadow: "0 2px 8px #f0f1f2",
            position: isFixed ? "fixed" : "static",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            transition: "all 0.3s ease",
          }}
          className="!px-[20px] md:!ps-[20px] md:!pe-[40px]"
        >
          {/* Left Nav or Hamburger */}
          {screens.md ? (
            <div style={{ flex: 1, minWidth: 0 }}>
              <Menu
                mode="horizontal"
                onClick={onClick}
                items={items}
                selectedKeys={isMainTabPage && currentTab ? [currentTab] : []}
                style={{ borderBottom: "none" }}
              />
            </div>
          ) : (
            <MenuOutlined
              style={{ fontSize: 22 }}
              onClick={() => setDrawerVisible(true)}
            />
          )}

          {/* Right Icons */}
          <Space size="large">
            <SearchOutlined
              onClick={showModal}
              style={{ fontSize: 22 }}
              className="!cursor-pointer !text-black"
            />
            <Link to="/cart" className="!text-black">
              <ShoppingCartOutlined
                style={{ fontSize: 22 }}
                className="!cursor-pointer"
              />
            </Link>
            <Link to="/login" className="!text-black">
              <UserOutlined
                style={{ fontSize: 22 }}
                className="!cursor-pointer"
              />
            </Link>
          </Space>
        </Header>

        {/* search modal */}
        {currentPath === "/" && (
          <SearchModal
            isOpen={isModalOpen}
            products={filteredProducts}
            searchQuery={searchQuery}
            onChange={setSearchQuery}
            onClose={handleCancel}
          />
        )}
        {/* Mobile Drawer */}
        <Drawer
          closeIcon={
            <CloseOutlined
              style={{ fontSize: 22 }}
              className="!cursor-pointer"
            />
          }
          placement="right"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          width={"100%"}
          styles={{
            body: { padding: "14px 0 0 0" },
          }}
        >
          <Menu
            mode="vertical"
            items={items}
            onClick={() => setDrawerVisible(false)}
          />
        </Drawer>

        {isNoAuthPage ? (
          <Content className=" md:!pt-[22px] !bg-white">{children}</Content>
        ) : (
          <Content className="!bg-white">{children}</Content>
        )}

        <FooterComponent />
      </Layout>
    </>
  );
};

export default NavLayout;
