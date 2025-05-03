import React, { useState } from "react";
import { Layout, Menu, Drawer, Grid, Space, MenuProps } from "antd";
import {
  CloseOutlined,
  HomeOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

// types for navbar props
interface NavBarProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  isNoAuthPage?: boolean;
}

// types for menu items
type MenuItem = Required<MenuProps>["items"][number];

// destructure Layout components
const { Header, Content, Footer } = Layout;

// destructure Grid components
const { useBreakpoint } = Grid;

// menu items for the navbar
const items: MenuItem[] = [
  {
    label: (
      <Link to="/" className="!text-black">
        <HomeOutlined style={{ fontSize: 24 }} />
      </Link>
    ),
    key: "home",
  },
  {
    label: (
      <Link to="/men" className="!text-black">
        Men
      </Link>
    ),
    key: "men",
  },
  {
    label: (
      <Link to="/women" className="!text-black">
        Women
      </Link>
    ),
    key: "women",
  },
  {
    label: (
      <Link to="/kids" className="!text-black">
        Kids
      </Link>
    ),
    key: "kids",
  },
];

const NavLayout: React.FC<NavBarProps> = ({
  children,
  header,
  isNoAuthPage,
}) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const screens = useBreakpoint();
  const location = useLocation(); //Get current route

  // Determine active tab based on pathname
  const currentPath = location.pathname;
  const currentTab = currentPath.startsWith("/")
    ? "home"
    : currentPath.startsWith("/men")
    ? "men"
    : currentPath.startsWith("/women")
    ? "women"
    : currentPath.startsWith("/kids")
    ? "kids"
    : ""; // No active tab if not matched

  const tabPaths = ["/", "/men", "/women", "/kids"];
  const isMainTabPage = tabPaths.includes(currentPath);

  // function to handle menu item click
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

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
            boxShadow: "0 2px 8px #f0f1f2",
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

        <Footer style={{ textAlign: "center" }}>
          ©2025 Your Company. All rights reserved.
        </Footer>
      </Layout>
    </>
  );
};

export default NavLayout;
