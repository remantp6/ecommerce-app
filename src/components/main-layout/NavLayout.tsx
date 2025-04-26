import React, { useState } from "react";
import { Layout, Menu, Drawer, Grid, Space, MenuProps } from "antd";
import {
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import TopHeader from "../TopHeader";

// types for navbar props
interface NavBarProps {
  children: React.ReactNode;
}

// types for menu items
type MenuItem = Required<MenuProps>["items"][number];

// destructure Layout components
const { Header, Content, Footer } = Layout;

// destructure Grid components
const { useBreakpoint } = Grid;

// menu items for the navbar
const items: MenuItem[] = [
  { label: "Men", key: "men" },
  { label: "Women", key: "women" },
  { label: "Kids", key: "kids" },
];

const NavLayout: React.FC<NavBarProps> = ({ children }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const screens = useBreakpoint();
  const [current, setCurrent] = useState("men");

  // function to handle menu item click
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <TopHeader />
      <Layout style={{ minHeight: "100vh" }}>
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
                selectedKeys={[current]}
                style={{ borderBottom: "none" }}
              />
            </div>
          ) : (
            <MenuOutlined style={{ fontSize: 18 }} onClick={() => setDrawerVisible(true)}/>
          )}

          {/* Right Icons */}
          <Space size="middle">
            <SearchOutlined style={{ fontSize: 18 }} />
            <ShoppingCartOutlined style={{ fontSize: 18 }} />
            <UserOutlined style={{ fontSize: 18 }} />
          </Space>
        </Header>

        {/* Mobile Drawer */}
        <Drawer
          title="Navigation"
          placement="right"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          width={"100%"}
        >
          <Menu mode="vertical" items={items} />
        </Drawer>

        <Content
          style={{ backgroundColor: "#ffff", minHeight: "calc(100vh - 150px)" }}
          className="md:!pt-[22px]"
        >
          {children}
        </Content>

        <Footer style={{ textAlign: "center" }}>
          ©2025 Your Company. All rights reserved.
        </Footer>
      </Layout>
    </>
  );
};

export default NavLayout;
